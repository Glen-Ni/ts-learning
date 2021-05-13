export {};

class Person {
  name: string;
  age: number;
  private readonly gender: boolean = true;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.gender = false;
  }

  sayHi(msg: string): void {
    console.log(`I am ${this.name}, ${msg}`);
  }

  // setGender(bool: boolean):void {
  //   this.gender = bool;
  // }

  getGender(bool: boolean):void {
    console.log(this.gender);
  }
}

const xx = new Person('aa', 14);

