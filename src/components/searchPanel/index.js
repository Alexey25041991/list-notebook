import React from 'react';

import './style.css';

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStule = {
    fontSize: '20px',
    width: '100%',
  };
  return (
    <div className="search-input-panel">
      <input className="search-input" style={searchStule} placeholder={searchText} />
    </div>
  );
};

export default SearchPanel;
