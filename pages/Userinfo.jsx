import {useParams} from 'react-router-dom'
import {user} from '../src/data/index.js'
import '../src/App.css'

export default function Userinfo() {
  const {id} = useParams()
  const findUser = user.find((x) => x.id === parseInt(id))

  return (
    <div>
      <h4 className='h4-info'> User-info {id}</h4>

      {findUser ? (

        <div className='user-info-container'>
          <p>Имя: {findUser.name}</p>
          <p>Возраст: {findUser.age}</p>
        </div>

      ) : ('')}
    </div>
  )
}
