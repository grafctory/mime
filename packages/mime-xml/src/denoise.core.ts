/*
 * Copyright © 2026 Metreeca srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { AnyNode, Element } from "domhandler";
import { cloneNode, Text } from "domhandler";
import { DomUtils } from "htmlparser2";


/**
 * Creates a Cloudflare e-mail decoder.
 *
 * Restores in plain form every address Cloudflare obfuscated in a tree, in the forms documented by `denoise()`. The
 * address then reads and links as it was written, whatever key the request drew to encrypt it.
 *
 * @returns A rule converting a parsed X/HTML tree into a new tree with obfuscated addresses in plain form, or the input
 *          tree as it stands if it carries none; the input tree is never modified
 */
export function cfemail(): (tree: AnyNode) => AnyNode {

	return tree => DomUtils.existsOne(obfuscated, [tree])
		? restore(cloneNode(tree, true))
		: tree;


	function restore(copy: AnyNode): AnyNode {

		// domhandler trees are doubly linked and offer no persistent construction API, so the restored tree is edited
		// in place on a private deep copy, never on the input tree the caller still holds

		DomUtils.findAll(obfuscated, [copy]).forEach(element => {

			const shown = shownAddress(element);
			const linked = linkedAddress(element);

			if ( shown !== undefined ) {

				const node = new Text(shown);

				node.parent = element;
				element.children = [node];

			}

			if ( linked !== undefined ) {
				element.attribs = { ...element.attribs, href: `mailto:${linked}` };
			}

		});

		return copy;

	}

	function obfuscated(element: Element): boolean {
		return shownAddress(element) !== undefined || linkedAddress(element) !== undefined;
	}

	function shownAddress(element: Element): undefined | string {

		return decode((element.attribs["class"] ?? "").split(/\s+/).includes("__cf_email__")
			? element.attribs["data-cfemail"]
			: undefined
		);

	}

	function linkedAddress(element: Element): undefined | string {

		return decode(element.name === "a"
			? /^(?:[a-z][a-z0-9+.-]*:\/\/[^/?#]*)?\/cdn-cgi\/l\/email-protection#(.*)$/i
				.exec(element.attribs["href"] ?? "")?.[1]
			: undefined
		);

	}

	function decode(payload: undefined | string): undefined | string {

		// a key byte followed by at least one encoded byte

		if ( payload !== undefined && /^(?:[0-9a-f]{2}){2,}$/i.test(payload) ) {

			const [key = 0, ...bytes] = Array.from(payload.matchAll(/../g), ([pair]) => parseInt(pair, 16));

			try {

				return new TextDecoder("utf-8", { fatal: true }).decode(Uint8Array.from(bytes, byte => byte^key));

			} catch { // a payload decoding into malformed UTF-8 is not an address

				return undefined;

			}

		} else {

			return undefined;

		}

	}

}
