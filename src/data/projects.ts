import folkuniversitetetImage from '../assets/Folkuniversitetet.png';
import astronomyImage from '../assets/Astronomy-API.png';
import scrollOfThronesImage from '../assets/scroll-of-thrones.png';
import theLiteraryGardenImage from '../assets/the-literary-garden.png';
import recipeInPiecesImage from '../assets/recipe-in-pieces.png';
import rollToDoImage from '../assets/roll-to-do.png';
import HBImage1 from '../assets/HB1.png';
import HBImage2 from '../assets/HB2.png';
import HBImage3 from '../assets/HB3.png';
import delaHelaDig from '../assets/dela-hela-dig.png';
const placeholderImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFKwKKIne5qyG8tU25RYExTtpXsXX9OJt1Xi9Fmtdcnf6JQsEMsSX1vQ&s=10';

export type DevProject = {
  slug: string;
  name: string;
  altText: string;
  images: string[];
  description: string;
  technologies: string[];
  github?: string;
};
export type CommProject = {
  slug: string;
  name: string;
  altText: string;
  images: string[];
  description: string;
};

export const devProjects: DevProject[] = [
  {
    slug: 'folkuniversitetet',
    name: 'Folkuniversitetet',
    altText: 'Folkuniversitetet',
    images: [folkuniversitetetImage],
    description:
      'Project under development for Folkuniversitetet. The platform handles event bookings, location specific data, and user management. I planned and was responsible for the frontend design together with a colleague who mainly handled the backend development. On top of working on an intuitive user interface and login process, I built reusable components via component libraries, developed logical solutions for modals and forms, and integrated an LLM (Gemini) into the project. I also contributed to the backend development.',
    technologies: [
      'React',
      'React Router',
      'TypeScript',
      'Mantine UI',
      'Node.js',
      'Express',
      'MySQL',
      'Clerk',
      'Resend',
      'Gemini API',
      'TripAdvisor API',
    ],
  },
  {
    slug: 'recipe-in-pieces',
    name: 'Recipe in Pieces',
    altText: 'Recipe in Pieces',
    images: [recipeInPiecesImage],
    description:
      'Personal recipe keeper for different types of food sorted into categories.',
    technologies: [
      'React',
      'React Router',
      'TypeScript',
      'Mantine UI',
      'Sanity',
    ],
    github: 'https://github.com/jessicaagren/recipe-in-pieces',
  },
  {
    slug: 'scroll-of-thrones',
    name: 'Scroll of Thrones',
    altText: 'Scroll of Thrones',
    images: [scrollOfThronesImage],
    description:
      'Fetches different API URL:s on A Song of Ice and Fire and Game of Thrones and gives the user the opportunity to search for characters and play a mini game where you guess quotes.',
    technologies: [
      'TypeScript',
      'SCSS',
      'An API of Ice and Fire',
      'Game of Thrones Quote API',
    ],
    github: 'https://github.com/jessicaagren/Scroll-of-Thrones',
  },
  {
    slug: 'the-literary-garden',
    name: 'The Literary Garden',
    altText: 'The Literary Garden',
    images: [theLiteraryGardenImage],
    description:
      'A book tracker which fetches API endpoints from Open Library and gives the user the opportunity to search for books and save them as favourites, mark as read and give reviews.',
    technologies: [
      'React',
      'React Router',
      'TypeScript',
      'SCSS',
      'Open Library API',
    ],
    github: 'https://github.com/jessicaagren/the-literary-garden',
  },
  {
    slug: 'astronomy-api',
    name: 'Astronomy API',
    altText: 'Astronomy API',
    images: [astronomyImage],
    description:
      'This is an API providing information about the solar system, its planets, and their moons.',
    technologies: ['Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/jessicaagren/astronomy-API',
  },
  {
    slug: 'roll-to-do',
    name: 'Roll To Do',
    altText: 'Roll To Do',
    images: [rollToDoImage],
    description:
      'First project using Tailwind. Main concept is a to-do-list where you roll a D20 and "kill" a dragon by completing the tasks, earning different points based on the chore.',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/jessicaagren/roll-to-do',
  },
];

export const commProjects: CommProject[] = [
  {
    slug: 'hogskolan-i-boras',
    name: 'Högskolan i Borås',
    altText: 'Högskolan i Borås',
    images: [HBImage1, HBImage2, HBImage3],
    description:
      'Examples of different communications material for Högskolan i Borås (University of Borås). Printed folder for new student ambassadors, layout and planning by me. Also articles for the website, where I conducted the interviews and published the texts online.',
  },
  {
    slug: 'dela-hela-dig',
    name: 'Dela Hela Dig',
    altText: 'Dela Hela Dig',
    images: [delaHelaDig],
    description:
      'A project with three fellow colleagues. A campaign on social media for a start up, pertaining to mental health. I was responsible for the copy.',
  },
  {
    slug: 'more-to-come',
    name: 'More to come...',
    altText: 'More to come...',
    images: [placeholderImg],
    description: 'More to come...',
  },
];
