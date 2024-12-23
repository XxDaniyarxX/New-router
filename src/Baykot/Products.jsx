export default function Products({item}) {
  return (
    <div style={{border: '1px solid yellow', width: '500px'}}>
      <h3 style={{color: 'red'}}>{item.brand}</h3>
      <br/>
      <h3 style={{color: 'blue'}}>{item.rating}</h3>
      <br/>
      <h3 style={{color: 'aqua'}}>{item.description}</h3>
      <br/>
      <img width={200} src={item.logo} alt=""/>
    </div>
  )
}