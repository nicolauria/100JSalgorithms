export function centuryFromYear(year: number): number {
    let century = year / 100;
    let floor = Math.floor(century);
    century = floor === century ? floor : floor + 1;
    return century;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));