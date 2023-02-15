import Homepage from './components/homepage/homepage';
import Booking from './components/bookingPage/bookingPage';
import AppContext from './components/context/context';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [booking, setBooking] = useState(false);

  return (
    <AppContext.Provider value={{ booking, setBooking }}>
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
              <Booking />
            }
          />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
