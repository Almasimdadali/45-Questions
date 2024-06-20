var Guestlist = ["Almas", "Huda", "Kainat", "saba"];
console.log("Sorry,we can only invite two prople for dinner");
while (Guestlist.length > 2) {
    var removedGuest = Guestlist.pop();
}
;
for (var _i = 0, Guestlist_1 = Guestlist; _i < Guestlist_1.length; _i++) {
    var guest = Guestlist_1[_i];
    console.log("Dear ".concat(guest, ", you're still invite for dinner"));
}
;
Guestlist.pop();
Guestlist.pop();
console.log("final list of guests:", Guestlist);
