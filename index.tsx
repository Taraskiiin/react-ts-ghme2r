import * as React from 'react';
import ReactDOM = require('react-dom');
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
