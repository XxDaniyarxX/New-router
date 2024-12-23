import Products from './Products.jsx'

export default function ProductsList({products}) {
  return (
    <div style={{
      width: '2200px',
      textAlign: 'center',
      margin: '30px auto',
      gap: '40px',
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {
        products.map((item, index) => (
          <Products key={index} item={item}/>
        ))
      }
    </div>
  )
}