let current_users: string[] = ["huda", "jiya", "isha", "ayesha", "kainat"];
let new_users: string[] = ["mishal", "maham", "hiba", "fozia", "kanwal"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});