import './BookingForm.css';

export default function BookingForm(props) {
  return (
    <form>
      <section className='date'>
        <label htmlFor='res-date'>Choose date:</label>
        <input type='date' id='res-date' name='res-date' placeholder={props.dateState.date} onChange={props.dateState.setDate} />
      </section>

      <section className='time'>
        <label htmlFor='res-time'>Choose time:</label>
        <select id='res-time' name='res-time' onChange={props.timeState.setTime}>
          {props.availableTimes}
        </select>
      </section>

      <section className='guest-number'>
        <label htmlFor='guests'>Number of guests:</label>
        <input type='number' min='0' max='5' id='guests' name='guests' placeholder='2' onChange={props.numberState.setNumber} />
      </section>

      <section className='occasion'>
        <label htmlFor='occasion'>Occasion:</label>
        <select id='occasion' name='occasion' onChange={props.occasionState.setOccasion}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </section>
    </form>
  );
};