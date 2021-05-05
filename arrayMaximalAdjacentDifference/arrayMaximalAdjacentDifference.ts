export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < inputArray.length - 1; i++) {
        let total = inputArray.slice(i, i + 2).reduce((a, b) => a - b);
        let abs = Math.abs(total);
        max = abs > max ? abs : max;
    }

    return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));