var Magician = ["Almas", "Huda", "Isha"];
function make_great(Magician) {
    Magician.forEach(function (magic) {
        console.log("".concat(magic, ", the great magician"));
    });
}
make_great(Magician);
// function make_great(magicians: string[]) void {
//     for (let i =0; i < magicians.length; i++) {
//         magicians[i] = "the great" + magician[i]
//     }
// }
// function show_magicians(magicians: string[]) {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }
// let magicians_names:string[]=["david", "harry", "penn jillette"]
// make_great(magicians_names);
// show_magicians(magicians_names);
