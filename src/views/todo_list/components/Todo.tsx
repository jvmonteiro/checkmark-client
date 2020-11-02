import React, { useLayoutEffect, useState } from 'react';
import { Chevron } from './Chevron';
import { ISOToHuman } from '../../global/utils/date';

export interface ITodo {
  _id: string;
  creator: string;
  description: string;
  completed: boolean;
  creation_date: string;
  last_updated: string;
  __v: number;
}

export interface TodoProps {
  todo: ITodo;
}

const Todo = ({ todo }: TodoProps) => {
  const [completed, setCompleted] = useState(todo.completed);
  const [isSelected, setIsSelected] = useState(false);

  const { creation_date, last_updated } = todo;
  const [fmtCreation, fmtLastUpd] = [ISOToHuman(creation_date), ISOToHuman(last_updated)];

  let config = {
    striketrough: completed ? 'line-through text-gray-700 opacity-50' : '',
    truncate: isSelected ? 'break-normal break-words' : 'truncate',
  };

  // Show additional info when dropdown is selected.
  const additionalInfo = isSelected ? (
    <div className="text-xs opacity-75 mt-4">
      <p>
        Created by <strong>{todo.creator}</strong> on {fmtCreation}.
      </p>
      <p>Last updated on {fmtLastUpd}.</p>
    </div>
  ) : (
    ''
  );

  return (
    <>
      <div className="flex flex-row items-baseline">
        <input
          type="checkbox"
          id={todo._id}
          checked={completed}
          onChange={() => setCompleted(!completed)}
          className="mr-4"
        />
        <label
          htmlFor={todo._id}
          className={'font-bold mr-auto ' + config.truncate + ' ' + config.striketrough}
        >
          {todo.description}
        </label>
        <Chevron isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
      {additionalInfo}
    </>
  );
};

export { Todo };
