// passing version
var alien_color = 'green';
if (alien_color && 'green') {
    console.log("congratulation! you earn 5 points");
}
;
// failing version
alien_color = 'red';
if (alien_color === 'Red') {
    console.log("congratulation! you earn 5 points");
}
;
