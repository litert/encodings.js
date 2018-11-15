# 方法 base64UrlEncode

该方法用于将一份字符串由标准的 BASE64 字符串编码格式转换为 URL 安全的 BASE64 字符串
编码格式。

> URL 安全的 BASE64 编码，即是将 BASE64 编码结果里的尾部 `"="` 符号去掉，将 `"+"`
> 替换为 `"-"`，将 `"/"` 替换为 `"_"`。

## 声明

```ts
function base64UrlEncode(text: string): string;
```
