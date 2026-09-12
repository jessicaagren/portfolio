import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetailsPage() {
  const { project } = useParams<{ project: string }>();
  const projectDetails = projects.find((item) => item.slug === project);

  if (!projectDetails) {
    return <div className='ProjectDetailsPage'>Projektet hittades inte.</div>;
  }

  return (
    <article className='ProjectDetailsPage'>
      <h1>{projectDetails.name}</h1>
      <p>{projectDetails.description}</p>
      <ul>
        {projectDetails.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}
