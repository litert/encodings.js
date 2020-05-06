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

const RAW_DATA = 'Hello world!@#$%^&*()~`":<>?,./[]{}\\|-=_+;\'';

const base64 = Enc.stringToBase64(RAW_DATA);

console.info(`Base64:       ${base64}`);

const base64url = Enc.base64UrlEncode(base64);

console.info(`Base64Url:    ${Enc.base64UrlEncode(base64)}`);

console.info(`Base64Url:    ${Enc.stringToBase64Url(RAW_DATA)}`);

console.info(`Base64:       ${Enc.base64UrlDecode(base64url)}`);

console.info(`RawData:      ${Enc.stringFromBase64(base64)}`);

console.info(`RawData:      ${Enc.stringFromBase64Url(base64url)}`);
