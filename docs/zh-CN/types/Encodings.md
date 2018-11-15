# 类型 Encodings

该值类型用于约束所有可用的编码名称，

支持的编码如下：

编码名称      | 说明
-------------|---------------------------------
`base64`     | 标准 BASE64 字符串编码格式
`base64url`  | URL 安全的 BASE64 字符串编码格式
`buffer`     | Node.js Buffer 格式
`hex`        | 十六进制字符串编码格式
`utf8`       | UTF-8 编码字符串格式
`uri`        | URL 安全的字符串编码格式
`strict_uri` | 加强版 URL 安全的字符串编码格式

## 声明

```ts
type Encodings = BinaryEncodings | StringEncodings;
```
