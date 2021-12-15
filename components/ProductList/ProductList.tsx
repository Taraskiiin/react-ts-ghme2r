import * as React from 'react';
import { useState, useEffect } from 'react';

import Product from '../Product/Product';
import { IProduct } from '../Product/Product';

function ProductList() {
  const [productList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('https://demo2817758.mockable.io/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProductList(data.products);
      });
  }, []);
  console.log(productList);
  return (
    <div className="wrapper">
      <ul>{productList.length && <Product />}</ul>
    </div>
  );
}

export default ProductList;
