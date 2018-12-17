# 类型 IBase62xEncoder

该类型描述 BASE62x 编码器的方法列表。

## 声明

```ts
interface IBase62xEncoder {

    /**
     * BASE62x 编码中 x 标志的符号，可以通过此字段自定义。
     */
    xtag: string;

    /**
     * 将指定字符串或者 Buffer 编码为 BASE62x 编码的字符串。
     *
     * @param {Buffer|string} data  待编码的数据。
     *
     * @returns BASE62x 编码的字符串。
     */
    encode(data: Buffer | string): string;

    /**
     * 将一个 BASE62x 编码的字符串解码为 Buffer 对象。
     *
     * @param {string} data  待解码的数据。
     *
     * @returns 包含解码后的数据的 Buffer 对象。
     */
    decode(base62x: string): Buffer;
}
```
