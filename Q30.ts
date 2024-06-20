
let usernames: string[] = ["huda", "ayesha", "isha", "muskan", "kainat"];

usernames.forEach(username => {
    if (username === "isha") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});