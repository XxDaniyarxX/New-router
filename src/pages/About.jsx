import { products } from '../data'
import Card from '../components/Card/Card'

export default function About() {
  return (
    <div style={{
      width: "1500px",
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      margin: "0 auto",
    }}>
      {
        products.map((product)=>(
          <Card key={product.id} data={product}/>
        ))
      }
    </div>
  )
}