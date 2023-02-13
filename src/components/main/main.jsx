import './main.css'
import hero from '../../assets/hero.png'
import salad from '../../assets/greek-salad.png'
import bruchetta from '../../assets/bruchetta.png'
import dessert from '../../assets/lemon-dessert.png'
import bike from '../../assets/bike.svg'

export default function Main() {
  return (
    <>
      <main className='hero'>
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

      <main className='specials'>
        <article className='specials'>
          <header>
            <h1 className='title'>
              Specials
            </h1>

            <section className='button'>
              <button>
                Online Menu
              </button>
            </section>
          </header>
        </article>

        <article className='specialCards'>
          <section className='special'>
            <section className='cardImage'>
              <img
                src={salad}
              />
            </section>

            <section className='description'>
              <section className="nameAndPrice">
                <h1 className='name'>
                  Greek Salad
                </h1>

                <p className="price">
                  $12.99
                </p>
              </section>

              <p className='description'>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
              </p>

              <button className='order'>
                Order a delivery <img src={bike} />
              </button>
            </section>
          </section>

          <section className='special'>
            <section className='cardImage'>
              <img
                src={bruchetta}
              />
            </section>

            <section className='description'>
              <section className="nameAndPrice">
                <h1 className='name'>
                  Bruchetta
                </h1>

                <p className="price">
                  $5.99
                </p>
              </section>

              <p className='description'>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                <br />
                <br />
              </p>

              <button className='order'>
                Order a delivery <img src={bike} />
              </button>
            </section>
          </section>

          <section className='special'>
            <section className='cardImage'>
              <img
                src={dessert}
              />
            </section>

            <section className='description'>
              <section className="nameAndPrice">
                <h1 className='name'>
                  Lemon Dessert
                </h1>

                <p className="price">
                  $5.00
                </p>
              </section>

              <p className='description'>
                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                <br />
                <br />
              </p>

              <button className='order'>
                Order a delivery <img src={bike} />
              </button>
            </section>
          </section>
        </article>
      </main>
    </>
  )
}