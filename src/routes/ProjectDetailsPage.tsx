import { useParams } from 'react-router-dom';
import { devProjects } from '../data/projects';

export default function ProjectDetailsPage() {
  const { project } = useParams<{ project: string }>();
  const projectDetails = devProjects.find((item) => item.slug === project);

  if (!projectDetails) {
    return <div className='ProjectDetailsPage'>Projektet hittades inte.</div>;
  }

  return (
    <article className='ProjectDetailsPage'>
      <h1>{projectDetails.name}</h1>
      <img
        className='projectDetailsMainImage'
        src={projectDetails.images[0]}
        alt={projectDetails.altText}
      />
      {projectDetails.images.length > 1 && (
        <div className='projectDetailsGallery'>
          {projectDetails.images.slice(1).map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${projectDetails.altText} ${index + 2}`}
            />
          ))}
        </div>
      )}
      <p>{projectDetails.description}</p>
      <section
        className='projectTechnologies'
        aria-labelledby='technologies-heading'>
        <h2 id='technologies-heading'>Technologies</h2>
        <div className='technologyList'>
          {projectDetails.technologies.map((technology) => (
            <span className='technologyTag' key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </section>
      {projectDetails.github && (
        <p>
          <a
            href={projectDetails.github}
            target='_blank'
            rel='noopener noreferrer'
            className='github-link'>
            View on GitHub
          </a>
        </p>
      )}
    </article>
  );
}
