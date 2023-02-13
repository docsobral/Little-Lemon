import logo from '../../assets/logo.svg'
import './header.css'

export default function Header() {
  return (
    <header>
      <section className='headerImage'>
        <img src={logo} className="App-logo" alt="logo" />
      </section>

      <section className='headerNav'>
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </nav>
      </section>
    </header>
  )
}