import * as React from 'react';
import { useState, useEffect } from 'react';

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

function Product() {
  return <li></li>
}

export default Product;
