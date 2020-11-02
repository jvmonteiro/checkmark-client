import * as React from 'react';

export interface CardProps {
  children: React.ReactNode;
}
const Card = ({ children }: CardProps) => {
  return (
    <div
      className={
        'border-gray-200 border-2 border-solid border-opacity-75 rounded-md shadow-md max-w-md px-4 py-2 mb-6'
      }
    >
      {children}
    </div>
  );
};

export { Card };
