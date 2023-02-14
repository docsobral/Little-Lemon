import images from '../../assets/images.png';

export default function About() {
  return (
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
            alt="Images"
          />
        </section>
      </article>
    </main>
  )
}