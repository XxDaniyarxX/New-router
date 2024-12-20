import { useParams } from 'react-router-dom'
import { users } from '../data'

function UserInfo() {
    const {id} = useParams()

    const findUser = users.find((x)=> x.id == id)
  return (
    <div>
      User Info {id}

      {findUser.name}
    </div>
  )
}

// product info, прошлое дз продолжить

export default UserInfo
