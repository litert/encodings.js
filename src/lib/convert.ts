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
import * as C from "./common";
import * as Base64Url from "./base64url";
import * as StrickUri from "./strict_uri";
import * as URLEncode from "./urlencode";
import * as Base62x from "./base62x";

const base62x = Base62x.createBase62xEncoder();

/**
 * Convert the data from an encoding to another encoding.
 *
 * @param {string|Buffer}   data    The data to be converted.
 * @param {string}          output   The encoding of input data.
 * @param {string}          input  The encoding of output.
 */
export function convert<I extends C.Encodings, O extends C.Encodings>(
    data: I extends C.BinaryEncodings ? Buffer : string,
    output: O,
    input: I
): O extends C.BinaryEncodings ? Buffer : string {

    let oE: string = output;
    let iE: string = input;

    if (data instanceof Buffer) {

        iE = "buffer";
    }
    else if (iE === "buffer") {

        throw new Errors.E_INCORRECT_INPUT_ENCODING({
            "metadata": { input: iE, output: oE }
        });
    }

    if (iE === oE) {

        /**
         * When input === output, do nothing.
         */
        return data as any;
    }

    switch (iE) {
    case "buffer":

        switch (oE) {
        case "base64url":

            return Base64Url.base64UrlEncode((data as Buffer).toString("base64")) as any;

        case "uri":

            return encodeURIComponent((data as Buffer).toString()) as any;

        case "urlencode":

            return URLEncode.urlEncode(data) as any;

        case "strict_uri":

            return StrickUri.encodeURIStrictly((data as Buffer).toString()) as any;

        case "base62x":

            return base62x.encode(data) as any;

        case "base62x":

            return base62x.encode(data) as any;

        case "hex":
        case "base64":
        case "utf8":

            return (data as Buffer).toString(oE) as any;

        default:

            throw new Errors.E_INVALID_ENCODING({
                "message": `The output encoding "${oE}" is invalid.`,
                "metadata": { input: iE, output: oE }
            });
        }

    case "base64url":

        switch (oE) {

        case "buffer":

            return Buffer.from(Base64Url.base64UrlDecode(data as string), "base64") as any;

        case "urlencode":

            return URLEncode.urlEncode(
                Buffer.from(Base64Url.base64UrlDecode(data as string), "base64")
            ) as any;

        case "base62x":

            return base62x.encode(
                Buffer.from(Base64Url.base64UrlDecode(data as string), "base64")
            ) as any;

        case "base64":
        case "hex":
        case "utf8":

            return Buffer.from(
                Base64Url.base64UrlDecode(data as string),
                "base64"
            ).toString(oE) as any;

        case "uri":

            return encodeURIComponent(Buffer.from(
                Base64Url.base64UrlDecode(data as string),
                "base64"
            ).toString()) as any;

        case "strict_uri":

            return StrickUri.encodeURIStrictly(Buffer.from(
                Base64Url.base64UrlDecode(data as string),
                "base64"
            ).toString()) as any;

        default:

            throw new Errors.E_INVALID_ENCODING({
                "message": `The output encoding "${oE}" is invalid.`,
                "metadata": { input: iE, output: oE }
            });
        }

    case "strict_uri":
    case "uri":

        switch (oE) {
        case "base64url":

            return Base64Url.base64UrlEncode(Buffer.from(
                decodeURIComponent(data as string)
            ).toString("base64")) as any;

        case "base62x":

            return base62x.encode(
                decodeURIComponent(data as string)
            ) as any;

        case "urlencode":

            return URLEncode.urlEncode(
                decodeURIComponent(data as string)
            ) as any;

        case "uri": // from strict_uri

            return encodeURIComponent(decodeURIComponent(data as string)) as any;

        case "strict_uri": // from uri

            return StrickUri._encodeURIStrictly(data as string) as any;

        case "buffer":

            return Buffer.from(decodeURIComponent(data as string)) as any;

        case "base64":
        case "hex":
        case "utf8":

            return Buffer.from(
                decodeURIComponent(data as string)
            ).toString(oE) as any;

        default:

            throw new Errors.E_INVALID_ENCODING({
                "message": `The output encoding "${oE}" is invalid.`,
                "metadata": { input: iE, output: oE }
            });
        }

    case "base62x":

        switch (oE) {
        case "base64url":

            return Base64Url.base64UrlEncode(base62x.decode(
                data as string
            ).toString("base64")) as any;

        case "uri":

            return encodeURIComponent(base62x.decode(data as string).toString()) as any;

        case "urlencode":

            return URLEncode.urlEncode(base62x.decode(data as string)) as any;

        case "strict_uri":

            return StrickUri.encodeURIStrictly(
                base62x.decode(data as string).toString()
            ) as any;

        case "buffer":

            return base62x.decode(data as string) as any;

        case "base64":
        case "hex":
        case "utf8":

            return base62x.decode(data as string).toString(oE) as any;

        default:

            throw new Errors.E_INVALID_ENCODING({
                "message": `The output encoding "${oE}" is invalid.`,
                "metadata": { input: iE, output: oE }
            });
        }

    case "urlencode":

        switch (oE) {
        case "base64url":

            return Base64Url.base64UrlEncode(URLEncode.urlDecode(
                data as string
            ).toString("base64")) as any;

        case "uri":

            return encodeURIComponent(
                URLEncode.urlDecode(data as string).toString()
            ) as any;

        case "base62x":

            return base62x.encode(URLEncode.urlDecode(data as string)) as any;

        case "strict_uri":

            return StrickUri.encodeURIStrictly(
                URLEncode.urlDecode(data as string).toString()
            ) as any;

        case "buffer":

            return URLEncode.urlDecode(data as string) as any;

        case "base64":
        case "hex":
        case "utf8":

            return URLEncode.urlDecode(data as string).toString(oE) as any;

        default:

            throw new Errors.E_INVALID_ENCODING({
                "message": `The output encoding "${oE}" is invalid.`,
                "metadata": { input: iE, output: oE }
            });
        }

    case "hex":
    case "utf8":
    case "base64":

        switch (oE) {

        case "buffer":

            return Buffer.from(data as string, iE) as any;

        case "base64url":

            return Base64Url.base64UrlEncode(Buffer.from(
                data as string,
                iE
            ).toString("base64")) as any;

        case "base62x":

            return base62x.encode(Buffer.from(
                data as string,
                iE
            )) as any;

        case "urlencode":

            return URLEncode.urlEncode(Buffer.from(
                data as string,
                iE
            )) as any;

        case "uri":

            return encodeURIComponent(Buffer.from(
                data as string,
                iE
            ).toString()) as any;

        case "strict_uri":

            return StrickUri.encodeURIStrictly(Buffer.from(
                data as string,
                iE
            ).toString()) as any;

        case "base64":
        case "hex":
        case "utf8":

            return Buffer.from(
                data as string,
                iE
            ).toString(oE) as any;

        default:

            throw new Errors.E_INVALID_ENCODING({
                "message": `The output encoding "${oE}" is invalid.`,
                "metadata": { input: iE, output: oE }
            });
        }

    default:

        throw new Errors.E_INVALID_ENCODING({
            "message": `The input encoding "${iE}" is invalid.`,
            "metadata": { input: iE, output: oE }
        });
    }
}
