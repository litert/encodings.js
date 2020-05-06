/**
 * Copyright 2020 Angus.Fenying <fenying@litert.org>
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

const BASE32_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

const BITS_TO_CHARS = Buffer.from(BASE32_CHARS);

const CHARS_TO_BITS: Record<string, number> = {};

for (let i = 0; i < BASE32_CHARS.length; i++) {

    CHARS_TO_BITS[BASE32_CHARS[i]] = i;
}

export const PADDING = '='.charCodeAt(0);

export function bufferToBase32(data: Buffer): string {

    let ret: Buffer = Buffer.alloc(Math.ceil(data.length / 5) * 8);

    for (let i = 0, j = 0; i < data.length; i += 5) {

        switch (data.length - i) {
            case 1:

                /**
             * 11111 111|00 00000 0|0000 0000|0 00000 00|000 00000
             */
                ret[j++] = BITS_TO_CHARS[data[i] >> 3];
                ret[j++] = BITS_TO_CHARS[(data[i] & 0x07) << 2];
                ret[j++] = PADDING;
                ret[j++] = PADDING;
                ret[j++] = PADDING;
                ret[j++] = PADDING;
                ret[j++] = PADDING;
                ret[j++] = PADDING;
                break;
            case 2:

                /**
             * 11111 111|11 11111 1|0000 0000|0 00000 00|000 00000
             */
                ret[j++] = BITS_TO_CHARS[data[i] >> 3];
                ret[j++] = BITS_TO_CHARS[((data[i] & 0x07) << 2) | (data[i + 1] >> 6)];
                ret[j++] = BITS_TO_CHARS[(data[i + 1] >> 1) & 0x1F];
                ret[j++] = BITS_TO_CHARS[(data[i + 1] & 0x01) << 4];
                ret[j++] = PADDING;
                ret[j++] = PADDING;
                ret[j++] = PADDING;
                ret[j++] = PADDING;
                break;
            case 3:

                /**
             * 11111 111|11 11111 1|1111 1111|0 00000 00|000 00000
             */
                ret[j++] = BITS_TO_CHARS[data[i] >> 3];
                ret[j++] = BITS_TO_CHARS[((data[i] & 0x07) << 2) | (data[i + 1] >> 6)];
                ret[j++] = BITS_TO_CHARS[(data[i + 1] >> 1) & 0x1F];
                ret[j++] = BITS_TO_CHARS[((data[i + 1] & 0x01) << 4) | (data[i + 2] >> 4)];
                ret[j++] = BITS_TO_CHARS[(data[i + 2] & 0x0F) << 1];
                ret[j++] = PADDING;
                ret[j++] = PADDING;
                ret[j++] = PADDING;
                break;
            case 4:

                /**
             * 11111 111|11 11111 1|1111 1111|1 11111 11|000 00000
             */
                ret[j++] = BITS_TO_CHARS[data[i] >> 3];
                ret[j++] = BITS_TO_CHARS[((data[i] & 0x07) << 2) | (data[i + 1] >> 6)];
                ret[j++] = BITS_TO_CHARS[(data[i + 1] >> 1) & 0x1F];
                ret[j++] = BITS_TO_CHARS[((data[i + 1] & 0x01) << 4) | (data[i + 2] >> 4)];
                ret[j++] = BITS_TO_CHARS[((data[i + 2] & 0x0F) << 1) | (data[i + 3] >> 7)];
                ret[j++] = BITS_TO_CHARS[(data[i + 3] >> 2) & 0x1F];
                ret[j++] = BITS_TO_CHARS[(data[i + 3] & 0x03) << 3];
                ret[j++] = PADDING;
                break;
            default: // >= 5
            /**
             * 11111 111|11 11111 1|1111 1111|1 11111 11|111 11111
             */
                ret[j++] = BITS_TO_CHARS[data[i] >> 3];
                ret[j++] = BITS_TO_CHARS[((data[i] & 0x07) << 2) | (data[i + 1] >> 6)];
                ret[j++] = BITS_TO_CHARS[(data[i + 1] >> 1) & 0x1F];
                ret[j++] = BITS_TO_CHARS[((data[i + 1] & 0x01) << 4) | (data[i + 2] >> 4)];
                ret[j++] = BITS_TO_CHARS[((data[i + 2] & 0x0F) << 1) | (data[i + 3] >> 7)];
                ret[j++] = BITS_TO_CHARS[(data[i + 3] >> 2) & 0x1F];
                ret[j++] = BITS_TO_CHARS[((data[i + 3] & 0x03) << 3) | (data[i + 4] >> 5)];
                ret[j++] = BITS_TO_CHARS[data[i + 4] & 0x1F];
                break;
        }
    }

    return ret.toString();
}

