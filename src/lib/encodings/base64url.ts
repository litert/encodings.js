/**
 * Copyright 2019 Angus.Fenying <fenying@litert.org>
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

import * as Base64 from "./base64";

/**
 * Convert a string from BASE64 to BASE64-URL-Safe encoding.
 *
 * @param {string} base64 The BASE64 encoding string to be converted.
 *
 * @returns {string} returns the BASE64-URL-Safe encoding result of input.
 */
export function base64UrlEncode(base64: string): string {

    return base64
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
}

/**
 * Convert a string from BASE64-URL-Safe encoding to BASE64.
 *
 * @param {string} base64 The BASE64-URL-Safe encoding string to be converted.
 *
 * @returns {string} returns the BASE64 encoding result of input.
 */
export function base64UrlDecode(urlbase64: string): string {

    const r = urlbase64.length % 4;

    return urlbase64
        .replace(/\-/g, "+")
        .replace(/_/g, "/")
        .padEnd(urlbase64.length + (r ? (4 - r) : 0), "=");
}

export function stringToBase64Url(data: string): string {

    return base64UrlEncode(Base64.stringToBase64(data));
}

export function stringFromBase64Url(data: string): string {

    return Base64.stringFromBase64(base64UrlDecode(data));
}

export function bufferToBase64Url(data: Buffer): string {

    return base64UrlEncode(Base64.bufferToBase64(data));
}

export function bufferFromBase64Url(data: string): Buffer {

    return Base64.bufferFromBase64(base64UrlDecode(data));
}
