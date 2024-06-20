var magicians = ["Almas", "Huda", "Isha"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log("".concat(magician, " is the magician"));
    });
}
show_magicians(magicians);
