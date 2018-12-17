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
import { convert } from "./convert";

/**
 * Compare data between different encodings.
 *
 * @param {string|Buffer}   a       The first operand to be compared.
 * @param {string|Buffer}   b       The second operand to be compared.
 * @param {string}          aEnc    The encoding of the first operand.
 * @param {string}          bEnc    The encoding of the second operand.
 */
export function compare<
    A extends C.Encodings,
    B extends C.Encodings
>(
    a: A extends C.BinaryEncodings ? Buffer : string,
    b: B extends C.BinaryEncodings ? Buffer : string,
    aEnc: A,
    bEnc: B,
): number {

    if (a instanceof Buffer) {

        aEnc = "buffer" as any;
    }
    else if (aEnc === "buffer") {

        throw new Errors.E_INCORRECT_INPUT_ENCODING({
            "metadata": { aEnc }
        });
    }

    if (b instanceof Buffer) {

        bEnc = "buffer" as any;
    }
    else if (bEnc === "buffer") {

        throw new Errors.E_INCORRECT_INPUT_ENCODING({
            "metadata": { bEnc }
        });
    }

    return convert(a, "buffer", aEnc).compare(
        convert(b, "buffer", bEnc)
    );
}
