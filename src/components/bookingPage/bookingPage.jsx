import './bookingPage.css';
import Header from '../header/header';

export default function BookingPage() {
  return (
    <>
      <Header />

      <main>
        <article className='booking'>
          <section className='inner'>
            <h1>Reserve a table:</h1>
          </section>
        </article>
      </main>
    </>
  )
}