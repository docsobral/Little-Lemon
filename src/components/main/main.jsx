import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useReducer, createContext } from 'react';

import Homepage from '../homepage/homepage';
import Booking from '../bookingPage/bookingPage';

const today = new Date().getDate();

export const BookingContext = createContext({
  date: undefined,
  setDate: date => {},
  time: undefined,
  setTime: time => {},
  number: 2,
  setNumber: number => {},
  occasion: undefined,
  setOccasion: occasion => {},
  availableTimes: undefined,
});

export function Main() {
  const [date, setDate] = useState(undefined);
  const [time, setTime] = useState(undefined);
  const [number, setNumber] = useState(2);
  const [occasion, setOccasion] = useState(undefined);

  const seededRandom = function(seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
  };

  const submitAPI = function(formData) {
    return true;
  };

  const initializeTimes = () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    return times.map((time, index) => <option key={index}>{time}</option>);
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case ('pick date'): return action.payload;;
      default: return initializeTimes();;
    };
  };

  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());

  useEffect(() => {
    if (date !== today) {
      let times = fetchAPI(new Date(date));
      times = times.map((time, index) => <option key={index}>{time}</option>);
      setAvailableTimes({ type: 'pick date', payload: times });
    };
  }, [date]);

  return (
    <BookingContext.Provider value={{ date, setDate, time, setTime, number, setNumber, occasion, setOccasion, availableTimes }}>
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
    </BookingContext.Provider>
  );
};