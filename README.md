# LiteRT/Encodings

[![npm version](https://img.shields.io/npm/v/@litert/encodings.svg?colorB=brightgreen)](https://www.npmjs.com/package/@litert/encodings "Stable Version")
[![License](https://img.shields.io/npm/l/@litert/encodings.svg?maxAge=2592000?style=plastic)](https://github.com/litert/encodings/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/litert/encodings.js.svg)](https://github.com/litert/encodings.js/issues)
[![GitHub Releases](https://img.shields.io/github/release/litert/encodings.js.svg)](https://github.com/litert/encodings.js/releases "Stable Release")

The buffer-based encoding utility method for node.js.
Following types of encodings are supported:

Name         | Description                                | Output
-------------|--------------------------------------------|---------
`base64`     | The standard BASE64 encoding string.       | string
`base64url`  | The URL-safe BASE64 encoding string.    | string
`buffer`     | Node.js Buffer.                            | Buffer
`hex`        | The hexadecimal encoding string.           | string
`utf8`       | The UTF-8 encoding string.                 | string
`uri`        | The URL-safe encoding string.           | string
`strict_uri` | The extended URL-safe encoding string.  | string

> - Encoding `strict_uri` is based on `uri`, but all special chars including
> `"-"`, `"."`, `"_"`, `"!"`, `"*"`, `"("`, `")"`, `"~"`, `"'"`
> will be escaped.
>
>   > NOTE: The data of `strict_uri` encoding, could be simply decoded by function
>   > `decodeURIComponent`.
>
> - Encoding `base64url` is based on `base64`, while charactor 
> `"="`, `"+"`, `"/"`
> will be replaced with URL-safe charactors.
>


## Installation

```sh
npm install @litert/encodings --save
```

## Sample

```ts
import * as Enc from "@litert/encodings";

Enc.convert("hello world", "buffer"); // From string to buffer.
Enc.convert("hello world", "base64"); // From string to base64 string.
Enc.convert("hello world", "base64url"); // From string to base64-url-escaped.
Enc.convert(Buffer.from("hello world"), "uri"); // From buffer to base64-url-escaped.
```

For more details, see documents or samples.

## Documents

- [简体中文版](./docs/zh-CN/README.md)

## License

This library is published under [Apache-2.0](./LICENSE) license.
