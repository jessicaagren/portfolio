import './LandingPage.scss';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <button className='glowing-btn' onClick={() => navigate('/portfolio')}>
        <span className='glowing-txt'>
          WE<span className='faulty-letter'>L</span>CO
          <span className='faulty-letter'>M</span>E
        </span>
      </button>
    </>
  );
}
