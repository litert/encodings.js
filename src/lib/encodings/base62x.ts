/**
 * Copyright 2024 Angus.Fenying <fenying@litert.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const ALPHA_CHAR_TABLE = [
    ...'0123456789',
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ...'abcdefghijklmnopqrstuvwxyz'
];

export const DEFAULT_X_TAG: string = 'x';

let xTag: string = DEFAULT_X_TAG;

let b2aTable: string[] = [];

let a2bTable: Record<string, number> = {};

/**
 * Initialize the base62x encoding with a custom x-tag.
 */
export function initBase62x(tag: string): void {

    if (!ALPHA_CHAR_TABLE.includes(tag)) {

        throw new RangeError('Range of x-tag must be 0-9, a-z or A-Z.');
    }

    xTag = tag;

    const xPos = ALPHA_CHAR_TABLE.indexOf(xTag);

    b2aTable = [
        ...ALPHA_CHAR_TABLE.slice(0, xPos),
        ...ALPHA_CHAR_TABLE.slice(xPos + 1),
        ...[1, 2, 3].map((x) => `${xTag}${x}`)
    ];

    a2bTable = {};

    for (let i = 0; i < b2aTable.length; i++) {

        a2bTable[b2aTable[i]] = i;
    }
}

/**
 * Encode a buffer to a base62x encoding string.
 */
export function bufferToBase62x(data: Buffer): string {

    const ret: string[] = [];

    for (let i = 0; i < data.length; i += 3) {

        switch (data.length - i) {
            case 1:
                ret.push(
                    b2aTable[data[i] >> 2],
                    b2aTable[data[i] & 0x03]
                );
                break;
            case 2:
                ret.push(
                    b2aTable[data[i] >> 2],
                    b2aTable[((data[i] & 0x03) << 4) | (data[i + 1] >> 4)],
                    b2aTable[data[i + 1] & 0x0F]
                );
                break;
            default: // >= 3
                ret.push(
                    b2aTable[data[i] >> 2],
                    b2aTable[((data[i] & 0x03) << 4) | (data[i + 1] >> 4)],
                    b2aTable[((data[i + 1] & 0x0F) << 2) | (data[i + 2] >> 6)],
                    b2aTable[data[i + 2] & 0x3F]
                );
                break;
        }
    }

    return ret.join('');
}

/**
 * Decode a base62x encoding string into a buffer.
 */
export function bufferFromBase62x(input: string): Buffer {

    const bytes: number[] = [];

    for (let i = 0; i < input.length; i += 4) {

        const bs: number[] = [];

        for (let j = i; bs.length < 4 && j < input.length; j++) {

            let a = input[j];

            if (a === undefined) {

                break;
            }

            if (a === xTag) {

                a += input[++j];
                i++;
            }

            const b: number = a2bTable[a];

            if (b === undefined) {

                throw new RangeError('Unrecognizable base62 input.');
            }

            bs.push(b);
        }

        switch (bs.length) {
            case 1:

                throw new RangeError('Unrecognizable base62 input.');

            case 2:

                /**
                 * 1111_11_11
                 * 1111_11 11
                 */

                bytes.push(bs[0] << 2 | bs[1]);

                break;

            case 3:

                /**
                 * 1111_11_11 1111_1111
                 * 1111_11 11_1111 1111
                 */

                bytes.push(
                    bs[0] << 2 | (bs[1] >> 4),
                    ((bs[1] & 0x0F) << 4) | bs[2]
                );

                break;

            case 4:

                /**
                 * 1111_11_11 1111_1111 11_11_1111
                 * 1111_11 11_1111 1111_11 11_1111
                 */

                bytes.push(
                    bs[0] << 2 | (bs[1] >> 4),
                    ((bs[1] & 0x0F) << 4) | (bs[2] >> 2),
                    ((bs[2] & 0x03) << 6) | bs[3]
                );

                break;
        }
    }

    return Buffer.from(bytes);
}

initBase62x(DEFAULT_X_TAG);

/**
 * Encode a string to a base62x encoding string.
 */
export function stringToBase62x(data: string): string {

    return bufferToBase62x(Buffer.from(data));
}

/**
 * Decode a base62x encoding string into a string.
 */
export function stringFromBase62x(data: string): string {

    return bufferFromBase62x(data).toString();
}

export {

    stringToBase62x as stringToBase62,
    stringFromBase62x as stringFromBase62,
    bufferToBase62x as bufferToBase62,
    bufferFromBase62x as bufferFromBase62,
    initBase62x as initBase62,
};
