import React from 'react';
import './style.css';

const ItemStatusFilter = () => {
  return (
    <div className="btn-group item-status-filter">
      <button type="botton" className="btn btn-info">
        All
      </button>
      <button type="botton" className="btn btn-outline-secondary">
        Active
      </button>
      <button type="botton" className="btn btn-outline-secondary">
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
