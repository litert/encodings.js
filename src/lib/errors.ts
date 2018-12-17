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

/**
 * E_INVALID_X_TAG
 *
 * The x tag must be one charactor of 0-9, a-z, A-Z.
 */
export const E_INVALID_X_TAG = Errors.define(
    null,
    "E_INVALID_X_TAG",
    "The x tag must be one charactor of 0-9, a-z, A-Z."
);

/**
 * E_INVALID_BASE62X_INPUT
 *
 * The input of base62x decoder is invalid.
 */
export const E_INVALID_BASE62X_INPUT = Errors.define(
    null,
    "E_INVALID_BASE62X_INPUT",
    "The input of base62x decoder is invalid."
);
