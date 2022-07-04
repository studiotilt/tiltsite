import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tilt', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Studio tilt, London', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  img: 'tiltBlack.jpg',
  title: 'We are',
  name: 'Studio Tilt',
  subtitle: 'A Creative Trio,\nWorking with Technology, Science and Art',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'tiltWhite.jpg',
  paragraphOne: 'We make Art with Technology',
  paragraphTwo:
    'Studio Tilt was formed by 3 colleagues with the desire to combine individual expertise of 3 distinct areas of technology, moving image, audio and robotics, to create experiences and objects which excite and challenge those who experience the work.',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'theBetween.jpg',
    title: 'The Between',
    info: 'Industrial robotic arms explore the relationaships between individual entities in a performance piece. ',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'unanimous.jpg',
    title: 'Unanimous',
    info: 'An audio visual work, within which thousandes of computer generated individuals become sychronised. Audio comprises 500 Sine waves which slowly come into phase.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'antithesis.jpg',
    title: 'Antithesis',
    info: 'An audiovisual piece with music and audio displaying rhymic movements.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in touch with any questions or ideas.',
  btn: 'Lets Talk',
  email: 'control@studio-tilt.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/studiotilt/',
    },
  ],
};
