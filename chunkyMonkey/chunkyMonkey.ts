export function chunkyMonkey(arr: any[], size: number): any[][] {
    let result = [];
    let subArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (subArr.length === size) {
            result.push(subArr);
            subArr = [];
        }
        subArr.push(arr[i]);
    }

    if (subArr.length > 0) {
        result.push(subArr);
    }

    return result;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));