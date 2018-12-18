# 类型 Encodings

该值类型用于约束所有可用的编码名称，

支持的编码如下：

编码名称      | 说明                            | 二进制安全
-------------|---------------------------------|:-----------:
`base64`     | 标准 BASE64 字符串编码格式        | 是
`base64url`  | URL 安全的 BASE64 字符串编码格式  | 是
`base62x`    | BASE62x 字符串编码格式           | 是
`buffer`     | Node.js Buffer 格式              | 是
`hex`        | 十六进制字符串编码格式             | 是
`utf8`       | UTF-8 编码字符串格式              | 否
`urlencode`  | URL 安全的字符串编码格式          | 是
`uri`        | encodeURIComponent 编码          | 否
`strict_uri` | 扩展版 encodeURIComponent 编码   | 否

> ### Encoding `urlencode`
>
> `urlencode` 是纯粹的 URL 编解码方式，除了字母和数字，其他全部都被转义为 `%xx`。
> 此外，它还是二进制安全的，因此它可以与 `hex`、`base64`、`base62x` 等编码安全互转。
>
> ### Encoding `uri`
>
> `uri` 只是基于 `encodeURIComponent` 方法的编码方式，只适用于 URI 文字编码，请勿
> 用于二进制编码。
>
> ### Encoding `strict_uri`
>
> `strict_uri` 是 `uri` 的编码方式，它在 `uri` 的基础上，对以下字符也进行了转义：
>  `"-"`, `"."`, `"_"`, `"!"`, `"*"`, `"("`, `")"`, `"~"`, `"'"`。但它仍然不是
> 二进制安全的，请勿用于非文本编码。


## 声明

```ts
type Encodings = BinaryEncodings | StringEncodings;
```
