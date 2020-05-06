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

export function bufferToUrlencode(data: Buffer): string {

    let ret: string[] = [];

    for (let b of data) {

        if (
            (b >= 97 && b <= 122) ||
            (b >= 65 && b <= 90) ||
            (b >= 48 && b <= 57)
        ) {

            ret.push(String.fromCharCode(b));
        }
        else {

            ret.push('%' + b.toString(16).padStart(2, '0'));
        }
    }

    return ret.join('');
}

export function bufferFromUrlencode(data: string): Buffer {

    let ret: number[] = [];

    for (let i = 0; i < data.length; i++) {

        if (data[i] === '%') {

            ret.push(parseInt(data.substr(i + 1, 2), 16));

            i += 2;
        }
        else {

            ret.push(data[i].charCodeAt(0));
        }
    }

    return Buffer.from(ret);
}

export function stringToUrlencode(data: string): string {

    return bufferToUrlencode(Buffer.from(data));
}

export function stringFromUrlencode(data: string): string {

    return bufferFromUrlencode(data).toString();
}
