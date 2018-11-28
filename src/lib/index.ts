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

import * as Core from "@litert/core";

/**
 * The error hub of encodings module.
 */
export const Errors = Core.createErrorHub("@litert/encodings");

/**
 * E_INVALID_ENCODING
 *
 * The encodings is invalid.
 */
export const E_INVALID_ENCODING = Errors.define(
    null,
    "E_INVALID_ENCODING",
    "The encodings is invalid."
);

/**
 * E_INCORRECTED_INPUT_ENCODING
 *
 * The input encoding does not match the input data.
 */
export const E_INCORRECT_INPUT_ENCODING = Errors.define(
    null,
    "E_INCORRECTED_INPUT_ENCODING",
    "The input encoding does not match the input data."
);

export type BinaryEncodings = "buffer";

export type StringEncodings = "base64" | "base64url" | "hex" | "strict_uri" |
                              "utf8" | "uri";

export type Encodings = BinaryEncodings | StringEncodings;

/**
 * Get the list of supported encodings.
 *
 * @returns {string[]} Returns a the list of supported encodings.
 */
export function getEncodings(): Encodings[] {

    return [
        "base64", "base64url", "buffer", "hex", "strict_uri",
        "utf8", "uri"
    ];
}

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

function _encodeURIStrictly(text: string): string {

    return text.replace(/([-!*()~'\._])/g, function(s): string {
        return "%" + s.charCodeAt(0).toString(16).padStart(2, "0");
    });
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

export interface IConvertMethod {

    /**
     * @param {Buffer} data     The data to be converted.
     * @param {string} output   The output encoding of data.
     * @param {string} input    The input encoding of data.
     */
    (data: Buffer, output: BinaryEncodings, input?: BinaryEncodings): Buffer;

    /**
     * @param {Buffer} data     The data to be converted.
     * @param {string} output   The output encoding of data.
     * @param {string} input    The input encoding of data.
     */
    (data: Buffer, output: StringEncodings, input?: BinaryEncodings): string;

    /**
     * @param {string} data     The data to be converted.
     * @param {string} output   The output encoding of data.
     * @param {string} input    The input encoding of data.
     */
    (data: string, output: BinaryEncodings, input: StringEncodings): Buffer;

    /**
     * @param {string} data     The data to be converted.
     * @param {string} output   The output encoding of data.
     * @param {string} input    The input encoding of data.
     */
    (
        data: string,
        output: StringEncodings,
        input: StringEncodings
    ): string;
}

/**
 * Convert the data from an encoding to another encoding.
 *
 * @param {string|Buffer}   data    The data to be converted.
 * @param {string}          input   The encoding of input data.
 * @param {string}          output  The encoding of output.
 */
export const convert: IConvertMethod = function(
    data: string | Buffer,
    output: StringEncodings | BinaryEncodings,
    input?: StringEncodings | BinaryEncodings
): any {

    if (data instanceof Buffer) {

        input = "buffer";
    }
    else if (input === "buffer") {

        throw new E_INCORRECT_INPUT_ENCODING({
            "metadata": { input, output }
        });
    }

    if (input === output) {

        return data;
    }

    switch (input) {
    case "buffer":

        switch (output) {
        case "base64url":

            return base64UrlEncode((data as Buffer).toString("base64"));

        case "uri":

            return encodeURIComponent((data as Buffer).toString());

        case "strict_uri":

            return encodeURIStrictly((data as Buffer).toString());

        case "hex":
        case "base64":
        case "utf8":

            return (data as Buffer).toString(output);

        default:

            throw new E_INVALID_ENCODING({
                "message": `The output encoding "${output}" is invalid.`,
                "metadata": { input, output }
            });
        }

    case "base64url":

        switch (output) {

        case "buffer":

            return Buffer.from(base64UrlDecode(data as string), "base64");

        case "base64":
        case "hex":
        case "utf8":

            return Buffer.from(
                base64UrlDecode(data as string),
                "base64"
            ).toString(output);

        case "uri":

            return encodeURIComponent(Buffer.from(
                base64UrlDecode(data as string),
                "base64"
            ).toString());

        case "strict_uri":

            return encodeURIStrictly(Buffer.from(
                base64UrlDecode(data as string),
                "base64"
            ).toString());

        default:

            throw new E_INVALID_ENCODING({
                "message": `The output encoding "${output}" is invalid.`,
                "metadata": { input, output }
            });
        }

    case "strict_uri":
    case "uri":

        switch (output) {
        case "base64url":

            return base64UrlEncode(Buffer.from(
                decodeURIComponent(data as string)
            ).toString("base64"));

        case "uri": // from strict_uri

            return encodeURIComponent(decodeURIComponent(data as string));

        case "strict_uri": // from uri

            return _encodeURIStrictly(data as string);

        case "buffer":

            return Buffer.from(decodeURIComponent(data as string));

        case "base64":
        case "hex":
        case "utf8":

            return Buffer.from(
                decodeURIComponent(data as string)
            ).toString(output);

        default:

            throw new E_INVALID_ENCODING({
                "message": `The output encoding "${output}" is invalid.`,
                "metadata": { input, output }
            });
        }

    case "hex":
    case "utf8":
    case "base64":

        switch (output) {

        case "buffer":

            return Buffer.from(data as string, input);

        case "base64url":

            return base64UrlEncode(Buffer.from(
                data as string,
                input
            ).toString("base64"));

        case "uri":

            return encodeURIComponent(Buffer.from(
                data as string,
                input
            ).toString());

        case "strict_uri":

            return encodeURIStrictly(Buffer.from(
                data as string,
                input
            ).toString());

        case "base64":
        case "hex":
        case "utf8":

            return Buffer.from(
                data as string,
                input
            ).toString(output);

        default:

            throw new E_INVALID_ENCODING({
                "message": `The output encoding "${output}" is invalid.`,
                "metadata": { input, output }
            });
        }

    default:

        throw new E_INVALID_ENCODING({
            "message": `The input encoding "${input}" is invalid.`,
            "metadata": { input, output }
        });
    }
};

/**
 * Compare data between different encodings.
 *
 * @param {string|Buffer}   a       The first operand to be compared.
 * @param {string|Buffer}   b       The second operand to be compared.
 * @param {string}          aEnc    The encoding of the first operand.
 * @param {string}          bEnc    The encoding of the second operand.
 */
export function compare(
    a: string | Buffer,
    b: string | Buffer,
    aEnc: Encodings,
    bEnc: Encodings,
): number {

    if (a instanceof Buffer) {

        aEnc = "buffer";
    }
    else if (aEnc === "buffer") {

        throw new E_INCORRECT_INPUT_ENCODING({
            "metadata": { aEnc }
        });
    }

    if (b instanceof Buffer) {

        bEnc = "buffer";
    }
    else if (bEnc === "buffer") {

        throw new E_INCORRECT_INPUT_ENCODING({
            "metadata": { bEnc }
        });
    }

    return convert.apply(null, [a, "buffer", aEnc]).compare(
        convert.apply(null, [b, "buffer", bEnc])
    );
}
