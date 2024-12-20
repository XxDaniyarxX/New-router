import { products } from '../src/data/index.js';
import Card from '../src/components/Card/Card.jsx';

export default function About() {
  return (
    <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', width: '1000px', margin: '0 auto' }}>
      {
        products.map(item => (
          <Card key={item.id} data={item} />
        ))
      }
    </div>
  );
}
