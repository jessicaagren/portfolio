import { useEffect, useState } from 'react';
import NeonButton from '../NeonNavLink/NeonNavLink';
import './NavBar.scss';

export default function Navbar() {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = isLightMode ? 'light' : 'dark';
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  return (
    <nav className='NavBar'>
      <NeonButton title='Home' to='/home' />
      <NeonButton title='Projects' to='/projects' />
      <NeonButton title='Contact' to='/contact' />
      <button
        className='themeToggle'
        type='button'
        onClick={() => setIsLightMode((currentMode) => !currentMode)}
        aria-label={
          isLightMode ? 'Switch to dark mode' : 'Switch to light mode'
        }
        aria-pressed={isLightMode}>
        {isLightMode ? '☾' : '☀'}
      </button>
    </nav>
  );
}
