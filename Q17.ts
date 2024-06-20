let Guestlist = ["Almas", "Huda", "Kainat", "saba"];
console.log(`Sorry,we can only invite two prople for dinner`);

while(Guestlist.length >2) {
    const removedGuest = Guestlist.pop();

};

for (let guest of Guestlist) {
    console.log (`Dear ${guest}, you're still invite for dinner`);
};

Guestlist.pop();
Guestlist.pop();

console.log("final list of guests:", Guestlist);
