import * as Test from 'node:test';
import * as Asserts from 'node:assert';
import * as Enc from '../lib';

Test.test('Encoding hex', async (t) => {

    await t.test('API stringToHex', () => {

        Asserts.equal('', Enc.stringToHex(''));
        Asserts.equal('68656c6c6f', Enc.stringToHex('hello'));
        Asserts.equal('48656c6c6f', Enc.stringToHex('Hello'));
    });

    await t.test('API stringFromHex', () => {

        Asserts.equal('', Enc.stringFromHex(''));
        Asserts.equal('hello', Enc.stringFromHex('68656c6c6f'));
        Asserts.equal('Hello', Enc.stringFromHex('48656c6c6f'));
    });

    await t.test('API bufferToHex', () => {

        Asserts.equal('', Enc.bufferToHex(Buffer.from('')));
        Asserts.equal('68656c6c6f', Enc.bufferToHex(Buffer.from('hello')));
        Asserts.equal('48656c6c6f', Enc.bufferToHex(Buffer.from('Hello')));
    });

    await t.test('API bufferFromHex', () => {

        Asserts.equal('', Enc.bufferFromHex('').toString());
        Asserts.equal('hello', Enc.bufferFromHex('68656c6c6f').toString());
        Asserts.equal('Hello', Enc.bufferFromHex('48656c6c6f').toString());
    });
});
