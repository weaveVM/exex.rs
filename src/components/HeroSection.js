import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">Reth Execution Extensions</h1>
        <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">An open source directory of Reth ExExes</p>
        <div className="mt-6">
          <a href="https://reth.rs/developers/exex/exex.html" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-600 text-white py-2 px-4 rounded mr-4">Learn About ExExes</button>
          </a>
          <a href="https://github.com/weaveVM/exex.rs?tab=readme-ov-file#add-an-exex-object" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-500 text-white py-2 px-4 rounded">Submit an ExEx</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
