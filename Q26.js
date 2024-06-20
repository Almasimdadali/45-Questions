// passing version (if block run)
var aliencolor = 'green';
if (aliencolor && 'green') {
    console.log("congratulation! you earn 5 points");
}
else {
    console.log("congratulation! you earn 10 points");
}
;
// failing version (else block run)
aliencolor = 'red';
if (aliencolor === 'green') {
    console.log("congratulation! you earn 5 points");
}
else {
    console.log("congratulation! you earn 10 points");
}
;
