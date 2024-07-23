import React, { useState } from 'react';
import Card from './Card';
import FilterTag from './FilterTag';

const CardGrid = ({ exexes }) => {
  const [activeFilters, setActiveFilters] = useState([]);

  const handleTagClick = (tag) => {
    if (!activeFilters.includes(tag)) {
      setActiveFilters([...activeFilters, tag]);
    }
  };

  const handleTagRemove = (tag) => {
    setActiveFilters(activeFilters.filter(activeTag => activeTag !== tag));
  };

  const filteredExexes = activeFilters.length > 0
    ? exexes.filter(exex => activeFilters.every(filter => exex.tags.includes(filter)))
    : exexes;

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-900">
      <div className="mb-4">
        {activeFilters.map(tag => (
          <FilterTag key={tag} tag={tag} onRemove={handleTagRemove} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExexes.map(exex => (
          <Card key={exex.name} {...exex} onTagClick={handleTagClick} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
