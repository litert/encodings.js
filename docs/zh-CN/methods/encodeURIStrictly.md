# 方法 encodeURIStrictly

该方法用于将一份字符串使用加强版 URL 编码。

> 该方法基于 `encodeURIComponent` 方法，在此之上，对
> `"-"`, `"."`, `"_"`, `"!"`, `"*"`, `"("`, `")"`, `"~"`, `"'"`
> 等符号也进行 URL 转义。
>
> 转义结果可以用 `decodeURIComponent` 方法进行解码。

## 声明

```ts
function encodeURIStrictly(text: string): string;
```
