# 方法 convert

该方法用于将数据从指定的编码格式转换成另一个编码格式。

[点击查看](../types/Encodings.md)支持的编码列表。

## 声明

```ts
function convert<I extends Encodings, O extends Encodings>(
    data: I extends BinaryEncodings ? Buffer : string,
    output: O,
    input: I
): O extends BinaryEncodings ? Buffer : string
```
