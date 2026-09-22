import profImageBlur from '../assets/profImageBlur.jpg';

export default function HomePage() {
  return (
    <section className='HomePage'>
      <img
        className='profileImage'
        src={profImageBlur}
        alt='Portrait of Jessica'
      />
      <p>
        Hi! I'm Jessica, a passionate frontend developer with previous
        experience in marketing and communications. I have a degree in frontend
        development and have built several fullstack projects from the ground
        up. I am right now learning more about system development and building
        databases.
      </p>
    </section>
  );
}
