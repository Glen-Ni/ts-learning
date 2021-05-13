export {};

interface Post {
  title: string;
  content: string;
}

function printPost (post: Post) {
  console.log(post.title, post.content)
}

printPost({
  title: 'Hello',
  content: 'ts'
})