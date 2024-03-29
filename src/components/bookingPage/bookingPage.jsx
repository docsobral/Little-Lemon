import './bookingPage.css';
import Header from '../header/header';
import Form from '../BookingForm/BookingForm';
import Footer from '../footer/footer';
import About from '../about/about';

export default function BookingPage(props) {
  return (
    <>
      <Header />

      <main>
        <article className='booking'>
          <section className='inner'>
            <h1>Reserve a table:</h1>

            <Form
              dateState={props.dateState}
              timeState={props.timeState}
              numberState={props.numberState}
              occasionState={props.occasionState}
              availableTimes={props.availableTimes}
            />
          </section>
        </article>

        <About />
      </main>

      <Footer />
    </>
  )
}