import './footer.css';
import image from '../../assets/image.png'

export default function Footer() {
  return (
    <footer>
      <article className="footer">
        <section className="image">
          <img
            src={image}
          />
        </section>

        <section className="navs">
          <section className="nav">
            <b>Navigation</b>

            <nav className="one">
              <li>&nbsp;</li>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </nav>
          </section>

          <section className="nav">
            <b>Contact</b>

            <nav className="two">
              <li>&nbsp;</li>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </nav>
          </section>

          <section className="nav">
            <b>Social Media Links</b>

            <nav className="three">
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