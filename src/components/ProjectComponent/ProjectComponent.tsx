import { Link } from 'react-router-dom';
import './ProjectComponent.scss';

type ProjectComponentProps = {
  img: string;
  altText: string;
  name: string;
  link: string;
};

export default function ProjectComponent({
  img,
  altText,
  name,
  link,
}: ProjectComponentProps) {
  return (
    <Link className='projectLink' to={link}>
      <section className='ProjectComponent'>
        <img className='projectImg' src={img} alt={altText} />
        <h2>{name}</h2>
      </section>
    </Link>
  );
}
