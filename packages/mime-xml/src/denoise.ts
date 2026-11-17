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

import type { Task } from "@metreeca/flow";
import { map } from "@metreeca/flow/tasks";
import type { AnyNode } from "domhandler";
import { cfemail } from "./denoise.core.js";


/**
 * Creates a request noise filter.
 *
 * The task converts a feed of parsed X/HTML trees into a feed of the same trees cleared of per-request noise, one tree
 * per input. Per-request noise is markup that changes on every request while the content of the page stays the same.
 * Once it is cleared, a page read on successive runs yields the same tree, rendering and digest until its content
 * actually changes, and downstream tasks see the content as its authors wrote it.
 *
 * The following noise is removed wherever it appears in a tree:
 *
 * - **Cloudflare e-mail obfuscation** — Cloudflare hides each address behind a payload encrypted under a key drawn
 *   anew for every request. An element with the `__cf_email__` class and the payload in its `data-cfemail` attribute
 *   gets the address as its text. A link to the `/cdn-cgi/l/email-protection` path, relative or absolute, with the
 *   payload as fragment gets the `mailto:` URL of the address as its target. Payloads that can't be decoded are kept.
 *
 * Extra `rules` remove noise peculiar to a source, after the built-in rules and in the order given. Each rule must
 * return a new tree rather than modify its input, so that the task as a whole never modifies source trees.
 *
 * Source trees are never modified: trees carrying no noise are passed through as they stand, and the others are
 * cleared into new trees. Base URLs recorded on source trees are kept, so relative references keep resolving against
 * the address a page was retrieved from, and renderings keep stating that address as the page URL.
 *
 * > [!NOTE]
 * >
 * > - **Incremental**: each tree is emitted as soon as it is drawn, so endless sources are processed for as long as the
 * >   feed is consumed.
 * > - **Streaming**: trees are processed one at a time and released once cleared, so memory use doesn't grow with the
 * >   length of the feed.
 * > - **Stateless**: each tree is processed independently, so the result doesn't depend on how the feed is split
 * >   across nested feeds or runs, nor on the order in which trees are drawn from it.
 *
 * @param rules Extra rules removing noise peculiar to a source, applied after the built-in ones in the order given
 *
 * @returns A task converting a feed of parsed X/HTML trees into a feed of the same trees cleared of per-request noise
 *
 * @throws {@link !Error Error} While the feed is consumed, if the source feed fails or an extra rule throws
 *
 * @see {@link https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/ Cloudflare - E-mail Address Obfuscation}
 *
 * @group Factories
 */
export function denoise(...rules: readonly ((tree: AnyNode) => AnyNode)[]): Task<AnyNode> {

	const applied = [cfemail(), ...rules];

	return map(tree => applied.reduce((denoised, rule) => rule(denoised), tree));

}
