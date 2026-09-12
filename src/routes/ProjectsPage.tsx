import ProjectComponent from '../components/ProjectComponent/ProjectComponent';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <div className='ProjectsPage'>
      {projects.map((project) => (
        <ProjectComponent
          key={project.slug}
          img={project.img}
          altText={project.altText}
          name={project.name}
          link={`/projects/${project.slug}`}
        />
      ))}
    </div>
  );
}
