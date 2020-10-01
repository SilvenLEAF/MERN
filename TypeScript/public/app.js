/* ------------------------------------
.     practicing DOM manipulaiton
------------------------------------ */
const myH1 = document.querySelector('h1');
const myImage = document.querySelector('.myImage');
const src = myImage.src;
myH1.textContent = src;
const myForm = document.querySelector('.myForm');
/* ------------------------------------
.         practicing tuples
------------------------------------ */
let ninja = ['gj', 34, true];
ninja.pop();
console.log(ninja);
/* ------------------------------------
.         practicing enums
------------------------------------ */
var NinjaTypes;
(function (NinjaTypes) {
    NinjaTypes[NinjaTypes["a"] = 0] = "a";
    NinjaTypes[NinjaTypes["b"] = 5] = "b";
    NinjaTypes[NinjaTypes["c"] = 6] = "c";
    NinjaTypes[NinjaTypes["d"] = 7] = "d";
    NinjaTypes[NinjaTypes["e"] = 8] = "e";
    NinjaTypes[NinjaTypes["f"] = 9] = "f";
    NinjaTypes[NinjaTypes["g"] = 10] = "g";
    NinjaTypes[NinjaTypes["h"] = 11] = "h";
    NinjaTypes[NinjaTypes["i"] = 12] = "i";
    NinjaTypes[NinjaTypes["j"] = 13] = "j";
})(NinjaTypes || (NinjaTypes = {}));
console.log(NinjaTypes);
const myNinja = {
    name: `ryu`,
    age: 27,
    data: `afeard`
};
export {};
