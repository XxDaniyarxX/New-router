import axios from 'axios';
import {useState, useEffect} from 'react'
export default function Postman() {
  const [postman, setPostman] = useState([]);
  const API = 'https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/products'
  function Post() {

    async function getProducts() {
      try {
        const res = await axios.get(API)
        setPostman(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
    getProducts()

    }, [])
  }
  Post()
  return (
    <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap', width: '1800px', margin: '40px auto',}}>
      {
        postman.map((item) => (
          <div key={item.id} style={{textAlign: 'center', border: '1px solid black', height: '500px', width: '400px', }}>
            <img width='100%' height={350} src={item.image} alt=""/>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.brand}</p>
            <p>{item.description}</p>
            <p>{item.discount}</p>
          </div>
        ))
      }
    </div>
  )
}
