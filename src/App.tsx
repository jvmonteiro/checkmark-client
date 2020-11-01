import React from 'react';
import logo from './logo.svg';
import './assets/tailwind.output.css';
import { Header } from './views/global/components/Header';
import { Todo } from './views/todo_list/components/Todo';
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
const mockTodo = {
  _id: '5f9764356949223d60196a44',
  creator: 'Randy Jones',
  creation_date: '2020-02-02T09:14:42.167Z',
  description: 'Norwegian contingency Industrial calculating Sausages orchid reboot',
  completed: false,
  last_updated: '2020-10-26T14:22:55.250Z',
  __v: 0,
};
export default App;
