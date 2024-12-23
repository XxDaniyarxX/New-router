import {useEffect, useState} from 'react'
import axios from 'axios'
import {products} from '../data/index.js'
import {data} from 'react-router-dom'
import './Item.css'
export default function Contact() {
   const [name, setName] = useState([]);
    const api = 'https://dummyjson.com/products'
   async function getProducts() {
      const response = await axios.get(api)
     console.log(response.data)
     setName(response.data.products)
   }

  return (
    <div>
      <button onClick={() => getProducts()}>render</button>
      <button>111</button>
      <button></button>
      {name.map((item, key) => (
        <div key={key}>
           <h3>{item.brand}</h3>
           <h2>{item.category}</h2>
        </div>
      ))}
    </div>
  )


}