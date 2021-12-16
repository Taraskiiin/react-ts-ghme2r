import * as React from 'react';
import ReactDOM = require('react-dom');
import ProductList from './components/ProductList/ProductList';
import Search from './components/Search/Search';

import { useState } from 'react';

function App() {
  const [search, setSearch] = useState<string>('');
  console.log(search);
  return (
    <div>
      <Search setSearch={setSearch} />
      <ProductList search={search} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
