import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';

import Homepage from '../homepage/homepage';
import Booking from '../bookingPage/bookingPage';

const today = new Date().toLocaleDateString();

export default function Main() {
  const [date, setDate] = useState(today);
  const [time, setTime] = useState(undefined);
  const [number, setNumber] = useState(2);
  const [occasion, setOccasion] = useState(undefined);

  // const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  const initializeTimes = () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    return times.map((time, index) => <option key={index}>{time}</option>);
  };
  const updateTimes = (state, action) => {
    return state =  initializeTimes();
  };

  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());


  useEffect(() => {
    updateTimes();
    console.log(availableTimes);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Homepage />
          }
        />

        <Route
          path='/reserve-a-table'
          element={
            <Booking
              dateState={[date, setDate]}
              timeState={[time, setTime]}
              numberState={[number, setNumber]}
              occasionState={[occasion, setOccasion]}
              availableTimes={availableTimes}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};