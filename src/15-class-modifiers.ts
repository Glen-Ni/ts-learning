class Person {
  name: string;
  private age: number;
  protected gender: boolean;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.gender = true;
  }

  sayHi(msg: string): void {
    console.log(`I am ${this.name}, ${msg}`);
  }
}

const xiaoming = new Person('小明', 18);

// console.log(xiaoming.age); // 无法访问private
// console.log(xiaoming.gender); // 无法访问protected

class Student extends Person {
  constructor(name: string, age: number){
    super(name, age)
    console.log(this.gender); // protected 可以再子类中访问
    // console.log(this.age); // private 子类中也访问不到
  }
}

const xiaohong = new Student ('小红', 16);

// console.log(xiaohong.age); // 子类实例也无法访问private
// console.log(xiaohong.gender); // 子类实例也无法访问protected

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Animal{
  private constructor(){

  }
  static createAnimal() {
    return new Animal()
  }
}

// const ji = new Animal() // 无法实例化被private修饰contructor的class
const ji = Animal.createAnimal() // 但是可以静态方法开一个窗口
