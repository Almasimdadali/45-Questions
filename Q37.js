function makeshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Making a ".concat(size, " t-shirt with the message ").concat(message, " printed on it"));
}
makeshirt();
makeshirt("medium");
makeshirt("small", " Dive into coding");
