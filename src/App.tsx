import React from 'react';
import './assets/tailwind.output.css';
import { Header } from './views/global/components/Header';
import { TodoList } from './views/todo_list/TodoList';
import { ITodo } from './views/todo_list/components/Todo';

function App() {
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

const todos: ITodo[] = [mockTodo];
export default App;
