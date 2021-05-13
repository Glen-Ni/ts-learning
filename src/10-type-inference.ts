export {};

let age = 18; // 隐式推断为 number
// let age = 'aaa' // 报错

let foo; // 隐式推断为any
foo = 18;
foo = 'aaa';
