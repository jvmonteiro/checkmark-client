import * as React from 'react';

export interface TodoProps {
  _id: string;
  creator: string;
  creation_date: string;
  description: string;
  completed: string;
  last_updated: string;
}

const Todo = (todo: TodoProps) => {
  return (
    <div>
      <h3>
        Created by {todo.creator} on {todo.creation_date}.
      </h3>
      <p>Last update: {todo.last_updated}</p>
      <input type="checkbox">{todo.description}</input>
    </div>
  );
};

export { Todo };
