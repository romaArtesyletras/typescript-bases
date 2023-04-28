"use strict";
class Person {
    constructor() {
        this.dog = "perro";
        this.mom = "mama";
        this.some = "hija";
    }
    showSomething() {
        console.log(`algo`);
    }
}
class Employee extends Person {
    //methods
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
        this.showInfo();
        this.id = 2; // it will not affect the value that comes first
        this.showSomething();
    }
    showInfo() {
        console.log(`name ${this.name} and id ${this.id}`);
        console.log(`to ${this.dog} and ${this.some}`);
    }
}
const emp = new Employee(1, "Romario");
