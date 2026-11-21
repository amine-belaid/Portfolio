import { faCamera, faComments, faLaptopCode, faSquareParking } from '@fortawesome/free-solid-svg-icons';

/*
  One place for all your projects. Used by: home page cards, /projects, /projects/:slug and the profile page.

  For each project:
  - image:  put your screenshot in public/projects/ with the same name (or change the path below)
  - github: replace with the link of the repository
*/
export const PROJECTS = [
  {
    slug: 'license-plate-recognition',
    name: 'License Plate Recognition',
    title: 'Intelligent license plate recognition (ALPR)',
    category: 'AI',
    summary: 'Real-time reading of Tunisian Arabic/Latin license plates.',
    text: 'A real-time web application that automatically reads license plates, optimized for the bilingual (Arabic/Latin) format of Tunisian plates.',
    points: [
      'Python for scripting and integration',
      'AI: EasyOCR (deep learning) for bilingual text recognition',
      'Computer vision: OpenCV for image preprocessing, video streams and regions of interest',
      'Web: Flask backend, Tailwind CSS front end',
      'Real time: Socket.IO / WebSockets for two-way data flow',
      'Multithreading to optimize CPU/GPU performance',
    ],
    tags: ['Python', 'EasyOCR', 'OpenCV', 'Flask', 'Tailwind CSS', 'WebSockets'],
    images: [
      '/images/projects/license-plate-recognition-1.png',
      '/images/projects/license-plate-recognition-2.png',
      '/images/projects/license-plate-recognition-3.png',
    ],
    github: 'https://github.com/aminebelaid2004-lang', // TODO: replace with the repo link
    icon: faCamera,
  },
  {
    slug: 'website-builder',
    name: 'Website Builder',
    title: 'Website Builder – No-Code Website Creation Platform',
    category: 'Web App',
    summary: 'Create, customize and publish websites with a drag & drop editor.',
    text: 'A full-stack application that lets users create, customize and publish websites through a visual drag & drop editor.',
    points: [
      'Secure authentication and dynamic page and content management',
      'Image uploads, automatic saving and responsive website preview',
      'Website deployment using AWS S3 and CloudFront',
    ],
    tags: [
      'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize',
      'AWS S3', 'CloudFront', 'Cloudinary', 'JWT', 'Zustand',
    ],
    images: [
      '/images/projects/website-builder-1.png',
      '/images/projects/website-builder-2.png',
      '/images/projects/website-builder-3.png',
    ],
    github: 'https://github.com/aminebelaid2004-lang', // TODO: replace with the repo link
    icon: faLaptopCode,
  },
  {
    slug: 'parking-slot-detection',
    name: 'Parking Slot Detection',
    title: 'Parking Slot Detection System – MATLAB',
    category: 'MATLAB',
    summary: 'Detects and counts free parking spaces from images.',
    text: 'A MATLAB application that detects and counts available parking spaces from images.',
    points: [
      'Image processing: grayscale conversion, thresholding and binary image transformation',
      'Vehicle detection using connected-component labeling (bwlabel)',
      'Graphical user interface (GUI) showing the processed images and the available parking spaces',
    ],
    tags: ['MATLAB', 'Image Processing', 'Object Detection', 'GUI'],
    images: [
        '/images/projects/parking-slot-detection-1.png',
        '/images/projects/parking-slot-detection-2.png',
        '/images/projects/parking-slot-detection-3.png',
      ],
    github: 'https://github.com/aminebelaid2004-lang', // TODO: replace with the repo link
    icon: faSquareParking,
  },
  {
    slug: 'java-rmi-chat',
    name: 'Java RMI Chat',
    title: 'Java RMI chat application',
    category: 'Java',
    summary: 'Client-server chat built with Java RMI and TCP/IP.',
    text: 'A client-server chat application built with Java RMI.',
    points: ['Object serialization', 'Communication over TCP/IP'],
    tags: ['Java', 'RMI', 'TCP/IP'],
    images: [
      '/images/projects/java-rmi-chat-1.png',
      '/images/projects/java-rmi-chat-2.png',
      '/images/projects/java-rmi-chat-3.png',
      '/images/projects/java-rmi-chat-4.png',
    ],
    github: 'https://github.com/aminebelaid2004-lang', // TODO: replace with the repo link
    icon: faComments,
  },
];