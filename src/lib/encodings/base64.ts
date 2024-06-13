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

/**
 * Encode a string into a BASE64 encoding string.
 *
 * @param data  The string to be encoded.
 * @returns     The BASE64 encoded string.
 */
export function stringToBase64(data: string): string {

    return Buffer.from(data).toString('base64');
}

/**
 * Decode a BASE64 encoding string into a string.
 */
export function stringFromBase64(data: string): string {

    return Buffer.from(data, 'base64').toString();
}

/**
 * Encode a buffer to a BASE64 encoding string.
 */
export function bufferToBase64(data: Buffer): string {

    return data.toString('base64');
}

/**
 * Decode a BASE64 encoding string into a buffer.
 *
 * @param data  The BASE64 encoded string to be decoded.
 */
export function bufferFromBase64(data: string): Buffer {

    return Buffer.from(data, 'base64');
}
