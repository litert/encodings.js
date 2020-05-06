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

// tslint:disable:no-console

import * as Enc from '../lib';

const RAND_SOURCE = 'abcdefghijlkmnopqrstuvwxyzABCDEFGHIJLKMNOPQRSTUVWXYZ0123456';

function randStr(len: number): string {

    return Array(len).fill(0).map(() => RAND_SOURCE[Math.floor(Math.random() * RAND_SOURCE.length)]).join('');
}

for (let i = 0; i < 256; i++) {

    const origin = randStr(i);

    console.info(`Origin:       ${origin}`);

    const base32 = Enc.stringToBase32(origin);

    console.info(`Base32:       ${base32}`);

    const decoded = Enc.stringFromBase32(base32);

    if (origin === decoded) {

        console.info('Decoded:      Matched');
    }
    else {

        console.error(`Decoded:      ${decoded}`);
        break;
    }
}
