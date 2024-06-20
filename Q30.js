var usernames = ["huda", "ayesha", "isha", "muskan", "kainat"];
usernames.forEach(function (username) {
    if (username === "isha") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
