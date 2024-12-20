import {useState} from 'react'
import {useParams} from 'react-router-dom'
import {products} from '../data'

export default function CardItem() {

  const {id} = useParams()

  const findProduct = products.find((x) => x.id == id)

  const [image, setImage] = useState(findProduct?.image)

  return (
    <div style={{width: '500px', margin: '0 auto', textAlign: 'center', border: '1px solid black'}}>
       <h3 style={{color: 'red'}}>Card Item {id}</h3>
      <img width='100%' height={400} src={image} alt=""/>

      <div style={{border: '1px solid black', width: '500px', justifyContent: 'space-around', margin: '0 auto', display: 'flex',}}>
        {
          findProduct.images.map((image, index) => (
            <img onClick={() => setImage(image)} style={{
              width: '120px',
              height: '120px',
            }} src={image} key={index}/>
          ))
        }
      </div>
    </div>
  )
}