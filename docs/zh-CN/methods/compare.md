# 方法

该方法用于比较不同编码的两份数据在内容上的差异。

[点击查看](../types/Encodings.md)支持的编码列表。

## 声明

```ts
/**
 * 比较不同编码的两份数据是否内容上一致。
 *
 * @param {string|Buffer}   a       被比较的第一份数据
 * @param {string|Buffer}   b       被比较的第二份数据
 * @param {string}          aEnc    第一份数据的编码
 * @param {string}          bEnc    第二份数据的编码
 */
function compare(
    a: string | Buffer,
    b: string | Buffer,
    aEnc: Encodings,
    bEnc: Encodings,
): number;
```
