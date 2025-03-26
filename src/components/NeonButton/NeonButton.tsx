import { NavLink } from 'react-router-dom';
import './NeonButton.scss';

interface NeonButtonProps {
  title: string;
  to: string;
}

function NeonButton({ title, to }: NeonButtonProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `glowing-btn ${isActive ? 'active' : ''}`}>
      <span className='glowing-btn-text'>{title}</span>
    </NavLink>
  );
}

export default NeonButton;
