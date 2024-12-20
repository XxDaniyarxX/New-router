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
      </ul>
    </div>
  )
}

export default Header
