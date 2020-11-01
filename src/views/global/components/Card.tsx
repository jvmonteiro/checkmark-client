import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  width: string;
}
const Card = ({ children, width }: CardProps) => {
  console.log(width);
  return (
    <div
      className={
        'rounded-md shadow-xl max-w-lg px-4 py-2 transition-width duration-200 ease-in-out ' + width
      }
    >
      {children}
    </div>
  );
};

export { Card };
