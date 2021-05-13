export {};

const nums = [1, 2, 3, 4, 5];

const res = nums.find((i) => i > 0);

// const square = res * res // 不断言会报错

// 方法一
const num1 = res as number;
// 方法二
const num2 = <number>res // JSX中不能用