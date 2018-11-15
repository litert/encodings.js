# 方法 convert

该方法用于将数据从指定的编码格式转换成另一个编码格式。

[点击查看](../types/Encodings.md)支持的编码列表。

## 声明

```ts
interface IConvertMethod {

    /**
     * @param {Buffer} data     要被转换的数据
     * @param {string} output   目标编码名称
     * @param {string} input    当前编码名称
     */
    (data: Buffer, output: BinaryEncodings, input?: BinaryEncodings): Buffer;

    /**
     * @param {Buffer} data     要被转换的数据
     * @param {string} output   目标编码名称
     * @param {string} input    当前编码名称
     */
    (data: Buffer, output: StringEncodings, input?: BinaryEncodings): string;

    /**
     * @param {string} data     要被转换的数据
     * @param {string} output   目标编码名称
     * @param {string} input    当前编码名称
     */
    (data: string, output: BinaryEncodings, input: StringEncodings): Buffer;

    /**
     * @param {string} data     要被转换的数据
     * @param {string} output   目标编码名称
     * @param {string} input    当前编码名称
     */
    (data: string, output: StringEncodings, input: StringEncodings): string;
}

declare const convert: IConvertMethod;
```
