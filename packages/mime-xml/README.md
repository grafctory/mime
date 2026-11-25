# @grafctory/mime-xml

[![npm][npm-badge]][npm] [![Grafctory][grafctory-badge]][grafctory]

[npm-badge]: https://img.shields.io/npm/v/@grafctory/mime-xml
[npm]: https://www.npmjs.com/package/@grafctory/mime-xml
[grafctory-badge]: https://img.shields.io/badge/part%20of-Grafctory-blue
[grafctory]: https://github.com/grafctory

XML and HTML processing tasks for [@grafctory/mime].

[@grafctory/mime]: https://github.com/grafctory/mime

# Installation

```shell
npm install @grafctory/gear      # the job executor
npm install @grafctory/mime-xml  # this package
```

> [!IMPORTANT]
>
> Node.js 22 or later is required.

> [!WARNING]
>
> TypeScript consumers must use `"moduleResolution": "nodenext"/"node16"/"bundler"` in `tsconfig.json`.
> The legacy `"node"` resolver is not supported.

# Usage

| Task                   | Description               |
|------------------------|---------------------------|
| [`xml()`][xml]         | XML parser                |
| [`html()`][html]       | HTML parser               |
| [`denoise()`][denoise] | Request noise filter      |
| [`focus()`][focus]     | Content extractor         |
| [`xpath()`][xpath]     | XPath selector            |
| [`unwrap()`][unwrap]   | Structured data extractor |
| [`untag()`][untag]     | Markdown renderer         |

[xml]: https://grafctory.github.io/mime/functions/_grafctory_mime-xml.xml.html

[html]: https://grafctory.github.io/mime/functions/_grafctory_mime-xml.html.html

[denoise]: https://grafctory.github.io/mime/functions/_grafctory_mime-xml.denoise.html

[focus]: https://grafctory.github.io/mime/functions/_grafctory_mime-xml.focus.html

[xpath]: https://grafctory.github.io/mime/functions/_grafctory_mime-xml.xpath.html

[unwrap]: https://grafctory.github.io/mime/functions/_grafctory_mime-xml.unwrap.html

[untag]: https://grafctory.github.io/mime/functions/_grafctory_mime-xml.untag.html

# Support

- open an [issue](https://github.com/grafctory/mime/issues) to report a problem or to suggest a new feature
- start a [discussion](https://github.com/grafctory/mime/discussions) to ask a how-to question or to share an idea

# License

This project is licensed under the Apache 2.0 License –
see [LICENSE](https://github.com/grafctory/mime?tab=Apache-2.0-1-ov-file) file for details.

<sub>Grafctory™ is a trademark of Metreeca srl.</sub>
