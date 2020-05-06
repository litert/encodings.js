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
import * as $Crypto from 'crypto';

const TEST_DATA: any[] = [
    ...'-'.repeat(100).split('').map((x, i) => $Crypto.randomBytes(i)),
    Buffer.from('你好', 'utf8')
];

for (let i = 0; i < TEST_DATA.length; i++) {

    const encoded = Enc.bufferToUrlencode(TEST_DATA[i]);
    const decoded = Enc.bufferFromUrlencode(encoded);

    console.info(`[${i.toString().padStart(3, '0')}] ${encoded}`);

    if (!decoded.compare(TEST_DATA[i])) {

        console.info('  Okay');
    }
    else {

        console.error('  Failed');
    }
}
