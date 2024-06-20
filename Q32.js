var current_users = ["huda", "jiya", "isha", "ayesha", "kainat"];
var new_users = ["mishal", "maham", "hiba", "fozia", "kanwal"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
