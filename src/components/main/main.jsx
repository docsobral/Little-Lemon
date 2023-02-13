import './main.css'
import hero from '../../assets/hero.png'

export default function Main() {
  return (
    <main>
      <article className='hero'>
        <section className='heroContent'>
          <h1 className='title'>
            Little Lemon
          </h1>

          <h2 className='subtitle'>
            Chicago
          </h2>

          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <section className='button'>
            <button href='https://www.google.com' target='_blank'>
              Reserve a table
            </button>
          </section>
        </section>

        <section className='heroImage'>
          <img
            src={hero}
            alt='Hero'
          />
        </section>
      </article>
    </main>
  )
}