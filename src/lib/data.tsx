import { Github, Twitter, Figma, Linkedin, Instagram } from 'lucide-react';

import LogoAWS from '/public/images/logos/icon-aws.svg';
import LogoPostman from '/public/images/logos/icon-postman.svg';
import LogoFirebase from '/public/images/logos/icon-firebase.svg';
import LogoRedux from '/public/images/logos/icon-redux.svg';
import LogoGCP from '/public/images/logos/icon-gcp.svg';
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectEcommerce from '/public/images/e-commerce.png';
import ProjectSaas from '/public/images/saas.png';
import ProjectCollabhub from '/public/images/homepage.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/harshbsharma',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  TWITTER: 'https://twitter.com/0xharsh_sharma',
  INSTAGRAM:"https://instagram.com/sharma.harsh2612"
  
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/harshbsharma',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/0xharsh_sharma',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/harshbsharma',
  },
  {
    icon:Instagram,
    url:"https://instagram.com/sharma.harsh2612"
  }
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  // {
  //   label: 'Nest.js',
  //   logo: LogoNest,
  //   url: 'https://nestjs.com/',
  // },
  // {
  //   label: 'Socket.io',
  //   logo: LogoSocket,
  //   darkModeLogo: LogoSocketLight,
  //   url: 'https://socket.io/',
  // },
  // {
  //   label: 'PostgreSQL',
  //   logo: LogoPostgreSQL,
  //   url: 'https://www.postgresql.org/',
  // },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  // {
  //   label: 'Cypress',
  //   logo: LogoCypress,
  //   darkModeLogo: LogoCypressLight,
  //   url: 'https://www.cypress.io/',
  // },
  // {
  //   label: 'Storybook',
  //   logo: LogoStorybook,
  //   url: 'https://storybook.js.org/',
  // },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'AWS',
    logo: LogoAWS,
    url: 'https://aws.amazon.com/',
  },
  {
    label: 'GCP',
    logo: LogoGCP,
    url: 'https://cloud.google.com/',
  },
  {
    label: 'Redux',
    logo: LogoRedux,
    url: 'https://redux.js.org/',
  },
  {
    label: 'Firebase',
    logo: LogoFirebase,
    url: 'https://firebase.google.com/',
  },
  {
    label: 'Postman',
    logo: LogoPostman,
    url: 'https://postman.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'Independent Freelancer',
    startDate: new Date(2021, 10),
    currentlyWorkHere: true,
    summary: [
      'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
    ],
  },
  {
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: 'Greenapex logo',
    position: 'Team Lead',
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 9),
    summary: [
      'Acted as team lead in different projects.',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (frontend + backend).',
      'Worked on enterprise-level projects for a variety of clients.',
      'Handled sprint planning & task distribution.',
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: 'Dotnpixel logo',
    position: 'Full Stack Developer',
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: ['Worked as a full stack developer (React / Laravel).'],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'MegaMart',
    description:
      'MegaMart is a student-centric online marketplace where students can easily buy and sell second-hand products within their academic community. Our platform is designed to provide affordable solutions for students needs, promote sustainability by reducing waste, and foster a sense of community among students.',
    url: 'https://www.wingie.com',
    previewImage: ProjectEcommerce,
    technologies: [
      'React',
      'Javascript',
      'React Bootstrap',
      'Firebase',
      'Express.js',
      'Passport.js',
      'Styled Components',
      'Redux',
    ],
  },
  {
    name: 'CollabHub',
    description:
      'CollabHub enables YouTube creators to seamlessly manage their channels by granting access to a team of editors. Creators can authorize their YouTube channels via OAuth 2.0, allowing editors to upload videos on their behalf.',
    url: 'https://fiskil.com.au',
    previewImage: ProjectCollabhub,
    technologies: [
      'React',
      'Javascript',
      'Tailwindcss',
      'Redux Toolkit',
      'Express.js',
      'MongoDB',
      'Passport.js',
      'Youtube Data API',
      'Bcrypt'
    ],
  },
  {
    name: 'FinHouse',
    description:
      'A Saas Website to manage all the user finance , from monthly budgets to special events Finhouse got it all covered. Give you smooth and efficient spend tracking to improve savings.',
    url: 'https://pepehousing.com',
    previewImage: ProjectSaas,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'Oauth',
      'Storybook',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Avinash Singh',
    personAvatar: AvatarKrisztian,
    title: 'Project Mentor - Collabhub',
    testimonial:
      'Harsh is a standout student in our program. . His enthusiasm for web development and problem-solving is evident in the quality of work he produces. What sets him apart is his commitment to continuous learning. He is a quick learner, and his commitment to excellence is commendable.',
  },
  {
    personName: 'Sumit Agarwal',
    personAvatar: AvatarEugen,
    title: 'Founder - Talkabit',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development projects! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Frank Drumsfield',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Harsh person you want on your team in any competitive scenario or hackathon. I have had worked alongside him on numerous projects, and his technical prowess is nothing short of remarkable. ',
  },
];
