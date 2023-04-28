import { Animal } from "./animal";

const userName = "puto";
const age = 3;

// console.log(`Alguna vainita ${userName} y ${age}`);

let m:string = "hum";
let n:number = 5;
let b:boolean = true;

let arrN: number[] = [1,2,3];
let arrS: string[] = ["str","tr","ing"];

let arrA: any[] = [1,2,"re",{"puto": "algo"}]

let arrTuple: [string, number, boolean] = ["re", 3, true];

let player: [number, string][] = [
  [1, "hey"],
  [2, "heasdasdy"],
]


// unions

let some: string | number | null = "heyehasñd";


// enum

enum Rols {
  Some = 1,
  Admin = 2,
  Father = 3,
  Mom = 4,
  God = 5
}

console.log(Rols.God);

const otros = {
  Some: 1,
  Admin: 2,
  Father: 3,
  Mom: 4,
  God: "zsdsda"
}

console.log(otros.God);

someStuff();

function someStuff(userName:string = "estupendo", age:number = 2):void {
  console.log(`Alguna vainita ${userName.toUpperCase()} y ${age}`);
}

console.log("el number: "+getNumber());
function getNumber():number {
  return Math.floor(Math.random() * 100);
}

printPosition({lat: 234234, lng:12});

function printPosition(position: {lat: number, lng?: number}):void {
  console.log(`Alguna vainita ${position.lat} y ${position.lng}`);
}



let newAnimal: Animal[] = [{
  name: "ROMA",
  array: [1,2],
  method: (num) => {
    console.log(num);
  }
},{
  name: "HEY",
  array: [1,2,3]
}]

console.log(newAnimal[0].method);