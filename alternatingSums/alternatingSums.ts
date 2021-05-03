export function alternatingSums(a: number[]): number[] {
    let totalWeights = [0, 0];

    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            totalWeights[0] += a[i];
        } else {
            totalWeights[1] += a[i];
        }
    }

    return totalWeights;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))