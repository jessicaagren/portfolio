import { NavLink } from 'react-router-dom';
import './NeonNavLink.scss';

interface NeonButtonProps {
  title: string;
  to: string;
}

function NeonNavLink({ title, to }: NeonButtonProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `glowing-navlink ${isActive ? 'active' : ''}`
      }>
      <span className='glowing-navlink-text'>{title}</span>
    </NavLink>
  );
}

export default NeonNavLink;
