import './main.css';

import Hero from '../../components/call-to-action/cta';
import Testimonials from '../../components/testimonials/testimonials';
import Specials from '../../components/specials/specials';
import About from '../../components/about/about';

export default function Main() {
  return (
    <main>
      <Hero />

      <Specials />

      <Testimonials />

      <About />
    </main>
  )
}