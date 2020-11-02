import React from 'react';
import { Todo, ITodo } from './components/Todo';
import { Card } from '../global/components/Card';

export interface ITodoList {
  todos: ITodo[];
}

const TodoList = ({ todos }: ITodoList) => {
  return (
    <>
      <h2 className="md:text-2xl font-bold mb-4">Tasks</h2>
      <>
        {todos.length &&
          todos.map((todo: ITodo) => {
            return (
              <Card key={todo._id}>
                <Todo todo={todo} />
              </Card>
            );
          })}
      </>
    </>
  );
};

export { TodoList };
