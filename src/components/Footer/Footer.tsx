import './Footer.scss';

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className='Footer'>
        <a href='/contact' rel='noopener noreferrer'>
          Jessica Ågren {getCurrentYear()}
        </a>
      </footer>
    </>
  );
}
