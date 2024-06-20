function make_car(
    manufacturer: string,
    model: string,
    ...option: [string, any][]
) {
    let car = {manufacturer, model}
    option.forEach(([key, value]) => ([key] = value));
    return car;
    
}

console.log(make_car("Toyota","Corolla", ["color", "Black"], ["Year", 2019]));
console.log(make_car("Civic","Cultus", ["color", "Blue"], ["Year", 2019]));

