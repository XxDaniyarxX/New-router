// src/Baykot.js
import { useState, useEffect } from 'react';
import baykot from './Baykot.js';
import ProductList from './ProductsList';

export default function Baykot() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const res = await baykot.get(`/api/v1/products/`);
      setProducts(res.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
