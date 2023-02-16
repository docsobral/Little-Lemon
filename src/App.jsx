import Homepage from './components/homepage/homepage';
import Booking from './components/bookingPage/bookingPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

const today = new Date().toLocaleDateString();

function App() {
  const [date, setDate] = useState(today);
  const [time, setTime] = useState(undefined);
  const [number, setNumber] = useState(2);
  const [occasion, setOccasion] = useState(undefined);
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  useEffect(() => {
    setAvailableTimes(availableTimes.map((time, index) => <option key={index}>{time}</option>));
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

export default App;
