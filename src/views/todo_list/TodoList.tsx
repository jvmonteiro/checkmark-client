import React, { useState } from 'react';
import { Todo, ITodo } from './components/Todo';
import { Card } from '../global/components/Card';

export interface ITodoList {
  todos: ITodo[];
}

const TodoList = ({ todos }: ITodoList) => {
  const [width, setWidth] = useState('max-w-lg');

  return (
    <div>
      <h2 className="md:text-2xl font-bold mb-4">Tasks</h2>
      <div>
        {todos.length &&
          todos.map((todo: ITodo) => {
            return (
              <Card key={todo._id} width={width}>
                <Todo todo={todo} setWidth={setWidth} />
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export { TodoList };
