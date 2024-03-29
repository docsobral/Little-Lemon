import salad from '../../assets/greek-salad.png';
import bruchetta from '../../assets/bruchetta.png';
import dessert from '../../assets/lemon-dessert.png';
import bike from '../../assets/bike.svg';

import Button from 'react-bootstrap/Button';

export default function Specials() {
  return (
    <main className='specials' id='specials'>
      <article className='specials'>
        <header>
          <h1 className='title'>
            Specials
          </h1>

          <section className='button'>
            <Button href='https://www.google.com' target='_blank'>
              Online Menu
            </Button>
          </section>
        </header>
      </article>

      <article className='specialCards'>
        <section className='special'>
          <section className='cardImage'>
            <img
              src={salad}
              alt="Salad"
            />
          </section>

          <section className='description'>
            <section className='nameAndPrice'>
              <h1 className='name'>
                Greek Salad
              </h1>

              <p className='price'>
                $12.99
              </p>
            </section>

            <p className='description'>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>

            <button className='order'>
              Order a delivery <img src={bike} alt="icon" />
            </button>
          </section>
        </section>

        <section className='special'>
          <section className='cardImage'>
            <img
              src={bruchetta}
              alt="Bruchetta"
            />
          </section>

          <section className='description'>
            <section className='nameAndPrice'>
              <h1 className='name'>
                Bruchetta
              </h1>

              <p className='price'>
                $5.99
              </p>
            </section>

            <p className='description'>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
              <br />
              <br />
            </p>

            <button className='order'>
              Order a delivery <img src={bike} alt="icon" />
            </button>
          </section>
        </section>

        <section className='special'>
          <section className='cardImage'>
            <img
              src={dessert}
              alt="Dessert"
            />
          </section>

          <section className='description'>
            <section className='nameAndPrice'>
              <h1 className='name'>
                Lemon Dessert
              </h1>

              <p className='price'>
                $5.00
              </p>
            </section>

            <p className='description'>
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
              <br />
              <br />
            </p>

            <button className='order'>
              Order a delivery <img src={bike} alt="icon" />
            </button>
          </section>
        </section>
      </article>
    </main>
  )
}