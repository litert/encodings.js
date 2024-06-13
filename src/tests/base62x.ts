import * as Test from 'node:test';
import * as Asserts from 'node:assert';
import * as Enc from '../lib';

const bufferTestCases: Array<[Buffer, string]> = [

    [Buffer.from('A'), 'G1'],
    [Buffer.from('QA', 'base64url'), 'G0'],
    [Buffer.from('ops', 'base64url'), 'efB'],
    [Buffer.from('T4Ee', 'base64url'), 'Ju4U'],
    [Buffer.from('HFqnlA', 'base64url'), '75gdb0'],
    [Buffer.from('bOIPqAY', 'base64url'), 'RE8Fg06'],
    [Buffer.from('i6tbzTn3', 'base64url'), 'YwjRpJdt'],
    [Buffer.from('Is4k4SmfSw', 'base64url'), '8iuauIcVI3'],
    [Buffer.from('32deXpyn_18', 'base64url'), 'tsTUNfodx3rF'],
    [Buffer.from('9-kyb-6cSoM7', 'base64url'), 'x1x2aoRx2wSIeCy'],
    [Buffer.from('56LX-R7PjOfFcA', 'base64url'), 'vwBNx2HyFZEV5S0'],
];

const stringTestCases: Array<[string, string]> = [
    ['A', 'G1'],
    ['AB', 'GK2'],
    ['ABC', 'GK93'],
    ['ABCD', 'GK93H0'],
    ['ABCDE', 'GK93H45'],
    ['ABCDEF', 'GK93H4L6'],
    ['ABCDEFG', 'GK93H4L6H3'],
    ['ABCDEFGH', 'GK93H4L6Hq8'],
    ['ABCDEFGHI', 'GK93H4L6HqX9'],
    ['你', 'vBsW'],
    ['你好', 'vBsWvQMx1'],
    ['我爱你', 'veYHvuYnvBsW'],
];

Test.test('Encoding Base62x', async (t) => {

    await t.test('API stringToBase62x', () => {

        Asserts.equal(Enc.stringToBase62x(''), '');

        for (const [origin, encoded] of stringTestCases) {

            Asserts.equal(Enc.stringToBase62x(origin), encoded);
        }
    });

    await t.test('API stringFromBase62x', () => {

        Asserts.equal(Enc.stringFromBase62x(''), '');

        for (const [origin, encoded] of stringTestCases) {

            Asserts.equal(Enc.stringFromBase62x(encoded), origin);
        }
    });

    await t.test('API bufferToBase62x', () => {

        Asserts.equal(Enc.bufferToBase62x(Buffer.alloc(0)), '');

        for (const [origin, encoded] of bufferTestCases) {

            Asserts.equal(Enc.bufferToBase62x(origin), encoded);
        }
    });

    await t.test('API bufferFromBase62x', () => {

        Asserts.equal(Enc.bufferFromBase62x('').toString(), '');

        for (const [origin, encoded] of bufferTestCases) {

            Asserts.equal(Enc.bufferFromBase62x(encoded).toString(), origin.toString());
        }
    });

    await t.test('API initBase62x', () => {

        Enc.initBase62x('0');

        Asserts.throws(() => Enc.initBase62x('-'));

        Asserts.ok(true);
    });

});
