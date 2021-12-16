import * as React from 'react';
import { useState, useEffect } from 'react';

import Product from '../Product/Product';
import { IProduct } from '../Product/Product';

import './productlist.css';

interface IProductList {
  search: string;
}

function ProductList({ search }) {
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

  const filterBySearch = productList.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="wrapper">
      {filterBySearch &&
        filterBySearch.map((el: IProduct) => <Product key={el.asin} {...el} />)}
    </div>
  );
}

export default ProductList;
