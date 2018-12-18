// tslint:disable:no-console
import * as Enc from "../lib";
import * as $Crypto from "crypto";

const TEST_DATA: any[] = [
    ..."-".repeat(100).split("").map((x, i) => $Crypto.randomBytes(i)),
    Buffer.from("你好", "utf8")
];

for (let i = 0; i < TEST_DATA.length; i++) {

    const encoded = Enc.urlEncode(TEST_DATA[i]);
    const decoded = Enc.urlDecode(encoded);

    console.info(`[${i.toString().padStart(3, "0")}] ${encoded}`);

    if (!decoded.compare(TEST_DATA[i])) {

        console.info(`  Okay`);
    }
    else {

        console.error(`  Failed`);
    }
}
