import logo from '../../assets/logo.svg'
import Nav from '../nav/nav'
import './header.css'

export default function Header() {
  return (
    <header className='header'>
      <section className='headerImage'>
        <img src={logo} className="App-logo" alt="logo" />
      </section>

      <Nav />
    </header>
  )
}