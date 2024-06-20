let Guests = ["Almas", "Huda", "Kainat", "saba"];
console.log("Great news! I found a bigger dinner table!");

//Adding more guests
Guests.unshift ("talha");
Guests.splice (Guests.length /2, 0,"Almas")
.push("isha")

Guests.forEach(Guests => {
    console.log(`Dear ${Guests}, would you like to join me for dinner?`);
});
