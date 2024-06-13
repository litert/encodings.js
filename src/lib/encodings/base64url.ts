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
 * Convert a string from BASE64 to BASE64-URL-Safe encoding.
 *
 * @param {string} base64str The BASE64 encoding string to be converted.
 *
 * @returns {string} returns the BASE64-URL-Safe encoding result of input.
 */
export function base64UrlEncode(base64str: string): string {

    return base64str
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

/**
 * Convert a string from BASE64-URL-Safe encoding to BASE64.
 *
 * @param {string} base64urlStr The BASE64-URL-Safe encoding string to be converted.
 *
 * @returns {string} returns the BASE64 encoding result of input.
 */
export function base64UrlDecode(base64urlStr: string): string {

    const r = base64urlStr.length % 4;

    return base64urlStr
        .replace(/-/g, '+')
        .replace(/_/g, '/')
        .padEnd(base64urlStr.length + (r ? (4 - r) : 0), '=');
}

/**
 * Encode a string to BASE64-URL-Safe encoding string.
 *
 * @param data  The BASE64 encoded string to be converted.
 *
 * @returns     The BASE64-URL-Safe encoded string.
 */
export function stringToBase64Url(data: string): string {

    return Buffer.from(data).toString('base64url');
}

/**
 * Decode BASE64-URL-Safe encoding string to string.
 *
 * @param data  The BASE64-URL-Safe encoded string to be converted.
 * @returns     The BASE64 encoded string.
 */
export function stringFromBase64Url(data: string): string {

    return Buffer.from(data, 'base64url').toString();
}

/**
 * Encode a buffer to BASE64-URL-Safe encoding string.
 *
 * @param data  The BASE64 encoded buffer to be converted.
 * @returns     The BASE64-URL-Safe encoded string.
 */
export function bufferToBase64Url(data: Buffer): string {

    return data.toString('base64url');
}

/**
 * Decode BASE64-URL-Safe encoding string to Buffer.
 *
 * @param data  The BASE64-URL-Safe encoded buffer to be converted.
 * @returns     The BASE64 encoded buffer.
 */
export function bufferFromBase64Url(data: string): Buffer {

    return Buffer.from(data, 'base64url');
}
