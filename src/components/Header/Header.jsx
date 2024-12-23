import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div>
      <ul className='header'>
        <li>
          <Link to="/" style={{textDecoration: 'none', color: 'red'}}>Home</Link>
        </li>
        <li>
          <Link to="/contact" style={{textDecoration: 'none', color: 'red'}}>Contact</Link>
        </li>
        <li>
          <Link to="/about" style={{textDecoration: 'none', color: 'red'}}>About</Link>
        </li>
        <li>
          <Link to="/service" style={{textDecoration: 'none', color: 'red'}}>Service</Link>
        </li>
        <li>
          <Link to="/baykot" style={{textDecoration: 'none', color: 'red'}}>Baykot</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
