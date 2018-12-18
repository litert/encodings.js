export function urlEncode(data: Buffer | string): string {

    if (typeof data === "string") {

        data = Buffer.from(data, "utf8");
    }

    let ret: string[] = [];

    for (let b of data) {

        if (
            (b >= 97 && b <= 122) ||
            (b >= 65 && b <= 90) ||
            (b >= 48 && b <= 57)
        ) {

            ret.push(String.fromCharCode(b));
        }
        else {

            ret.push("%" + b.toString(16).padStart(2, "0"));
        }
    }

    return ret.join("");
}

export function urlDecode(data: string): Buffer {

    let ret: number[] = [];

    for (let i = 0; i < data.length; i++) {

        if (data[i] === "%") {

            ret.push(parseInt(data.substr(i + 1, 2), 16));

            i += 2;
        }
        else {

            ret.push(data[i].charCodeAt(0));
        }
    }

    return Buffer.from(ret);
}
