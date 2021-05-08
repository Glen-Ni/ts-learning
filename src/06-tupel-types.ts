export {};

const a: [number, string] = [11, 'rua'];

const [c, d] = a;

// object的entries方法获取的就是元组
Object.entries({
  foo: 123,
  bar: 456
});
