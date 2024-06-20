var Name = "Almas";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
function totitlecase(srt) {
    return srt.charAt(0).toUpperCase() + srt.slice(1).toLowerCase();
}
var string = "Almas";
var titlecasestring = totitlecase(string);
console.log(titlecasestring);
