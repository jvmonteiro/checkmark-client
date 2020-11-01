import * as React from 'react';
import { FiGithub } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="mb-16">
      <nav className="flex flex-row items-baseline py-4">
        <div className="mr-32 text-3xl">Checkmark</div>
        <a
          className="transition-transform duration-100 ease-in transform hover:scale-125"
          href="https://github.com/jvmonteiro/checkmark-client"
        >
          <FiGithub />
        </a>
      </nav>
    </header>
  );
};

export { Header };
