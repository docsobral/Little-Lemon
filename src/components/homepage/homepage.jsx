import '../main/main.css';

import Header from '../header/header';
import Footer from '../footer/footer';
import Hero from '../../components/call-to-action/cta';
import Testimonials from '../../components/testimonials/testimonials';
import Specials from '../../components/specials/specials';
import About from '../../components/about/about';

export default function Homepage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>

      <Footer />
    </>
  )
}