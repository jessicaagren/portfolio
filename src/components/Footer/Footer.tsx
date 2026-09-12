import './Footer.scss';

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className='Footer'>Jessica Ågren {getCurrentYear()}</footer>
    </>
  );
}
