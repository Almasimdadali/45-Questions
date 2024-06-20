function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('make a sandwich with: ${items.join(" , ")}..');
}
make_sandwich("tomato", "cheese", "sauce");
make_sandwich("vegetables", "mustard");
