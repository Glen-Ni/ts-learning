export {};

// const status = {
//   todos: 1,
//   completed: 2,
//   deleted: 3
// }

const enum TodoStatus {
  todo = 1,
  completed = 2,
  deleted = 3,
}

// 也可以是字符串枚举
//  

const todo = {
  tag: '日常',
  content: '吃饭睡觉打豆豆',
  status: TodoStatus.completed
}

// TodoStatus[1] // 索引访问，enum前加const改为常量枚举就不能用索引访问了