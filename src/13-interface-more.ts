export {};

interface Post {
  title: string;
  content: string;
  subtitle?: string; // 可选属性
  readonly summary: string; // 只读属性
}

function printPost (post: Post) {
  console.log(post.title, post.content)
}

printPost({
  title: 'Hello',
  content: 'ts',
  summary: 'aaaaaa'
})

// ----------------------------
interface Cache {
  [xxx: string]: string // 动态成员
}

const cache:Cache = {}

cache.name = 'aaa'