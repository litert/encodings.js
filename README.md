# LiteRT/Encodings

[![npm version](https://img.shields.io/npm/v/@litert/encodings.svg?colorB=brightgreen)](https://www.npmjs.com/package/@litert/encodings "Stable Version")
[![License](https://img.shields.io/npm/l/@litert/encodings.svg?maxAge=2592000?style=plastic)](https://github.com/litert/encodings/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/litert/encodings.js.svg)](https://github.com/litert/encodings.js/issues)
[![GitHub Releases](https://img.shields.io/github/release/litert/encodings.js.svg)](https://github.com/litert/encodings.js/releases "Stable Release")

The buffer-based encoding utility method for node.js.
Following types of encodings are supported:

Name         | Description                     | Binary-Safe
-------------|---------------------------------|:-----------:
`base64`     | The standard BASE64 encoding.   | Yes
`base64url`  | The URL-safe BASE64 encoding.   | Yes
`base62x`    | The BASE62x encoding.           | Yes
`hex`        | The hexadecimal encoding.       | Yes
`urlencode`  | The purely URL-safe encoding.   | Yes
`strict_uri` | The extended URL-safe encoding. | No

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

## Usage

```ts
import * as Enc from "@litert/encodings";

const hex = Enc.stringToHex("hello world");             // Encode a string into hex
const b62 = Enc.stringToBase62("hello world");          // Encode a string into BASE62
const b64 = Enc.stringToBase64("hello world");          // Encode a string into BASE64
const b64url = Enc.stringToBase64Url("hello world");    // Encode a string into BASE64URL
const url = Enc.stringToUrlencode("hello world");       // Encode a string into URL
const strict = Enc.stringToStrictUri("hello world");    // Encode a string into Strict-URI

// Also, buffer is accepted as input.

Enc.bufferToHex(Buffer.from("hello world"));
Enc.bufferToBase62(Buffer.from("hello world"));
Enc.bufferToBase64(Buffer.from("hello world"));
Enc.bufferToBase64Url(Buffer.from("hello world"));
Enc.bufferToUrlencode(Buffer.from("hello world"));
Enc.bufferToStrictUri(Buffer.from("hello world"));

Enc.stringFromHex(hex);                         // Decode a hex-encoded data as a string
Enc.stringFromBase62(b62);                      // Decode a BASE62-encoded data as a string
Enc.stringFromBase64(b64);                      // Decode a BASE64-encoded data as a string
Enc.stringFromBase64Url(b64url);                // Decode a BASE64URL-encoded data as a string
Enc.stringFromUrlencode(url);                   // Decode a urlencoded data as a string
Enc.stringFromStrictUri(strict);                // Decode a Strict-URI-encoded data as a string

Enc.bufferFromHex(hex);
Enc.bufferFromBase62(b62);
Enc.bufferFromBase64(b64);
Enc.bufferFromBase64Url(b64url);
Enc.bufferFromUrlencode(url);
Enc.bufferFromStrictUri(strict);
```

## License

This library is published under [Apache-2.0](./LICENSE) license.
