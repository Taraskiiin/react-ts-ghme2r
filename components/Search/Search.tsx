import * as React from 'react';

import './search.css';

interface ISearchProps {
  setSearch: () => void;
}

const SearchBlock: React.FC<ISearchProps> = ({ setSearch }) => {
  return (
    <input
      className="search-input"
      type="search"
      id="site-search"
      name="q"
      aria-label="Search through site content"
      placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBlock;
