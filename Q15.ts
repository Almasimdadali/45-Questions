let guestlist = ["Almas","Huda","Kainat","saba"];
let unableToAttend= "Kainat";
console.log(` ${unableToAttend}, can't make it to the dinner.`);


let newGuests= "Maryam";

let invite = guestlist.indexOf(unableToAttend);
if (invite !== -1) {
    guestlist[invite] = newGuests;
};

for (let guest of guestlist) {
    console.log(`Dear ${guest}, you're invited to dinner`);
};