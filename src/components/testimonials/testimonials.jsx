import Rating from '../../components/star-rating/star-rating';
import avatar from '../../assets/avatar.png';

export default function Testimonials() {
  return (
    <main className='testimonials'>
        <article className='section'>
          <h1 className='section-title'>
            Testimonials
          </h1>

          <section className='testimonials'>
            <section className='testimonial'>
              <Rating rating={5} />

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
                <p>“Seriously cannot stop thinking about the Turkish Mac n' Cheese!!”</p>
              </section>
            </section>

            <section className='testimonial'>
              <Rating rating={4} />

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
              <Rating rating={3} />

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
                <p>Sure its pretty good</p>
              </section>
            </section>

            <section className='testimonial'>
              <Rating rating={5} />

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
  )
}