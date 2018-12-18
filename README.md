# LiteRT/Encodings

[![npm version](https://img.shields.io/npm/v/@litert/encodings.svg?colorB=brightgreen)](https://www.npmjs.com/package/@litert/encodings "Stable Version")
[![License](https://img.shields.io/npm/l/@litert/encodings.svg?maxAge=2592000?style=plastic)](https://github.com/litert/encodings/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/litert/encodings.js.svg)](https://github.com/litert/encodings.js/issues)
[![GitHub Releases](https://img.shields.io/github/release/litert/encodings.js.svg)](https://github.com/litert/encodings.js/releases "Stable Release")

The buffer-based encoding utility method for node.js.
Following types of encodings are supported:

Name         | Description                     | Output | Binary-Safe
-------------|---------------------------------|:------:|:-----------:
`base64`     | The standard BASE64 encoding.   | string | Yes
`base64url`  | The URL-safe BASE64 encoding.   | string | Yes
`base62x`    | The BASE62x encoding.           | string | Yes
`buffer`     | Node.js Buffer.                 | Buffer | Yes
`hex`        | The hexadecimal encoding.       | string | Yes
`utf8`       | The UTF-8 encoding.             | string | No
`urlencode`  | The purely URL-safe encoding.   | string | Yes
`uri`        | The URL-safe encoding.          | string | No
`strict_uri` | The extended URL-safe encoding. | string | No

> ### Encoding `urlencode`
>
> This is a real urlencode implement, it will escape all bytes as `%xx` format, 
> excepting `A-Z`, `a-z` and `0-9`. **This is a binary-safe encoding.**
>
> > **Binary-safe** means it could work with binary data perfectly, without
> > gibberish. And it's all the same below.
>
> ### Encoding `uri`
>
> This is a simple reference of method `encodeURIComponent`, so it works as
> method `encodeURIComponent` does. **And it's not a binary-safe encoding.**
>
> ### Encoding `strict_uri`
>
> This is based on `uri`, but all special chars including
> `"-"`, `"."`, `"_"`, `"!"`, `"*"`, `"("`, `")"`, `"~"`, `"'"`
> will be escaped. **However, it's still not a binary-safe encoding.**
>
> > NOTE: The data of `strict_uri` encoding, could be simply decoded by
> > function `decodeURIComponent`.
>
> ### Encoding `base64url`
>
> This is based on `base64`, while charactors `"="`, `"+"`, `"/"` will be
> replaced with URL-safe charactors. **This is a binary-safe encoding.**
>
> ### Encoding `base62x`
>
> This is a variation of `base64`. **And it is a binary-safe encoding.**
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
