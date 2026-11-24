# @grafctory/mime-json

[![npm](https://img.shields.io/npm/v/@grafctory/mime-json)](https://www.npmjs.com/package/@grafctory/mime-json)

JSON processing tasks for [@grafctory/mime](https://github.com/grafctory/mime).

# Installation

```shell
npm install @grafctory/gear       # the job executor
npm install @grafctory/mime-json  # this package
```

> [!IMPORTANT]
>
> Node.js 22 or later is required.

> [!WARNING]
>
> TypeScript consumers must use `"moduleResolution": "nodenext"/"node16"/"bundler"` in `tsconfig.json`.
> The legacy `"node"` resolver is not supported.

# Usage

| Task                     | Description          |
|--------------------------|----------------------|
| [`json()`][json]         | JSON parser          |
| [`jpath()`][jpath]       | JSON path selector   |
| [`validate()`][validate] | JSON value validator |

[json]: https://grafctory.github.io/mime/functions/_grafctory_mime-json.json.html

[jpath]: https://grafctory.github.io/mime/functions/_grafctory_mime-json.jpath.html

[validate]: https://grafctory.github.io/mime/functions/_grafctory_mime-json.validate.html

# Support

- open an [issue](https://github.com/grafctory/mime/issues) to report a problem or to suggest a new feature
- start a [discussion](https://github.com/grafctory/mime/discussions) to ask a how-to question or to share an idea

# License

This project is licensed under the Apache 2.0 License –
see [LICENSE](https://github.com/grafctory/mime?tab=Apache-2.0-1-ov-file) file for details.
