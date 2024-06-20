let Name = "Almas"
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
function totitlecase(srt: string): string {
    return srt.charAt(0).toUpperCase() + srt.slice(1).toLowerCase();
}
let string = "Almas"
let titlecasestring: string = totitlecase(string)
console.log(titlecasestring)