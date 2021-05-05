export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < inputArray.length - k + 1; i++) {
        let total = inputArray.slice(i, i + k).reduce((a, b) => a + b);
        max = total > max ? total : max;
    }

    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));