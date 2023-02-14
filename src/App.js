import Homepage from './components/homepage/homepage';
import Booking from './components/bookingPage/bookingPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
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
            <Booking />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
