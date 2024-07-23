import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-700">
              Built by <a href="https://wvm.dev" className="text-green-500" target="_blank" rel="noopener noreferrer">WeaveVM</a>
            </p>
            <p className="text-gray-400 text-sm">
              exex.rs is not officially affiliated with Paradigm or the Reth team.
            </p>
          </div>
          <a href="https://github.com/weaveVM/exex.rs" className="text-gray-700" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
