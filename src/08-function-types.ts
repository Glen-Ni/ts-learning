export {};

// 函数申明
function func1(a: number, b: number, ...rest: number[]): string {
  return 'func1';
}

function func2(a: number, b?: number): string {
  return 'func1';
}
func1(11,22);
func2(11);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 函数表达式
const func3: (a: number) => string = function(a: number): string {
  return 'aaa'
}