export {}

abstract class Animal {
  eat(food: string): void {
    console.log('瞎比吃', food);
  }
  abstract run (distance: number): void // 规定子类必须有run
}

class Dog extends Animal {
  run(distance: number): void {
    console.log('四脚爬行', distance);
  }
}

const 旺财 = new Dog()
旺财.eat('屎')
旺财.run(111)

// const aaa = new Animal() // 抽象类不能new出来
