export {}

function createNumberArr (length: number, value: number): number[] {
  const arr = Array<number>(length).fill(value)
  return arr;
} // 只能创建数字类型的数组

function createStringArr (length: number, value: number): number[] {
  const arr = Array<number>(length).fill(value)
  return arr;
} // 只能创建数字类型的数组

function createArr<T> (length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value);
  return arr
}

const arr1 = createArr<number>(3, 100);
const arr2 = createArr<string>(3, 'rua');