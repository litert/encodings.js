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

export function _encodeURIStrictly(text: string): string {

    return text.replace(/([-!*()~'\._])/g, function(s): string {
        return "%" + s.charCodeAt(0).toString(16).padStart(2, "0");
    });
}

/**
 * Convert a string to Strict-URL-Safe encoding.
 *
 * > All special chars including `-`, `.`, `_`, `!`, `*`, `(`, `)`, `~`, `'`
 * > will be escaped.
 *
 * NOTE: Decode the Strict-URL-Safe encoding string by `decodeURIComponent`.
 *
 * @param {string} text The string to be converted.
 *
 * @returns {string} returns the Strict-URL-Safe encoding result of input.
 */
export function encodeURIStrictly(text: string): string {

    return _encodeURIStrictly(encodeURIComponent(text));
}
