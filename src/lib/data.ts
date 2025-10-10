
import type { Project, Skill, Experience, Education, Certification, SkillsByCategory } from './types';

export const personalData = {
  name: 'Abdullah Al Faisal',
  title: 'SQA Engineer',
  bio: `I am a CSE graduate from American International University-Bangladesh (AIUB), currently focused on learning and building my career in Software Quality Assurance (SQA). I have a strong passion for ensuring software reliability through testing, analysis, and continuous improvement. I'm committed to developing my skills in manual and automated testing, and I aim to become a top-performing SQA Engineer known for precision and quality. Let's do something amazing together!`,
  avatar: '/avatar.png',
  email: 'abdullahalfaisal992@gmail.com',
  socials: {
    github: 'https://github.com/abdullahalfaisal',
    linkedin: 'https://www.linkedin.com/in/abdullah-al-faisal-a57945279/',
    facebook: 'https://www.facebook.com/abdullahal.faisal.7737/',
    instagram: 'https://www.instagram.com/_nib_ras',
  },
};

export const projectsData: Project[] = [
  {
    title: "Savory Food Ordering Frontend",
    description: "A frontend application for a food ordering platform, allowing users to browse menus, place orders, and track deliveries for a seamless experience.",
    technologies: ["React", "Web App", "Food Delivery"],
    image: '/projects/Savory.png',
    image_hint: 'food ordering app',
    links: {
      live: "https://abdullahalfaisal.github.io/Savory-Food_Ordering_Frontend/"
    }
  },
  {
    title: "Quality Assurance of OpenCart",
    description: "A comprehensive quality assurance analysis of the OpenCart e-commerce platform, including test plans, test cases, and bug reports to ensure functionality and user experience.",
    technologies: ["OpenCart", "QA", "E-commerce", "Test Planning"],
    image: '/projects/qa_opencart.png',
    image_hint: 'e-commerce quality assurance',
    links: {
      live: "https://github.com/abdullahalfaisal/QA-of-OpenCart/tree/main"
    }
  },
  {
    title: "Quality Assurance and Testing of Jira",
    description: "QA of key Jira features with PRD, test plan, detailed test cases and basic Selenium automation script. Covers functional, usability, performance, security and API testing to ensure reliable and secure workflows.",
    technologies: ["Jira", "Selenium", "Test Planning"],
    image: '/projects/QA of Jira.png',
    image_hint: 'software development board',
    links: {
      live: "https://github.com/abdullahalfaisal/QA-of-Jira"
    }
  },
  {
    title: "Test Plan for Urban Areas Crime Detection and Public Safety System",
    description: "Software test plan for Public Safety System, ensuring functionality, security and performance through structured testing.",
    technologies: ["Test Plan", "QA", "Security"],
    image: '/projects/Test Plan UACDAPSS.png',
    image_hint: 'public safety system',
    links: {
      live: "https://github.com/abdullahalfaisal/Sofware-Quality-and-Testing/blob/main/Test%20Plan_UACPSS.pdf"
    }
  },
  {
    title: "Fit Track",
    description: "A web and mobile app designed to track fitness progress, workout routines, and nutrition goals. It helps users set goals and track their health journey.",
    technologies: ["Web App", "Fitness", "JavaScript"],
    image: '/projects/fit pro .png',
    image_hint: 'fitness tracker',
    links: {
      live: "https://abdullahalfaisal.github.io/Fit-Track/"
    }
  },
  {
    title: "ED Tech",
    description: "An educational platform designed to facilitate e-learning with interactive courses, quizzes, and real-time feedback for students and teachers.",
    technologies: ["E-learning", "React", "Node.js"],
    image: '/projects/ED Tech .png',
    image_hint: 'online learning',
    links: {
      live: "https://abdullahalfaisal.github.io/EdTech/"
    }
  },
    {
    title: "Stark Tech",
    description: "A tech consulting website that provides solutions for businesses to integrate modern technology and streamline their operations.",
    technologies: ["Consulting", "Business", "Website"],
    image: '/projects/Stark Tech.png',
    image_hint: 'tech consulting',
    links: {
      live: "https://abdullahalfaisal.github.io/Stark-Tech/"
    }
  },
  {
    title: "AIUB CGPA Calculator",
    description: "A tool designed for students at AIUB to easily calculate their CGPA based on their grades and credit hours for a given semester.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: '/projects/AIUB CGPA Calculator.png',
    image_hint: 'calculator university',
    links: {
      live: "https://abdullahalfaisal.github.io/AIUB-CGPA-Calculator/"
    }
  },
];

