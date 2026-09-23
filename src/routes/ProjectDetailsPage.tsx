import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { commProjects, devProjects } from '../data/projects';

export default function ProjectDetailsPage() {
  const { project } = useParams<{ project: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const projectDetails = [...devProjects, ...commProjects].find(
    (item) => item.slug === project,
  );

  if (!projectDetails) {
    return <div className='ProjectDetailsPage'>Projektet hittades inte.</div>;
  }

  const imageCount = projectDetails.images.length;

  const showPreviousImage = () => {
    setActiveImage((currentImage) =>
      currentImage === 0 ? imageCount - 1 : currentImage - 1,
    );
  };

  const showNextImage = () => {
    setActiveImage((currentImage) => (currentImage + 1) % imageCount);
  };

  return (
    <article className='ProjectDetailsPage'>
      <h1>{projectDetails.name}</h1>
      <div className='projectDetailsCarousel'>
        <img
          className='projectDetailsMainImage'
          src={projectDetails.images[activeImage]}
          alt={`${projectDetails.altText} ${activeImage + 1}`}
        />
        {imageCount > 1 && (
          <>
            <button
              className='carouselButton carouselButtonPrevious'
              type='button'
              onClick={showPreviousImage}
              aria-label='Föregående bild'>
              <span className='carouselArrow carouselArrowPrevious' />
            </button>
            <button
              className='carouselButton carouselButtonNext'
              type='button'
              onClick={showNextImage}
              aria-label='Nästa bild'>
              <span className='carouselArrow carouselArrowNext' />
            </button>
            <div className='carouselIndicators' aria-label='Välj bild'>
              {projectDetails.images.map((image, index) => (
                <button
                  className={`carouselIndicator ${
                    index === activeImage ? 'active' : ''
                  }`}
                  key={image}
                  type='button'
                  onClick={() => setActiveImage(index)}
                  aria-label={`Visa bild ${index + 1}`}
                  aria-current={index === activeImage ? 'true' : undefined}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <p className='projectDescription'>{projectDetails.description}</p>
      {'technologies' in projectDetails &&
        Array.isArray(projectDetails.technologies) && (
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
        )}
      {'github' in projectDetails &&
        typeof projectDetails.github === 'string' && (
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
