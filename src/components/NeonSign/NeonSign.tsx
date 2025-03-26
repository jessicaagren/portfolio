import { useNavigate } from 'react-router-dom';
import './NeonSign.scss';

export default function NeonSign() {
  const navigate = useNavigate();
  return (
    <>
      <button className='glowing-sign' onClick={() => navigate('/home')}>
        <span className='glowing-txt'>
          W<span className='faulty-second-letter'>E</span>
          <span className='faulty-letter'>L</span>CO
          <span className='faulty-second-letter'>M</span>E
        </span>
      </button>
    </>
  );
}
