import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  };

  return (
    <section className='headerNav'>
      <nav>
        <li><a onClick={goHome} style={{color: 'black', textDecoration: 'none'}}>Home</a></li>
        <li><a href='#about' style={{color: 'black', textDecoration: 'none'}}>About</a></li>
        <li><a href='#specials' style={{color: 'black', textDecoration: 'none'}}>Menu</a></li>
        <li><a href='#hero' style={{color: 'black', textDecoration: 'none'}}>Reservations</a></li>
        <li><a href='#specials' style={{color: 'black', textDecoration: 'none'}}>Order Online</a></li>
        <li><a onClick={goHome} style={{color: 'black', textDecoration: 'none'}}>Login</a></li>
      </nav>
    </section>
  );
};