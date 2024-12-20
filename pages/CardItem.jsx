import { useParams } from 'react-router-dom';
import { products } from '../src/data/index.js';

export default function CardItem() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));


  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{product.title}</h1>
      <img style={{ width: '300px', height: '400px', objectFit: 'cover' }} src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Discount: {product.discountedPrice}%</p>
      <p>Rating: {product.rating}</p>
      <p>Views: {product.viewCount}</p>
    </div>
  );
}
