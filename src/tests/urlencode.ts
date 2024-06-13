import * as Test from 'node:test';
import * as Asserts from 'node:assert';
import * as Enc from '../lib';

Test.test('Encoding Urlencode', async (t) => {

    await t.test('API stringToUrlencode', () => {

        Asserts.equal('', Enc.stringToUrlencode(''));
        Asserts.equal('hello', Enc.stringToUrlencode('hello'));
        Asserts.equal('Hello', Enc.stringToUrlencode('Hello'));
        Asserts.equal(Enc.stringToUrlencode('我'), '%e6%88%91');
        Asserts.equal(Enc.stringToUrlencode('我爱你'), '%e6%88%91%e7%88%b1%e4%bd%a0');
        Asserts.equal(Enc.stringToUrlencode('I love you'), 'I%20love%20you');
    });

    await t.test('API stringFromUrlencode', () => {

        Asserts.equal('', Enc.stringFromUrlencode(''));
        Asserts.equal('hello', Enc.stringFromUrlencode('hello'));
        Asserts.equal('Hello', Enc.stringFromUrlencode('Hello'));
        Asserts.equal(Enc.stringFromUrlencode('%e6%88%91'), '我');
        Asserts.equal(Enc.stringFromUrlencode('%e6%88%91%e7%88%b1%e4%bd%a0'), '我爱你');
        Asserts.equal(Enc.stringFromUrlencode('I%20love%20you'), 'I love you');
    });

    await t.test('API bufferToUrlencode', () => {

        Asserts.equal('', Enc.bufferToUrlencode(Buffer.from('')));
        Asserts.equal('hello', Enc.bufferToUrlencode(Buffer.from('hello')));
        Asserts.equal('Hello', Enc.bufferToUrlencode(Buffer.from('Hello')));
        Asserts.equal(Enc.bufferToUrlencode(Buffer.from('我')), '%e6%88%91');
        Asserts.equal(Enc.bufferToUrlencode(Buffer.from('我爱你')), '%e6%88%91%e7%88%b1%e4%bd%a0');
        Asserts.equal(Enc.bufferToUrlencode(Buffer.from('I love you')), 'I%20love%20you');
    });

    await t.test('API bufferFromUrlencode', () => {

        Asserts.equal('', Enc.bufferFromUrlencode('').toString());
        Asserts.equal('hello', Enc.bufferFromUrlencode('hello').toString());
        Asserts.equal('Hello', Enc.bufferFromUrlencode('Hello').toString());
        Asserts.equal(Enc.bufferFromUrlencode('%e6%88%91').toString(), '我');
        Asserts.equal(Enc.bufferFromUrlencode('%e6%88%91%e7%88%b1%e4%bd%a0').toString(), '我爱你');
        Asserts.equal(Enc.bufferFromUrlencode('I%20love%20you').toString(), 'I love you');
    });
});
