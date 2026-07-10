
import type { Project, Skill, Experience, Volunteer, Education, Certification, SkillsByCategory } from './types';

export const personalData = {
  name: 'Abdullah Al Faisal',
  title: 'End-to-End Software Engineer',
  bio: `I build full digital products—from writing the code to testing it and leading the team that delivers it. I love being involved in the entire software lifecycle and believe I bring a complete package of knowledge to the table: developing software, ensuring top-tier quality, and managing Agile processes. My background in Quality Assurance means I focus heavily on making sure things don't break, while my experience as a Scrum Master helps me keep projects organized and on track. Ultimately, I just love turning good ideas into reliable software that people can depend on. In an ever-changing tech landscape, my guiding motto is simple: "It's not hard, it's just new." That mindset drives my passion for continuous learning and problem-solving.`,
  avatar: '/avatar.jpg',
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
    title: "BrushBook",
    description: "A modern full-stack web application built with Next.js and Supabase. Currently in development, focusing on delivering a seamless and responsive user experience.",
    technologies: ["Next.js", "Supabase", "React", "Web App"],
    image: '/projects/brushbook.png',
    image_hint: 'modern web application dashboard',
    links: {
      live: "https://brush-book.vercel.app/"
    }
  },
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
    { name: 'TypeScript', iconPath: '/icons/typescript.svg' },
    { name: 'Python', iconPath: '/icons/python.svg' },
    { name: 'Next.js', iconPath: '/icons/nextdotjs.svg' },
  ],
  "Methodologies & Concepts": [
    { name: 'Manual Testing' },
    { name: 'SDLC' },
    { name: 'STLC' },
    { name: 'Agile' },
    { name: 'Scrum Master' },
    { name: 'Defect Life Cycle' },
    { name: 'Test Plan' },
    { name: 'Test Cases' },
    { name: 'Bug Report' },
    { name: 'SRS' },
    { name: 'OOP' },
    { name: 'Cross-Browser Testing' },
    { name: 'Context Engineering' },
    { name: 'AIDLC' },
  ],
  "Testing": [
    { name: 'Selenium WebDriver', iconPath: '/icons/selenium-svgrepo-com.svg' },
    { name: 'Playwright', iconPath: '/icons/playwright.svg' },
    { name: 'TestNG', iconPath: '/icons/testng.png' },
    { name: 'Jira', iconPath: '/icons/jira-1.svg' },
    { name: 'Postman', iconPath: '/icons/postman-icon-svgrepo-com.svg' },
    { name: 'Git/GitHub', iconPath: '/icons/github-sign.png' },
  ],
  "Database": [
    { name: 'MySQL', iconPath: '/icons/mysql-4.svg' },
    { name: 'Oracle Database', iconPath: '/icons/oracle-6.svg' },
    { name: 'PostgreSQL', iconPath: '/icons/postgresql.svg' },
    { name: 'Supabase', iconPath: '/icons/supabase.svg' },
  ],
  "Tools": [
    { name: 'Figma', iconPath: '/icons/figma-icon.svg' },
    { name: 'Canva', iconPath: '/icons/canva.svg' },
    { name: 'Adobe Premiere Pro', iconPath: '/icons/adobe-premiere-svgrepo-com.svg' },
    { name: 'Adobe After Effects', iconPath: '/icons/adobe-after-effects-svgrepo-com.svg' },
    { name: 'Adobe Illustrator', iconPath: '/icons/adobe-illustrator-svgrepo-com.svg' },
    { name: 'Adobe Photoshop', iconPath: '/icons/photoshop-svgrepo-com.svg' },
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
    companyUrl: 'https://brainstation-23.com/',
    title: 'Associate SQA Engineer',
    date: 'Dec 2025 - Present',
    description: [
      'Build, maintain, and continuously enhance robust test automation suites and processes to empower development teams and ensure high-quality software delivery.',
      'Understand business logic and requirements to ensure the software behaves exactly according to defined business workflows.',
      'Create UAT documentation, including writing detailed test scenarios based on business rules.',
      'Follow the software development methodology (Agile/Scrum/Kanban) and collaborate closely with developers, product owners, and stakeholders.',
      'Provide support for emergency issues, ensuring timely response and resolution.',
      'Collaborating with development teams to improve software quality and user experience.',
      'Propose solutions or improvements to enhance system performance, usability, and stability.',
      'Act as Scrum Master to facilitate Agile processes, manage sprint ceremonies, remove blockers, and ensure smooth, efficient team collaboration.',
      'Work within the Artificial Intelligence Development Life Cycle (AIDLC) to ensure the quality, reliability, and smooth delivery of AI-integrated products.',
    ],
  },
  
  {
    company: 'Brain Station 23',
    companyUrl: 'https://brainstation-23.com/',
    title: 'SQA Engineer Trainee',
    date: 'Aug 2025 - Nov 2025',
    description: [
      'Performing manual testing to ensure software quality and reliability.',
      'Developing and executing test cases',
      'Identifying, documenting, and tracking bugs and issues to resolution.',
    ],
  },
  {
    company: 'Head Blocks',
    companyUrl: 'https://www.head-blocks.com/index.html',
    title: 'Trainee, Machine Learning',
    date: 'May 2023 - Sep 2023',
    description: [
      'Gained hands-on experience with machine learning algorithms and data processing.',
      'Assisted in developing and testing machine learning models.',
      'Collaborated with the team on data analysis and visualization tasks.',
    ],
  },
];
export const volunteerData: Volunteer[] = [
  {
    organization: 'IEEE AIUB Student Branch',
    organizationUrl: 'https://ieeeaiubsb.com/',
    role: 'Creative Team Lead',
    date: '2024 - 2025',
    description: [
      'Led the creative team responsible for designing and producing visual content for IEEE AIUB Student Branch events and campaigns.',
      'Coordinated with team members to maintain consistent branding and creative direction across all branch activities.',
      'Managed deadlines and deliverables for multiple concurrent projects and events.',
    ],
  },
   {
    organization: 'IEEE Microwave Theory and Techniques Society — AIUB SB Chapter',
    organizationUrl: 'https://ieeeaiubsb.com/',
    role: 'Chapter Chairperson',
    date: '2024 - 2025',
    description: [
      'Led the IEEE MTT-S AIUB Student Branch Chapter as Chairperson.',
      'Organized technical events, seminars, and workshops focused on microwave and RF engineering.',
      'Represented the chapter in inter-branch and national IEEE activities.',
      'Managed a team of executive members to achieve chapter goals and IEEE standards.',
    ],
  },
    {
    organization: 'IEEE Industry Applications Society — AIUB SB Chapter',
    organizationUrl: 'https://ieeeaiubsb.com/',
    role: 'Chapter Secretary',
    date: '2023 - 2024',
    description: [
      'Managed official chapter communications, documentation, and meeting records.',
      'Assisted in planning and organizing chapter events, workshops, and seminars.',
      'Coordinated between chapter members and IEEE branch leadership to ensure smooth operations.',
    ],
  },
  {
    organization: 'IEEE AIUB Student Branch',
    organizationUrl: 'https://ieeeaiubsb.com/',
    role: 'Volunteer — Video Editor',
    date: '2023 - 2024',
    description: [
      'Produced and edited promotional and recap videos for IEEE AIUB Student Branch events.',
      'Collaborated with the creative team to deliver high-quality video content within deadlines.',
    ],
  },
];

export const educationData: Education[] = [
  {
    institution: 'American International University-Bangladesh (AIUB)',
    institutionUrl: 'https://www.aiub.edu/',
    degree: 'Bachelor of Science in Computer Science & Engineering (Major in Software Engineering)',
    date: '2021 - 2025',
  },
  {
    institution: 'Shaheed Police Smrity College',
    institutionUrl: 'https://www.spsc.edu.bd/',
    degree: 'Higher Secondary Certificate',
    date: '2020',
  },
   {
    institution: 'Shaheed Police Smrity College',
    institutionUrl: 'https://www.spsc.edu.bd/',
    degree: 'Secondary School Certificate',
    date: '2018',
  },
];

export const certificationsData: Certification[] = [
  {
    issuer: 'Online Platform',
    name: 'Use of Claude Skill to Prepare AI Agents',
    date: '2026',
  },
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
