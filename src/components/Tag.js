import React from 'react';

const Tag = ({ tag, onClick }) => {
  const tagColors = {
    block: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    transaction: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
    node: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    memory: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100',
    poc: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100',
    etl: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    indexer: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
    bridge: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100',
    rollup: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
    ipc: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100',
    'data-serialization': 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-100',
    arweave: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100',
    cloud: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100',
    'smart-contracts': 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-100',
    'paradigm-repo': 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-100',
    db: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100',
  };

  return (
    <span 
      className={`inline-block px-3 py-1 my-1 rounded-full text-sm font-semibold mr-2 cursor-pointer ${tagColors[tag] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'}`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </span>
  );
};

export default Tag;
