import './footer.css';
import image from '../../assets/image.png'

export default function Footer() {
  return (
    <footer>
      <article className='footer'>
        <section className='image'>
          <img
            src={image}
            alt='Footer img'
          />
        </section>

        <section className='navs'>
          <section className='nav'>
            <b>Navigation</b>

            <nav className='one'>
              <li>&nbsp;</li>
              <li><a href='localhost:3000' style={{color: 'white', textDecoration: 'none'}}>Home</a></li>
              <li><a href='#about' style={{color: 'white', textDecoration: 'none'}}>About</a></li>
              <li><a href='#specials' style={{color: 'white', textDecoration: 'none'}}>Menu</a></li>
              <li><a href='#hero' style={{color: 'white', textDecoration: 'none'}}>Reservations</a></li>
              <li><a href='#specials' style={{color: 'white', textDecoration: 'none'}}>Order Online</a></li>
              <li><a href='localhost:3000' style={{color: 'white', textDecoration: 'none'}}>Login</a></li>
            </nav>
          </section>

          <section className='nav'>
            <b>Contact</b>

            <nav className='two'>
              <li>&nbsp;</li>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </nav>
          </section>

          <section className='nav'>
            <b>Social Media Links</b>

            <nav className='three'>
              <li>&nbsp;</li>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </nav>
          </section>
        </section>
      </article>
    </footer>
  )
}