import './BookingForm.css';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

export default function BookingForm() {
  const [field1, setField1] = useState()
  return (
    <Formik>
      <Form>
        <section className='date'>
          <label htmlFor='res-date'>Choose date:</label>
          <Field type='date' id='res-date' name='res-date' placeholder={new Date().toLocaleDateString()} />
        </section>

        <section className='time'>
          <label htmlFor='res-time'>Choose time:</label>
          <select id='res-time' name='res-time'>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </section>

        <section className='guest-number'>
          <label htmlFor='guests'>Number of guests:</label>
          <Field type='number' min='0' max='5' id='guests' name='guests' placeholder={2} />
        </section>

        <section className='occasion'>
          <label htmlFor='occasion'>Occasion:</label>
          <select id='occasion' name='occasion'>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </section>
      </Form>
    </Formik>
  );
};