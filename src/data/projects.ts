export type Project = {
  slug: string;
  name: string;
  altText: string;
  img: string;
  description: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: 'folkuniversitetet',
    name: 'Folkuniversitetet',
    altText: 'Hav',
    img: 'https://usercontent.one/wp/biologi.ugglansno.se/wp-content/uploads/2019/10/wave-3473335_960_720.jpg?media=1676205504',
    description: 'Coming.',
    technologies: ['React', 'TypeScript'],
  },
  {
    slug: 'project-2',
    name: 'Project 2',
    altText: 'Hav',
    img: 'https://usercontent.one/wp/biologi.ugglansno.se/wp-content/uploads/2019/10/wave-3473335_960_720.jpg?media=1676205504',
    description: 'Coming.',
    technologies: ['React', 'SCSS'],
  },
];
