export {}

interface EatAndRun {
  eat (food: string ): void
  run (distance: number): void
}

interface Shit {
  shit (shi: string): void
}

class Human implements EatAndRun, Shit{
  eat(food: string): void {
    console.log('帅气的吃', food);
  }
  run(distance: number) {
    console.log('吃了跑了', distance);
  }
  shit(shi: string): void {
    console.log('人类拉出了', shi);
    
  }
}

class Dog implements EatAndRun{
  eat(food: string) {
    console.log('撕咬', food)
  }
  run(distance: number) {
    console.log('狂奔', distance);
  }
}

