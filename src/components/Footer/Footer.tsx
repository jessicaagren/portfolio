import './Footer.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className='Footer'>
        <Link to='/contact'>Jessica Ågren {getCurrentYear()}</Link>
      </footer>
    </>
  );
}
