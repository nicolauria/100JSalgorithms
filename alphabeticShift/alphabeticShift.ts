export function alphabeticShift(inputString: string): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < inputString.length; i++) {
        let index = alphabet.indexOf(inputString[i]);
        let newIndex = (index + 1) % 26;
        result += alphabet[newIndex];
    }

    return result;
}

console.log(alphabeticShift('crazy'));