export function bufferFromBase32(input: string): Buffer {

    if (input.length & 0x7) {

        throw new RangeError('Unrecognizable base32 input.');
    }

    const ret: Buffer = Buffer.allocUnsafe(input.length / 8 * 5);

    for (let i = 0, j = 0; i < input.length; i += 8) {

        let padFrom = 0;

        if (input[i + 7] === '=') {

            if (input[i + 8] !== undefined) {

                throw new RangeError('Unrecognizable base32 input.');
            }

            padFrom = input.indexOf('=', i) - i;
        }

        switch (padFrom) {
            case 0: // no padding

                /**
             * 11111 111|11 11111 1|1111 1111|1 11111 11|111 11111
             */
                ret[j++] = (CHARS_TO_BITS[input[i]] << 3) | (CHARS_TO_BITS[input[i + 1]] >> 2);
                ret[j++] = ((CHARS_TO_BITS[input[i + 1]] & 0x03) << 6)
                     | (CHARS_TO_BITS[input[i + 2]] << 1)
                     | (CHARS_TO_BITS[input[i + 3]] >> 4);
                ret[j++] = ((CHARS_TO_BITS[input[i + 3]] & 0x0F) << 4)
                     | (CHARS_TO_BITS[input[i + 4]] >> 1);
                ret[j++] = ((CHARS_TO_BITS[input[i + 4]] & 0x01) << 7)
                     | (CHARS_TO_BITS[input[i + 5]] << 2)
                     | (CHARS_TO_BITS[input[i + 6]] >> 3);
                ret[j++] = ((CHARS_TO_BITS[input[i + 6]] & 0x07) << 5)
                     | CHARS_TO_BITS[input[i + 7]];
                break;

            case 7: // 1 padding

                /**
             * 11111 111|11 11111 1|1111 1111|1 11111 11|000 00000
             */
                ret[j++] = (CHARS_TO_BITS[input[i]] << 3) | (CHARS_TO_BITS[input[i + 1]] >> 2);
                ret[j++] = ((CHARS_TO_BITS[input[i + 1]] & 0x03) << 6)
                     | (CHARS_TO_BITS[input[i + 2]] << 1)
                     | (CHARS_TO_BITS[input[i + 3]] >> 4);
                ret[j++] = ((CHARS_TO_BITS[input[i + 3]] & 0x0F) << 4)
                     | (CHARS_TO_BITS[input[i + 4]] >> 1);
                ret[j++] = ((CHARS_TO_BITS[input[i + 4]] & 0x01) << 7)
                     | (CHARS_TO_BITS[input[i + 5]] << 2)
                     | (CHARS_TO_BITS[input[i + 6]] >> 3);

                return ret.slice(0, -1);

            case 5: // 3 padding

                /**
             * 11111 111|11 11111 1|1111 1111|0 00000 00|000 00000
             */
                ret[j++] = (CHARS_TO_BITS[input[i]] << 3) | (CHARS_TO_BITS[input[i + 1]] >> 2);
                ret[j++] = ((CHARS_TO_BITS[input[i + 1]] & 0x03) << 6)
                     | (CHARS_TO_BITS[input[i + 2]] << 1)
                     | (CHARS_TO_BITS[input[i + 3]] >> 4);
                ret[j++] = ((CHARS_TO_BITS[input[i + 3]] & 0x0F) << 4)
                     | (CHARS_TO_BITS[input[i + 4]] >> 1);

                return ret.slice(0, -2);

            case 4: // 4 padding

                /**
             * 11111 111|11 11111 1|0000 0000|0 00000 00|000 00000
             */
                ret[j++] = (CHARS_TO_BITS[input[i]] << 3) | (CHARS_TO_BITS[input[i + 1]] >> 2);
                ret[j++] = ((CHARS_TO_BITS[input[i + 1]] & 0x03) << 6)
                     | (CHARS_TO_BITS[input[i + 2]] << 1)
                     | (CHARS_TO_BITS[input[i + 3]] >> 4);

                return ret.slice(0, -3);

            case 2: // 6 padding

                /**
             * 11111 111|00 00000 0|0000 0000|0 00000 00|000 00000
             */
                ret[j++] = (CHARS_TO_BITS[input[i]] << 3) | (CHARS_TO_BITS[input[i + 1]] >> 2);

                return ret.slice(0, -4);

            default:

                throw new RangeError('Unrecognizable base32 input.');
        }
    }

    return ret;
}

export function stringToBase32(data: string): string {

    return bufferToBase32(Buffer.from(data));
}

export function stringFromBase32(data: string): string {

    return bufferFromBase32(data).toString();
}
