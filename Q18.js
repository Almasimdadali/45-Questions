var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["newzealand", "Iceland", "japan", "switzerland"];
console.log("original order:", places);
console.log("Alphabatical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reserve alphabatical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
places.reverse();
console.log("Reserve order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabatical order:", places);
places.reverse();
console.log("Reserve alphabatical order:", places);
