export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    return inputArray.reduce((a, b) => {
        a.push(b === elemToReplace ? substitutionElem : b);
        return a;
    }, [])
}

console.log(arrayReplace([1, 2, 1], 1, 3));