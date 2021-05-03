export function almostIncreasingSequence(sequence: number[]): boolean {
    for (let i = 0; i < sequence.length; i++) {

        let modifiedSequence = [...sequence];
        modifiedSequence.splice(i, 1);

        let validSequence = true;
        for (let i = 0; i < modifiedSequence.length - 1; i++) {
            if (modifiedSequence[i] >= modifiedSequence[i + 1]) {
                validSequence = false;
            }
        }
        
        if (validSequence) {
            return true;
        }
    }

    return false;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 