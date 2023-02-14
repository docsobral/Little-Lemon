import { useEffect } from "react";
import { useState } from "react"

import star from '../../assets/filled-star.svg';
import outline from '../../assets/outline-star.svg'

export default function Rating(props) {
  const [rating, setRating] = useState([0, 0, 0, 0, 0])
  const map = {
    0: outline,
    1: star,
  };

  useEffect(() => {
    let index = props.rating;
    let rating = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };

    while (index > 0) {
      index--;
      rating[index] = 1;
    };

    setRating(Object.values(rating));
  }, [props.rating]);

  return (
    <section className='rating'>
      <img
        src={map[rating[0]]}
        alt='star'
      />

      <img
        src={map[rating[1]]}
        alt='star'
      />

      <img
        src={map[rating[2]]}
        alt='star'
      />

      <img
        src={map[rating[3]]}
        alt='star'
      />

      <img
        src={map[rating[4]]}
        alt='star'
      />
    </section>
  );
};