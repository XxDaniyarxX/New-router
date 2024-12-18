import {products} from '../src/data/index.js'
import Card from '../src/components/Card/Card.jsx'
export default function About() {
  return (
     <div>
       {
         products.map(item => (
           <Card key={item.id} />
         ))
       }
     </div>
  )
}