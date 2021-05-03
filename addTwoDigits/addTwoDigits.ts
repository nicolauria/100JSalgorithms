export function addTwoDigits(n: any): number {
    let numString = n.toString();
    let res = 0;

    for (let i = 0; i < numString.length; i++) {
        res += parseInt(numString[i])
    }

    return res;
}

console.log(addTwoDigits(29));