export const skillsData: SkillsByCategory = {
  "Programming Languages": [
    { name: 'Java', iconPath: '/icons/java-4.svg' },
    { name: 'C++', iconPath: '/icons/c.svg' },
    { name: 'HTML', iconPath: '/icons/html-1.svg' },
    { name: 'CSS', iconPath: '/icons/css-3.svg' },
    { name: 'JavaScript', iconPath: '/icons/javascript-1.svg' },
  ],
  "Methodologies & Concepts": [
    { name: 'Manual Testing' },
    { name: 'SDLC' },
    { name: 'STLC' },
    { name: 'Agile' },
    { name: 'Defect Life Cycle' },
    { name: 'Test Plan' },
    { name: 'Test Cases' },
    { name: 'Bug Report' },
    { name: 'SRS' },
    { name: 'OOP' },
    { name: 'Cross-Browser Testing' },
  ],
  "Testing": [
    { name: 'Selenium WebDriver', iconPath: '/icons/selenium-svgrepo-com.svg' },
    { name: 'TestNG', iconPath: '/icons/testng.png' },
    { name: 'Jira', iconPath: '/icons/jira-1.svg' },
    { name: 'Postman', iconPath: '/icons/postman-icon-svgrepo-com.svg' },
    { name: 'Git/GitHub', iconPath: '/icons/github-sign.png' },
    { name: 'Figma', iconPath: '/icons/figma-icon.svg' },
  ],
  "Tools": [
    { name: 'Adobe Premiere Pro', iconPath: '/icons/adobe-premiere-svgrepo-com.svg' },
    { name: 'Adobe After Effects', iconPath: '/icons/adobe-after-effects-svgrepo-com.svg' },
    { name: 'Adobe Illustrator', iconPath: '/icons/adobe-illustrator-svgrepo-com.svg' },
    { name: 'Adobe Photoshop', iconPath: '/icons/photoshop-svgrepo-com.svg' },
  ],
  "Database": [
    { name: 'MySQL', iconPath: '/icons/mysql-4.svg' },
    { name: 'Oracle Database', iconPath: '/icons/oracle-6.svg' },
  ],
  "Personal Skills": [
    { name: 'Quick Learner' },
    { name: 'Communicative' },
    { name: 'Analytical Thinking' },
    { name: 'Multitasking' },
    { name: 'Synergistic' },
  ]
};

export const experienceData: Experience[] = [
  {
    company: 'Brain Station 23',
    title: 'SQA Engineer Trainee',
    date: 'Aug 2025 - Present',
    description: [
      'Performing manual and automated testing to ensure software quality and reliability.',
      'Developing and executing test plans, test cases, and test scripts.',
      'Identifying, documenting, and tracking bugs and issues to resolution.',
      'Collaborating with development teams to improve software quality and user experience.',
    ],
  },
  {
    company: 'Head Blocks',
    title: 'Trainee, Machine Learning',
    date: 'May 2023 - Sep 2023',
    description: [
      'Gained hands-on experience with machine learning algorithms and data processing.',
      'Assisted in developing and testing machine learning models.',
      'Collaborated with the team on data analysis and visualization tasks.',
    ],
  },
];

export const educationData: Education[] = [
  {
    institution: 'American International University-Bangladesh (AIUB)',
    degree: 'Bachelor of Science in Computer Science & Engineering',
    date: '2021 - 2025',
  },
];

export const certificationsData: Certification[] = [
  {
    issuer: 'Ostad',
    name: 'SQA Workshop for Absolute Beginners',
    date: '2025',
  },
  {
    issuer: 'Brain Station-23',
    name: 'Cybersecurity and Physical Protection',
    date: '2025',
  },
  {
    issuer: 'Brain Station-23',
    name: 'Digital Assets Security and Privacy',
    date: '2025',
  },
  {
    issuer: 'Brain Station-23',
    name: 'Prompt Engineering Foundations: Start Talking to Ai Efficiently',
    date: '2025',
  },
  {
    issuer: 'Brain Station-23',
    name: 'QMS: FIxed Price Project',
    date: '2025',
  },
  {
    issuer: 'Institute of Electrical and Electronics Engineers',
    name: 'IEEE Student Member',
    date: '2023',
  },
  {
    issuer: 'International Student-LED Conference',
    name: 'Champion, Undergraduate Student Activity Video Contest',
    date: '2023',
  },
  {
    issuer: 'IEEE',
    name: 'Organizer, Student Professional Awareness Venture (SPAVe) 7.0',
    date: '2024',
  },
  {
    issuer: 'Enhancing Digital Government and Economy-Edge (BCC)',
    name: '21st Century Employability Skilling Program – Advanced',
    date: '2023',
  },
  {
    issuer: 'Secondary Standard Dosimetry Laboratory (SSDL)',
    name: 'Scientific Visit',
    date: '2024',
  },
  {
    issuer: 'Headblocks',
    name: 'Trainee, Machine Learning',
    date: '2023',
  },
];
