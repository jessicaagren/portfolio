import NeonButton from '../NeonButton/NeonButton';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='NavBar'>
      <NeonButton title='Home' to='/home' />
      <NeonButton title='Projects' to='/projects' />
      <NeonButton title='Contact' to='/contact' />
    </nav>
  );
};

export default Navbar;
