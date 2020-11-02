import React, { useEffect, useState } from 'react';
import './assets/tailwind.output.css';

import { Header } from './views/global/components/Header';
import { TodoList } from './views/todo_list/TodoList';
import { ITodo } from './views/todo_list/components/Todo';

import { getTodos } from './views/todo_list/api/todo.api';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = async () => {
      const { data } = await getTodos();
      setTodos(data);
    };

    todos();
  }, []);
  return (
    <div className="ml-8">
      <Header />
      <TodoList todos={todos} />
    </div>
  );
}
const mockTodo: ITodo = {
  _id: '5f9764356949223d60196a44',
  creator: 'Randy Jones',
  creation_date: '2020-02-02T09:14:42.167Z',
  description: 'Norwegian contingency Industrial calculating Sausages orchid reboot',
  completed: false,
  last_updated: '2020-10-26T14:22:55.250Z',
  __v: 0,
};

// const todos: ITodo[] = [
//   mockTodo,
//   {
//     _id: '5f9764356949223d60196a48',
//     creator: 'Mrs. Louise Walter',
//     creation_date: '2020-01-04T18:06:31.797Z',
//     description: 'Incredible user Cambridgeshire port Card',
//     completed: true,
//     last_updated: '2020-10-26T11:02:52.060Z',
//     __v: 0,
//   },
// ];
export default App;
