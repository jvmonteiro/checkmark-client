import * as React from 'react';
import { FiGithub } from 'react-icons/fi';

const Header = () => {
  return (
    <header>
      <nav className="flex flex-row items-baseline py-4">
        <div className="mr-32 ml-8  text-3xl">Checkmark</div>
        <a className="hover:underline" href="https://github.com/jvmonteiro/checkmark-client">
          <FiGithub />
        </a>
      </nav>
    </header>
  );
};

export { Header };
