import hero from '../../assets/hero.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  function goBook() {
    navigate('/reserve-a-table');
  };

  return (
    <main className='hero'>
        <article className='hero' id='hero'>
          <section className='heroContent'>
            <h1 className='title'>
              Little Lemon
            </h1>

            <h2 className='subtitle'>
              Chicago
            </h2>

            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <section className='button'>
              <Button onClick={goBook} aria-label="On Click">
                Reserve a table
              </Button>
            </section>
          </section>

          <section className='heroImage'>
            <img
              src={hero}
              alt='Hero'
            />
          </section>
        </article>
      </main>
  );
};