export {}

const arr1: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];

function sum(...args: number[]) {
  return args.reduce((prev,now) => prev + now, 0)
}

sum(...arr2);