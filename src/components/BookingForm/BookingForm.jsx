import { useContext, useEffect, useState } from 'react';
import { BookingContext } from '../main/main';
import { Navigate } from 'react-router-dom';
import './BookingForm.css';

export default function BookingForm(props) {
  const { date, setDate, time, setTime, number, setNumber, occasion, setOccasion, availableTimes, submitForm, response } = useContext(BookingContext);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState(undefined);
  const [blur, setBlur] = useState(false);

  const chooseDate = e => {
    setDate(e.target.value);
  };

  const chooseTime = e => {
    setTime(e.target.value);
  };

  const chooseNumber = e => {
    setNumber(e.target.value);
  };

  const chooseOccasion = e => {
    setOccasion(e.target.value);
  };

  useEffect(() => {
    const pickMonth = new Date(date).getMonth();
    const thisMonth = new Date().getMonth();
    const pickYear = new Date(date).getFullYear();
    const thisYear = new Date().getFullYear();

    if (blur && (pickMonth !== thisMonth || pickYear !== thisYear)) {
      setDisabled(true);
      setMessage('Must pick a date this month and this year')
    } else {
      setDisabled(false);
      setMessage(undefined);
    }
  }, [date])

  return (
    <form onSubmit={submitForm}>
      <section className='date'>
        <label htmlFor='res-date'>Choose date:</label>
        <input type='date' id='res-date' name='res-date' value={date} onChange={chooseDate} onBlur={() => setBlur(true)} />
      </section>

      <section className='time'>
        <label htmlFor='res-time'>Choose time:</label>
        <select id='res-time' name='res-time' value={time} onChange={chooseTime}>
          {availableTimes}
        </select>
      </section>

      <section className='guest-number'>
        <label htmlFor='guests'>Number of guests:</label>
        <input type='number' min='1' max='5' id='guests' name='guests' value={number} onChange={chooseNumber} />
      </section>

      <section className='occasion'>
        <label htmlFor='occasion'>Occasion:</label>
        <select id='occasion' name='occasion' value={occasion} onChange={chooseOccasion}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </section>

      <input type='submit' value='Submit' disabled={disabled} />
      {message ? <p style={{color: 'red'}}>{message}</p> : null}
      {response ? <Navigate to='/reservation-confirmed' /> : null}
    </form>
  );
};