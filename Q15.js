var guestlist = ["Almas", "Huda", "Kainat", "saba"];
var unableToAttend = "Kainat";
console.log(" ".concat(unableToAttend, ", can't make it to the dinner."));
var newGuests = "Maryam";
var invite = guestlist.indexOf(unableToAttend);
if (invite !== -1) {
    guestlist[invite] = newGuests;
}
;
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Dear ".concat(guest, ", you're invited to dinner"));
}
;
