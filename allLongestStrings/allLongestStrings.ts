export function allLongestStrings(inputArray: string[]): string[] {
    let max = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let length = inputArray[i].length;
        max = length > max ? length : max;
    }

    let res = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === max) {
            res.push(inputArray[i]);
        }
    }

    return res;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));