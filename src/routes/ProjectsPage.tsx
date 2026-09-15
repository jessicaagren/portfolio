import ProjectComponent from '../components/ProjectComponent/ProjectComponent';
import { devProjects, commProjects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <>
      <div className='ProjectsPage'>
        <h2>Development Projects</h2>
        <div className='Projects'>
          {devProjects.map((project) => (
            <ProjectComponent
              key={project.slug}
              img={project.images[0]}
              altText={project.altText}
              name={project.name}
              link={`/projects/${project.slug}`}
            />
          ))}
        </div>
        <h2>Communication Projects</h2>
        <div className='Projects'>
          {commProjects.map((project) => (
            <ProjectComponent
              key={project.slug}
              img={project.images[0]}
              altText={project.altText}
              name={project.name}
              link={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
