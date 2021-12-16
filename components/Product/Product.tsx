import * as React from 'react';

import './product.css';

export interface IProduct {
  in_potential_products: boolean;
  asin: string;
  price: number;
  weight: number;
  updated_at: number;
  name: string;
  shipping_weight: null;
  domain: string;
  votes_count: number;
  daily_cashflow: number;
  currency: string;
  img: string;
  daily_sales: string;
  stars: number;
  bsr_value: number;
  brand_class: null;
  size: number[];
  link: string;
  bsr_category: string;
  brand: string;
}

export interface IProductProps {
  data: IProduct;
}

const Product: React.FC<IProductProps> = (data) => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={`${data.img}`} />
        <h3>{data.name}</h3>
      </div>
      <div className="card-bottom">
        <p className="price">Price:&nbsp;{data.price}</p>
        <p className="brand">Brand:&nbsp;{data.brand}</p>
        <p className="stars">Stars:&nbsp;{data.stars}</p>
        <a className="buy-btn" href={`${data.link}`}>
          Buy&nbsp;now
        </a>
      </div>
    </div>
  );
};

export default Product;
