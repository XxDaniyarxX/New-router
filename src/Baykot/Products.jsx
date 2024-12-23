export default function Products({item}) {
  return (
    <div style={{border: '1px solid black', width: '500px'}}>
      <h3>{item.brand}</h3>
      <h3>{item.rating}</h3>
      <h3>{item.description}</h3>
      <img width={200} src={item.logo} alt=""/>
    </div>
  )
}