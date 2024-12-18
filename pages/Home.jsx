import {user} from '../src/data/index.js'
import {Link} from 'react-router-dom'
import '../src/App.css'
export default function Home() {
  return (
    <div>
      <h3 style={{width: '100px', margin: '45px auto'}} className='rainbow-text'>Home page</h3>
      <div className='Block'>
        {
          user.map((item) => (
            <div key={item.id} className='Home'>
              <Link to={`/userinfo/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
                <h3 className='rainbow-text'>Имя: {item.name}</h3>
                <h3 className='rainbow-text'>Возраст: {item.age}</h3>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
