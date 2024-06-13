import * as Test from 'node:test';
import * as Asserts from 'node:assert';
import * as Enc from '../lib';

const stringTestCases: Array<[string, string]> = [
    ['1', 'GE======'],
    ['12', 'GEZA===='],
    ['123', 'GEZDG==='],
    ['1234', 'GEZDGNA='],
    ['12345', 'GEZDGNBV'],
    ['123456', 'GEZDGNBVGY======'],
    ['1234567', 'GEZDGNBVGY3Q===='],
    ['12345678', 'GEZDGNBVGY3TQ==='],
    ['123456789', 'GEZDGNBVGY3TQOI='],
    ['1234567890', 'GEZDGNBVGY3TQOJQ'],
    ['你', '4S62A==='],
    ['你好', '4S62BZNFXU======'],
    ['我爱你', '42EJDZ4IWHSL3IA='],
];

Test.test('Encoding Base32', async (t) => {

    await t.test('API stringToBase32', () => {

        Asserts.equal(Enc.stringToBase32(''), '');

        for (const [origin, encoded] of stringTestCases) {

            Asserts.equal(Enc.stringToBase32(origin), encoded);
        }
    });

    await t.test('API stringFromBase32', () => {

        Asserts.equal(Enc.stringFromBase32(''), '');

        for (const [origin, encoded] of stringTestCases) {

            Asserts.equal(Enc.stringFromBase32(encoded), origin);
        }
    });

    await t.test('API bufferToBase32', () => {

        Asserts.equal(Enc.bufferToBase32(Buffer.alloc(0)), '');

        for (const [origin, encoded] of stringTestCases) {

            Asserts.equal(Enc.bufferToBase32(Buffer.from(origin)), encoded);
        }
    });

    await t.test('API bufferFromBase32', () => {

        Asserts.equal(Enc.bufferFromBase32('').toString(), '');

        for (const [origin, encoded] of stringTestCases) {

            Asserts.equal(Enc.bufferFromBase32(encoded).toString(), origin);
        }

        Asserts.throws(() => Enc.bufferFromBase32('1'));
        Asserts.throws(() => Enc.bufferFromBase32('12'));
        Asserts.throws(() => Enc.bufferFromBase32('123'));
        Asserts.throws(() => Enc.bufferFromBase32('1234'));
        Asserts.throws(() => Enc.bufferFromBase32('12345'));
        Asserts.throws(() => Enc.bufferFromBase32('123456'));
        Asserts.throws(() => Enc.bufferFromBase32('1234567'));
    });
});
