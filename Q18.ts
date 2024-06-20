let places: string[] = ["newzealand","Iceland","japan","switzerland"];
console.log("original order:", places);

console.log("Alphabatical order:",[...places].sort());

console.log("Original order:",places);

console.log("Reserve alphabatical order:",[...places].sort());

console.log("Original order:",places);

places.reverse();
console.log("Reserve order:",places);

places.reverse();
console.log("Original order:",places);

places.sort();
console.log("Alphabatical order:",places);

places.reverse();
console.log("Reserve alphabatical order:",places);


