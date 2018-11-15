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

// tslint:disable:no-console

import * as Enc from "../lib";

const RAW_DATA = "Hello world!@#$%^&*()~`\":<>?,./[]{}\\|-=_+;'";

const data: Record<Enc.Encodings, any> = {} as any;

for (let ec of Enc.getEncodings()) {

    data[ec] = Enc.convert(RAW_DATA, ec as any, "utf8");
}

for (let input of Enc.getEncodings()) {

    for (let output of Enc.getEncodings()) {

        const outData = Enc.convert.apply(
            null,
            [data[input], output, input]
        );

        if (0 === Enc.compare(
            outData,
            data[input],
            output,
            input
        )) {

            console.info(`From ${input} to ${output}: Okay`);
        }
        else {

            console.error(`From ${input} to ${output}: Failed`);
        }
    }
}
