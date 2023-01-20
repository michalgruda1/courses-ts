import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, completed, title);
});

const logTodo = (id: number, completed: boolean, title: string) => {
  console.log(`
        The todo with ${id}
        has a title with title: ${title}
        is it completed: ${completed}
    `);
};
