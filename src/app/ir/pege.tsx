import Link from 'next/link';

type Todo = {
  title: string;
};

async function getData() {
  const res = await fetch('https://localhost:3000/api/todos');

  return res.json();
}

export default async function Page() {
  const todos: Todo[] = await getData();
  return (
    <>
      <h1>API fetching</h1>
      {todos.map((todo) => (
        <div key={todo.title}>{todo.title}</div>
      ))}
      <Link href={'/'}>Home</Link>
    </>
  );
}
