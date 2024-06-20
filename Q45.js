function make_car(manufacturer, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    option.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (key = value[0], value);
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "Black"], ["Year", 2019]));
console.log(make_car("Civic", "Cultus", ["color", "Blue"], ["Year", 2019]));
