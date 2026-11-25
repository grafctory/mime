# @grafctory/mime

Ready-made tasks for parsing and serialising content by media type.

**@grafctory/mime** is the content format module of the [Grafctory][grafctory] model-driven knowledge graph framework.
It provides ready-made [@grafctory/flow] tasks for converting content between the usual interchange formats and the
values a pipeline works on: parsing documents into records and serialising results back into documents. The tasks run
under the [@grafctory/gear] job executor, which supplies the shared services they draw on and releases them once the run
ends.

- **Ready-Made Tasks**: parsing and serialisation, chaining alongside any other task
- **Minimal Footprint**: one package per media type, each pulling in only the libraries that type needs

> [!IMPORTANT]
>
> Pipelines are server-side workloads targeting [Node.js](https://nodejs.org/) 22 or later, relying on facilities such
> as the filesystem, the process environment and `fetch`. The packages are not intended for the browser.

[@grafctory/flow]: https://github.com/grafctory/flow
[@grafctory/gear]: https://github.com/grafctory/gear
[grafctory]: https://github.com/grafctory

# Installation

```shell
npm install @grafctory/gear          # job executor and shared services
npm install @grafctory/mime-<type>   # task package, one per media type
```

> [!WARNING]
>
> TypeScript consumers must use `"moduleResolution": "nodenext"/"node16"/"bundler"` in `tsconfig.json`.
> The legacy `"node"` resolver is not supported.

Install a task package for each media type the pipeline handles. Task packages are self-contained leaves, each pulling
in only the libraries its own media type needs. No package pulls in the
[@grafctory/gear] job executor on its own: install it directly to set up and run a job.

| Package                 | Description                   |
|-------------------------|-------------------------------|
| [@grafctory/mime-csv]    | CSV processing tasks          |
| [@grafctory/mime-json]   | JSON processing tasks         |
| [@grafctory/mime-jsonld] | JSON-LD processing tasks      |
| [@grafctory/mime-xml]    | XML and HTML processing tasks |

[@grafctory/mime-csv]: https://grafctory.github.io/mime/modules/_grafctory_mime-csv.html

[@grafctory/mime-json]: https://grafctory.github.io/mime/modules/_grafctory_mime-json.html

[@grafctory/mime-jsonld]: https://grafctory.github.io/mime/modules/_grafctory_mime-jsonld.html

[@grafctory/mime-xml]: https://grafctory.github.io/mime/modules/_grafctory_mime-xml.html

# Usage

> [!NOTE]
>
> Each package documents its own API in its README and API reference; for complete coverage, see the
> [API reference](https://grafctory.github.io/mime/).

# Support

- open an [issue](https://github.com/grafctory/mime/issues) to report a problem or to suggest a new feature
- start a [discussion](https://github.com/grafctory/mime/discussions) to ask a how-to question or to share an idea

# License

This project is licensed under the Apache 2.0 License –
see [LICENSE](https://github.com/grafctory/mime?tab=Apache-2.0-1-ov-file) file for details.

<sub>Grafctory™ is a trademark of Metreeca srl.</sub>
