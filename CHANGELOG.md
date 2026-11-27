# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> [!NOTE]
> Packages published under the `@grafctory` scope from version 0.5.1; earlier versions were published under `@metreeca`.

## [0.7.0](https://github.com/grafctory/mime/compare/v0.6.0...HEAD)

## [0.6.0](https://github.com/grafctory/mime/compare/v0.5.1...v0.6.0) - 2026-11-26

### Changed

- **Breaking**: `@grafctory/mime-jsonld` - Upgrade `@grafctory/blue` to `^0.16.0`, which reads an empty language map
  as an absent value, so a description stating a required localised property as `{}` or `{ en: [] }` no longer passes
  `validate()`; projects using Blue alongside this package raise their own dependency to the same range
- READMEs introduce the packages as part of the Grafctory framework, and bug reports by email go to `info@grafctory.dev`

### Fixed

- `@grafctory/mime-xml` — `untag()` resolves link and image targets against the source page, so that a rendering
  stored or displayed away from that page still leads back to it

## [0.5.1](https://github.com/grafctory/mime/compare/v0.5.0...v0.5.1) - 2026-11-24

### Changed

- Maintenance release with no change to the published API or behaviour

## [0.5.0](https://github.com/grafctory/mime/compare/v0.4.0...v0.5.0) - 2026-11-19

### Changed

- **Breaking**: `@metreeca/mime-jsonld` — Upgrade `@metreeca/blue` to `^0.15.0`; projects using it alongside this
  package raise their own dependency to the same range, so that the library is shared as one copy across the project

## [0.4.0](https://github.com/grafctory/mime/compare/v0.3.0...v0.4.0) - 2026-11-19

### Changed

- **Breaking**: `@metreeca/mime-xml` — `focus()` leaves out the articles nested inside an article of the content,
  such as teasers for related items or comment threads, so that the extracted document stays the same while they rotate;
  articles held by a wrapper stating nothing but headings are kept as the items of a listing

## [0.3.0](https://github.com/grafctory/mime/compare/v0.2.0...v0.3.0) - 2026-11-17

### Added

- `@metreeca/mime-json` — `digest()` helper, computing digests of JSON values for duplicate and change detection
- `@metreeca/mime-xml` — `unwrap()` task, extracting the JSON-LD values X/HTML trees embed in their scripts
- `@metreeca/mime-xml` — `denoise()` task, filtering out the markup X/HTML pages change on every request while their
  content stays the same, such as Cloudflare e-mail obfuscation, so that unchanged pages compare equal across fetches

### Changed

- **Breaking**: Upgrade `@metreeca/blue` to `^0.14.0`, `@metreeca/core` to `^0.14.0`, `@metreeca/flow` to `^0.13.0`,
  `@metreeca/http` to `^0.6.0` and `@metreeca/tape` to `^0.13.0`; projects using them alongside this package raise
  their own dependencies to the same ranges, so that each library is shared as a single copy across the project

### Security

- Upgrade `vite` to `8.3.5` (GHSA-587h-7wmj-h5pm, GHSA-698v-4r3x-3vcv, GHSA-r825-w8mm-5pxw, GHSA-vfpm-58rq-9qcg,
  GHSA-rq7h-c2jc-7f22, GHSA-9jrq-w75r-8gcw): development dependency, no consumer impact
- Upgrade `markdown-it` to `14.3.3` (GHSA-gfr2-rv44-r23c, GHSA-r7fv-28h4-cvq7, GHSA-vfgh-jcmw-g37q): development
  dependency pulled in by the documentation generator, with no impact on consumers of the packages
- Upgrade `vitest` to `4.1.12` (GHSA-qxg6-89mg-rqv8, GHSA-xp26-3454-mjgp): development dependency, no consumer impact

## [0.2.0](https://github.com/grafctory/mime/compare/v0.1.1...v0.2.0) - 2026-10-19

### Added

- `@metreeca/mime-jsonld` — JSON-LD processing tasks, shaped by `@metreeca/blue` blueprints

### Changed

- Upgrade `@metreeca/blue` to `^0.13.0`
- Upgrade `@metreeca/core` to `^0.13.0`
- Upgrade `@metreeca/flow` to `^0.12.0`
- Upgrade `@metreeca/http` to `^0.5.0`
- Upgrade `@metreeca/tape` to `^0.12.0`

### Removed

- `@metreeca/mime` package, which exported no API: install the task packages directly, alongside `@metreeca/gear`

## [0.1.1](https://github.com/grafctory/mime/compare/v0.1.0...v0.1.1) - 2026-10-14

### Fixed

- Ship the hand-written `xpathway` declarations with the `@metreeca/mime-xml` sources, so projects type-checking the
  package from a linked checkout no longer report the parameters of its XPath callbacks as implicitly typed `any`

### Changed

- Upgrade `@metreeca/core` to `^0.12.1`
- Upgrade `@metreeca/flow` to `^0.11.1`
- Upgrade `@metreeca/http` to `^0.4.1`
- Upgrade `@metreeca/tape` to `^0.11.1`

## [0.1.0](https://github.com/grafctory/mime/releases/tag/v0.1.0) - 2026-10-01

Initial release of ready-made tasks for parsing content by media type, running under the
[@metreeca/gear](https://github.com/grafctory/gear) job executor, which is installed separately. Task packages are
self-contained leaves, each pulling in only the libraries its own media type needs. The parsing tasks are migrated from
the `@metreeca/gear-*` packages.

- `@metreeca/mime` — content access contracts and shared services
- `@metreeca/mime-csv` — CSV processing tasks, migrated from `@metreeca/gear-csv`; `skip` now also ignores rows made of
  delimiters alone, and `trim` now also strips quoted values, turning fields left blank into `undefined`
- `@metreeca/mime-json` — JSON processing tasks, migrated from `@metreeca/gear-json`
- `@metreeca/mime-xml` — XML and HTML processing tasks, migrated from `@metreeca/gear-xml`; `untag()` now leaves out
  page framing (navigation, headers, footers, sidebars, controls and embedded objects), and a title made only of framing
  text no longer produces an empty frontmatter `title` or `head`
