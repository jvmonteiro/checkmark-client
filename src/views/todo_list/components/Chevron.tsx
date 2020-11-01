import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export interface ChevronProps {
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}
const Chevron = ({ isSelected, setIsSelected }: ChevronProps) => {
  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className="transition-transform duration-75 ease-in transform hover:scale-125"
    >
      {isSelected ? <FiChevronUp /> : <FiChevronDown />}
    </div>
  );
};

export { Chevron };
