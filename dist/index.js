"use strict";
const userName = "puto";
const age = 3;
// console.log(`Alguna vainita ${userName} y ${age}`);
let m = "hum";
let n = 5;
let b = true;
let arrN = [1, 2, 3];
let arrS = ["str", "tr", "ing"];
let arrA = [1, 2, "re", { "puto": "algo" }];
let arrTuple = ["re", 3, true];
let player = [
    [1, "hey"],
    [2, "heasdasdy"],
];
// unions
let some = "heyehasñd";
// enum
var Rols;
(function (Rols) {
    Rols[Rols["Some"] = 1] = "Some";
    Rols[Rols["Admin"] = 2] = "Admin";
    Rols[Rols["Father"] = 3] = "Father";
    Rols[Rols["Mom"] = 4] = "Mom";
    Rols[Rols["God"] = 5] = "God";
})(Rols || (Rols = {}));
console.log(Rols.God);
const otros = {
    Some: 1,
    Admin: 2,
    Father: 3,
    Mom: 4,
    God: "zsdsda"
};
console.log(otros.God);
someStuff();
function someStuff(userName = "estupendo", age = 2) {
    console.log(`Alguna vainita ${userName.toUpperCase()} y ${age}`);
}
console.log("el number: " + getNumber());
function getNumber() {
    return Math.floor(Math.random() * 100);
}
printPosition({ lat: 234234, lng: 12 });
function printPosition(position) {
    console.log(`Alguna vainita ${position.lat} y ${position.lng}`);
}
