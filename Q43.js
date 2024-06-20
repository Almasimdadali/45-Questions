var magician = ["Almas", "huda", "isha"];
function make_Great(Magician) {
    var Great = [];
    magician.forEach(function (magic) {
        Great.push("".concat(magic, " the great"));
    });
    return Great;
}
function show_Magicians(magicians) {
    magician.forEach(function (magician) {
        console.log(magician);
    });
}
var Great = make_Great(magicians.slice());
console.log("Original Array");
show_Magicians(magicians);
console.log("modified array");
show_Magicians(Great);
