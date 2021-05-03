export function adjacentElementsProduct(inputArray: number[]): number {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < inputArray.length - 1; i++) {
        let product = inputArray[i] * inputArray[i + 1];
        max = product > max ? product : max;
    }
    return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));