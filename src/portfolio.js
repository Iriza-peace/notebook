const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'AMIZEROIRIZAPEACEMARY.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Amizero Iriza Peace Mary',
  role: 'Full Stack Engineer and UI UX Designer',
  description:
    'I’m a Full-Stack Engineer and Designer with 4 years of experience building exciting digital solutions, from e-commerce websites to unique apps. I combine smart coding with great design to create experiences that are easy to use and hard to forget.',
    resume: () => window.open('/assets/Resume.pdf', '_blank'),
  social: {
    linkedin: 'https://www.linkedin.com/in/iriza-peace-6632a92a9/',
    github: 'https://github.com/Iriza-peace',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Mirror House',
    description:
      'Mirror House is a clean, easy-to-navigate e-commerce platform with features like Irembo Pay for secure transactions. It blends style and simplicity, providing a seamless shopping experience across devices. Check it out for a fresh, user-friendly approach to online shopping!',
    stack: ['React Js', 'Node Js', 'Mongo DB'],
    sourceCode: 'https://github.com',
    livePreview: 'https://mirrorhouse.netlify.app/',
  },
  {
    name: 'VIENNA HOTEL',
    description:
    'Vienna Hotel is a stylish portfolio showcasing luxurious accommodations and top-tier services. The site highlights the hotel’s elegance, blending modern amenities with a warm atmosphere. It offers a seamless user experience with easy navigation, making it the perfect spot to explore a memorable stay. Discover comfort and sophistication in every detail!',
    stack: ['Next Js', 'JS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Support and Ticket Management System',
    description:
      'MIFOTRA(Ministry of Public Services and Labour) Support System is an intuitive ticket and support management platform designed for efficiency. It features an admin dashboard for easy management, live chat for real-time assistance, and a seamless ticket tracking system. This ensures quick resolutions and smooth communication between users and administrators, making it an essential tool for MIFOTRA’s support operations.',
    stack: ['UI UX Design', 'Node js', 'React', 'MUI', 'MYSQL'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.figma.com/proto/367POtmT2TsJ0HpirjviBn/SUPPORT?node-id=344-80673&p=f&t=qu0Mhrhvb4fsMSvm-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=344%3A80673',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'ZUSTAND',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React Js',
  'Next Js',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'FIGMA',
  'PHOTOSHOP'
]

const contact = {
  email: 'irizapeace@gmail.com',
}

export { header, about, projects, skills, contact }
