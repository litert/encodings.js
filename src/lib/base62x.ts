/**
 * Copyright 2018 Angus.Fenying
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
import * as Errors from "./errors";

export interface IBase62xEncoder {

    /**
     * The tag of `x` used in base62x.
     */
    xtag: string;

    /**
     * Encode any data into base62x encoding.
     *
     * @param {Buffer|string} data  The data to be encoded.
     *
     * @returns The string in base62x encoding.
     */
    encode(data: Buffer | string): string;

    /**
     * Decode a base62x encoding string into Buffer.
     *
     * @param {string} data  The data to be decoded.
     *
     * @returns The Buffer of raw data.
     */
    decode(base62x: string): Buffer;
}

const ALPHA_CHAR_TABLE = [
    ..."0123456789",
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ..."abcdefghijklmnopqrstuvwxyz"
];

export const DEFAULT_X_TAG: string = "x";

class Base62xEncoder
implements IBase62xEncoder {

    private _xtag!: string;

    /**
     * The  byte-to-alpha mapping table.
     *
     * Initialized in method `_buildB2ATable`.
     */
    private _b2aTable!: string[];

    /**
     * The  alpha-to-byte mapping table.
     *
     * Initialized in method `_buildB2ATable`.
     */
    private _a2bTable!: Record<string, number>;

    public constructor() {

        this.xtag = DEFAULT_X_TAG;
    }

    private _buildB2ATable(): void {

        const xPos = ALPHA_CHAR_TABLE.indexOf(this._xtag);

        this._b2aTable = [
            ...ALPHA_CHAR_TABLE.slice(0, xPos),
            ...ALPHA_CHAR_TABLE.slice(xPos + 1),
            ...[1, 2, 3].map((x) => `${this._xtag}${x}`)
        ];

        this._a2bTable = {};

        for (let i = 0; i < this._b2aTable.length; i++) {

            this._a2bTable[this._b2aTable[i]] = i;
        }
    }

    public get xtag(): string {

        return this._xtag;
    }

    public set xtag(x: string) {

        if (!/^[a-zA-Z0-9]$/.test(x)) {

            throw new Errors.E_INVALID_X_TAG();
        }

        this._xtag = x;
        this._buildB2ATable();
    }

    public encode(data: string | Buffer): string {

        let ret: string[] = [];

        if (typeof data === "string") {

            data = Buffer.from(data);
        }

        for (let i = 0; i < data.length; i += 3) {

            switch (data.length - i) {
            case 1:
                ret.push(
                    this._b2aTable[data[i] >> 2],
                    this._b2aTable[data[i] & 0x03]
                );
                break;
            case 2:
                ret.push(
                    this._b2aTable[data[i] >> 2],
                    this._b2aTable[((data[i] & 0x03) << 4) | (data[i + 1] >> 4)],
                    this._b2aTable[data[i + 1] & 0x0F]
                );
                break;
            default: // >= 3
                ret.push(
                    this._b2aTable[data[i] >> 2],
                    this._b2aTable[((data[i] & 0x03) << 4) | (data[i + 1] >> 4)],
                    this._b2aTable[((data[i + 1] & 0x0F) << 2) | (data[i + 2] >> 6)],
                    this._b2aTable[data[i + 2] & 0x3F]
                );
                break;
            }
        }

        return ret.join("");
    }

    public decode(base62x: string): Buffer {

        const xtag = this._xtag;

        let bytes: number[] = [];

        for (let i = 0; i < base62x.length; i += 4) {

            let bs: number[] = [];

            for (let j = i; bs.length < 4 && j < base62x.length; j++) {

                let a = base62x[j];

                if (a === undefined) {

                    break;
                }

                if (a === xtag) {

                    a += base62x[++j];
                    i++;
                }

                const b: number = this._a2bTable[a];

                if (b === undefined) {

                    throw new Errors.E_INVALID_BASE62X_INPUT();
                }

                bs.push(b);
            }

            switch (bs.length) {
            case 1:

                throw new Errors.E_INVALID_BASE62X_INPUT();

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
}

/**
 * Create a base62x encoders.
 */
export function createBase62xEncoder(): IBase62xEncoder {

    return new Base62xEncoder();
}
