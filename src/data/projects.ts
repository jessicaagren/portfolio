import folkuniversitetetImage from '../assets/Folkuniversitetet.png';
import astronomyImage from '../assets/astronomy-API.png';
import scrollOfThronesImage from '../assets/scroll-of-thrones.png';
import theLiteraryGardenImage from '../assets/the-literary-garden.png';
import recipeInPiecesImage from '../assets/recipe-in-pieces.png';

export type Project = {
  slug: string;
  name: string;
  altText: string;
  images: string[];
  description: string;
  technologies: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    slug: 'folkuniversitetet',
    name: 'Folkuniversitetet',
    altText: 'Folkuniversitetet',
    images: [folkuniversitetetImage],
    description:
      'Project under development for Folkuniversitetet. The platform handles event bookings, location specific data, and user management. I planned and was responsible for the frontend design together with a colleague who mainly handled the backend development. On top of working on an intuitive user interface and login process, I built reusable components via component libraries, developed logical solutions for modals and forms, and integrated an LLM (Gemini) into the project. I also contributed to the backend development.',
    technologies: [
      'React',
      'TypeScript',
      'Mantine UI',
      'Node.js',
      'Express',
      'MySQL',
      'Clerk',
      'Resend',
      'Gemini API',
    ],
  },
  {
    slug: 'recipe-in-pieces',
    name: 'Recipe in Pieces',
    altText: 'Recipe in Pieces',
    images: [recipeInPiecesImage],
    description:
      'Personal recipe keeper for different types of food sorted into categories.',
    technologies: ['React', 'Mantine UI', 'Sanity'],
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
];
