import NeonButton from '../NeonNavLink/NeonNavLink';
import './NavBar.scss';

export default function Navbar() {
  return (
    <nav className='NavBar'>
      <NeonButton title='Home' to='/home' />
      <NeonButton title='Projects' to='/projects' />
      <NeonButton title='Contact' to='/contact' />
    </nav>
  );
}
