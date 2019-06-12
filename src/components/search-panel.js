import React from 'react';

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStule = {
    fontSize: '20px',
  };
  return <input style={searchStule} placeholder={searchText} />;
};

export default SearchPanel;
