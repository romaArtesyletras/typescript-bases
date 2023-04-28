class Person {

  public dog: string = "perro";
  private mom: string = "mama";
  protected some: string = "hija";

  constructor() {

  }

  showSomething() {
    console.log(`algo`);
  }
}

class Employee extends Person {

  //methods
  constructor(private readonly id: number, private name: string) {
    super();
    this.showInfo();
    this.id = 2; // it will not affect the value that comes first
    this.showSomething();
    
  }

  showInfo(): void {
    console.log(`name ${this.name} and id ${this.id}`)

    console.log(`to ${this.dog} and ${this.some}`)
  }
}

const emp = new Employee(1, "Romario");