// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '12px',
        width: '100%',
        maxWidth: '400px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        marginBottom: '20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    />
  );
};

export default SearchBar;
