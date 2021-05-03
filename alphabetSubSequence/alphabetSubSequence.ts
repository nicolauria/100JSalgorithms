export function alphabetSubsequence(s: string): boolean {
    let res = s.split("")

    return JSON.stringify(res) === JSON.stringify(res.sort()) && 
        JSON.stringify(res) === JSON.stringify(res.filter(distinct));
}

const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
