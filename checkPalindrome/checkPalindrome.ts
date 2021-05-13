export function checkPalindrome(inputString: string): boolean {
    let reversed = inputString.split("").reverse().join("");
    return inputString === reversed;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
