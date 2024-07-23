import React from 'react';
import Tag from './Tag';

const Card = ({ id, repolink, name, description, url, tags, license, onTagClick }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg flex flex-col">
      <div className="font-mono text-sm text-gray-400 mb-2">
        <a href={repolink} target="_blank" rel="noopener noreferrer">{id}</a>
      </div>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="mt-2 flex-grow">{description}</p>
      <a href={url} className="text-blue-500 mt-4 block" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      <div className="mt-4">
        {tags.map(tag => (
          <Tag key={tag} tag={tag} onClick={onTagClick} />
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">License: {license}</p>
    </div>
  );
};

export default Card;
