import { useContext } from 'react';
import { BookingContext } from '../main/main';
import './BookingForm.css';

export default function BookingForm(props) {
  const { setDate, setTime, number, setNumber, setOccasion, availableTimes } = useContext(BookingContext);

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

  return (
    <form>
      <section className='date'>
        <label htmlFor='res-date'>Choose date:</label>
        <input type='date' id='res-date' name='res-date' onChange={chooseDate} />
      </section>

      <section className='time'>
        <label htmlFor='res-time'>Choose time:</label>
        <select id='res-time' name='res-time' onChange={chooseTime}>
          {availableTimes}
        </select>
      </section>

      <section className='guest-number'>
        <label htmlFor='guests'>Number of guests:</label>
        <input type='number' min='0' max='5' id='guests' name='guests' placeholder={number} onChange={chooseNumber} />
      </section>

      <section className='occasion'>
        <label htmlFor='occasion'>Occasion:</label>
        <select id='occasion' name='occasion' onChange={chooseOccasion}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </section>
    </form>
  );
};