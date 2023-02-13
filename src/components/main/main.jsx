import './main.css';
import hero from '../../assets/hero.png';
import salad from '../../assets/greek-salad.png';
import bruchetta from '../../assets/bruchetta.png';
import dessert from '../../assets/lemon-dessert.png';
import bike from '../../assets/bike.svg';
import avatar from '../../assets/avatar.png';
import star from '../../assets/filled-star.svg';
import outline from '../../assets/outline-star.svg'
import images from '../../assets/images.png'

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
                Order a delivery <img src={bike} />
              </button>
            </section>
          </section>
        </article>
      </main>

      <main className='testimonials'>
        <article className='section'>
          <h1 className='section-title'>
            Testimonials
          </h1>

          <section className='testimonials'>
            <section className='testimonial'>
              <section className='rating'>
                <img
                  src={star}
                />

                <img
                  src={star}
                />

                <img
                  src={star}
                />

                <img
                  src={star}
                />

                <img
                  src={star}
                />
              </section>

              <section className='avatar'>
                <section className='image'>
                  <img
                    src={avatar}
                  />
                </section>

                <section className='nameAndUsername'>
                  <h2>Sara Lopez</h2>
                  <h3>Sara72</h3>
                </section>
              </section>

              <section className='description'>
                <p>“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”</p>
              </section>
            </section>

            <section className='testimonial'>
              <section className='rating'>
                <img
                  src={star}
                />

                <img
                  src={star}
                />

                <img
                  src={star}
                />

                <img
                  src={star}
                />

                <img
                  src={outline}
                />
              </section>

              <section className='avatar'>
                <section className='image'>
                  <img
                    src={avatar}
                  />
                </section>

                <section className='nameAndUsername'>
                  <h2>Jon Do</h2>
                  <h3>Johnny_Utah</h3>
                </section>
              </section>

              <section className='description'>
                <p>“We had such a great time celebrating my grandmothers bitthday!”</p>
              </section>
            </section>

            <section className='testimonial'>
              <section className='rating'>
                <img
                  src={star}
                />

                <img
                  src={star}
                />

                <img
                  src={star}
                />

                <img
                  src={outline}
                />

                <img
                  src={outline}
                />
              </section>

              <section className='avatar'>
                <section className='image'>
                  <img
                    src={avatar}
                  />
                </section>

                <section className='nameAndUsername'>
                  <h2>David Sobral</h2>
                  <h3>dcsobral223</h3>
                </section>
              </section>

              <section className='description'>
                <p>Meh...</p>
              </section>
            </section>

            <section className='testimonial'>
              <section className='rating'>
                <img
                  src={star}
                />

                <img
                  src={star}
                />

                <img
                  src={star}
                />

                <img
                  src={outline}
                />

                <img
                  src={outline}
                />
              </section>

              <section className='avatar'>
                <section className='image'>
                  <img
                    src={avatar}
                  />
                </section>

                <section className='nameAndUsername'>
                  <h2>Tuyá Ewa</h2>
                  <h3>ttattuya</h3>
                </section>
              </section>

              <section className='description'>
                <p>This is literally the best food that I have ever tasted in my whole life and, possibly, in all my other previous lifes.</p>
              </section>
            </section>
          </section>
        </article>
      </main>

      <main className='restaurantDescription'>
        <article className='restaurantDescription'>
          <section className='text'>
            <h1>
              Little Lemon
            </h1>

            <h2>Chicago</h2>

            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          </section>

          <section className='images'>
            <img
              src={images}
            />
          </section>
        </article>
      </main>
    </>
  )
}