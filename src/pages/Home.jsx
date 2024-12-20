import {users} from '../data'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      margin: '0 auto',
      width: '900px',
      textAlign: 'center',
      gap: '40px',
      marginTop: '50px',
    }}>
      {
        users.map((user) => (
          <Link to={`/userinfo/${user.id}`} key={user.id} style={{
            border: '3px solid black',
            textDecoration: 'none',
            paddingTop: '25px',
            width: '200px',
            height: '100px',
            color: 'black',
          }}>
            <h4>Имя: {user.name}</h4>
            <span>Возраст: {user.age}</span>
          </Link>
        ))
      }
    </div>
  )
}