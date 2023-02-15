import './bookingPage.css';
import Header from '../header/header';
import Form from '../BookingForm/BookingForm';

export default function BookingPage() {
  return (
    <>
      <Header />

      <main>
        <article className='booking'>
          <section className='inner'>
            <h1>Reserve a table:</h1>

            <Form />
          </section>
        </article>
      </main>
    </>
  )
}