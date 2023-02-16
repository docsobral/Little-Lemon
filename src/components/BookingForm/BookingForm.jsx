import './BookingForm.css';
import { useEffect, useState } from 'react';

const today = new Date().toLocaleDateString()

export default function BookingForm() {
  const [date, setDate] = useState(today);
  const [time, setTime] = useState(undefined);
  const [number, setNumber] = useState(2);
  const [occasion, setOccasion] = useState(undefined);

  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

  useEffect(() => {
    setAvailableTimes(availableTimes.map((time, index) => <option key={index}>{time}</option>));
    console.log(availableTimes);
  }, []);

  return (
    <form>
      <section className='date'>
        <label htmlFor='res-date'>Choose date:</label>
        <input type='date' id='res-date' name='res-date' placeholder={date} onChange={setDate} />
      </section>

      <section className='time'>
        <label htmlFor='res-time'>Choose time:</label>
        <select id='res-time' name='res-time' onChange={setTime}>
          {availableTimes}
        </select>
      </section>

      <section className='guest-number'>
        <label htmlFor='guests'>Number of guests:</label>
        <input type='number' min='0' max='5' id='guests' name='guests' placeholder={number} onChange={setNumber} />
      </section>

      <section className='occasion'>
        <label htmlFor='occasion'>Occasion:</label>
        <select id='occasion' name='occasion' onChange={setOccasion}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </section>
    </form>
  );
};