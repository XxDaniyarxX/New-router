import './Card.css'
import { Link } from 'react-router-dom';

export default function Card({data}) {

    console.log(data);

    const {image, title, price, discount, discountedPrice, id} = data
    
  return (
    <Link to={`/card-item/${id}`} className='card'>
      <img className='card-image' src={image} alt="" />
      <div className="card-content">
        <h4 style={{textDecoration: 'none'}}>{title}</h4>
        <p style={{textDecoration: 'none'}}>Цена: {price}$</p>
        <div style={{display: discount? "block":"none"}} className="count">Цена по скидке: {discountedPrice}</div>
      </div>
    </Link>
  )
}