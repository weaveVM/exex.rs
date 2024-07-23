import React from 'react';

const FilterTag = ({ tag, onRemove }) => {
  const tagColors = {
    block: 'bg-green-100 text-green-800',
    transaction: 'bg-purple-100 text-purple-800',
    node: 'bg-yellow-100 text-yellow-800',
    memory: 'bg-pink-100 text-pink-800',
    poc: 'bg-indigo-100 text-indigo-800',
    etl: 'bg-blue-100 text-blue-800',
    indexer: 'bg-red-100 text-red-800',
    bridge: 'bg-teal-100 text-teal-800',
    rollup: 'bg-orange-100 text-orange-800',
    ipc: 'bg-cyan-100 text-cyan-800',
    'data-serialization': 'bg-lime-100 text-lime-800',
    arweave: 'bg-gray-100 text-gray-800',
    cloud: 'bg-sky-100 text-sky-800',
    'smart-contracts': 'bg-rose-100 text-rose-800',
    'paradigm-repo': 'bg-fuchsia-100 text-fuchsia-800',
    db: 'bg-amber-100 text-amber-800',
  };

  return (
    <span 
      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mr-2 cursor-pointer ${tagColors[tag] || 'bg-gray-100 text-gray-800'}`}
    >
      {tag} <button onClick={() => onRemove(tag)} className="ml-1 text-red-500">x</button>
    </span>
  );
};

export default FilterTag;
