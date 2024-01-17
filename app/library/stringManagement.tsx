export function convertToURLfriendly(string: string) {
    string = string.replace(/,/g, "").toLowerCase();
    return string.replace(/ /g, "-").toLowerCase();
}

export function addZeroToNumber(number: number) {
    return number < 10 ? "0" + number : number;
}
