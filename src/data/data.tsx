import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';



import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import porfolioImage1 from '/images/portfolio/portfolio-1.jpeg';
// import porfolioImage2 from '/images/portfolio/portfolio-2.jpeg';
// import porfolioImage3 from '/images/portfolio/portfolio-3.jpeg';
// import porfolioImage4 from '/images/portfolio/portfolio-4.jpeg';
// import profilepic from '/images/Black&white.jpeg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
 
  TimelineItem,
} from './dataDef';
import { prefix } from '../config';


 


/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yashora Thiloni - Personal Website',
  description: 'Welcome to my personal website showcasing my portfolio, skills, and projects.',
};


/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
 
  imageSrc: '', 
  name: 'Yashora Thiloni',
  description: <span>Welcome to my personal website!</span>, 
  actions: [
    {
      href: `${prefix}/resume.pdf`,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};



/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: '/images/portfolio/myimage.jpg',
  description:`Hello! I’m currently navigating the exciting world of Information Technology as an undergraduate student at the University of Sri Jayawardenapura. With a solid foundation in both theoretical knowledge and practical experience, I aim to bridge the gap between technology and real-world solutions, particularly in the UI/UX field. In my free time, I enjoy spending quality moments with family and friends, watching movies, and listening to music.`,
  aboutItems: [
    {label: 'Age', text: 'Twenty Two', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Sri Lankan', Icon: FlagIcon}, 
    {label: 'Interests', text: 'UI/UX, Movies, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Sri Jayawardenapura', Icon: AcademicCapIcon},
    
  ],
};





/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken Languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Sinhala',
        level: 10,
      },
      {
        name: 'Tamil',
        level: 2,
      },
    ],
  },
  {
    name: 'UI/UX Design',
    skills: [
      {
        name: 'Figma',
        level: 7,
      },
      {
        name: 'Adobe XD',
        level: 5,
      },
      {
        name: 'Canva',
        level: 8,
      },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      {
        name: 'Communication',
        level: 9,
      },
      {
        name: 'Teamwork',
        level: 8,
      },
      {
        name: 'Problem-Solving',
        level: 8,
      },
      
    ],
  },
  {
    name: 'Project Management',
    skills: [
      {
        name: 'Trello',
        level: 6,
      },
      
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: '/images/portfolio/portfolio-1.jpeg',
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: '/images/portfolio/portfolio-2.jpeg',
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: '/images/portfolio/portfolio-3.jpeg',
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: '/images/portfolio/portfolio-4.jpeg',
  },
  
];

/**
 * Resume section 
 */
export const education: TimelineItem[] = [
  {
    date: 'Expected Graduation: 2026',
    location: 'University of Sri Jayawardenapura',
    title: 'Bachelor of Science in Information Technology',
    content: (
      <p>
        As an undergraduate student, I have gained a solid foundation in various aspects of information technology, including programming, database management, and user interface design. 
        This program has equipped me with both theoretical knowledge and practical skills, preparing me for a career in technology. I have developed a strong interest in UI/UX design, aiming to create engaging and user-friendly digital experiences.
      </p>
    ),
  },
  {
    date: 'Completed: [17.10.2022]',
    location: 'ESOFT Metro Campus',
    title: 'Diploma in Information Technology (Pearson Assured, UK)',
    content: (
      <p>
        This diploma program provided me with comprehensive training in essential IT skills, including software development, networking, and database management. 
        It has helped me build a solid foundation in information technology, enhancing my problem-solving abilities and preparing me for more advanced studies in the field.
      </p>
    ),
  },
  {
    date: 'Present: [02.06.2024]',
    location: 'SITC Campus',
    title: 'Diploma in Psychology',
    content: (
      <p>
        This diploma program is helping me understand the psychology behind user interactions, giving me the skills to design digital experiences that are intuitive and user-friendly. It’s a strong foundation for creating impactful UI/UX designs.
      </p>
    ),
  },
];


export const experience: TimelineItem[] = [
  {
    date: '2024 - Present',
    location: 'University of Sri Jayawardenapura',
    title: 'Bachelor of Science in Information Technology',
    content: (
      <p>
        Engaged in various projects focusing on programming, Web development, and OOP Concepts. 

      </p>
    ),
  },
 
  {
    date: '2024',
    location: 'Online Courses',
    title: 'Certifications in UI/UX Design',
    content: (
      <p>
        Completed multiple online courses focused on UI/UX design principles and best practices,In Linked In
      </p>
    ),
  },
];


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me via the channels below.',
  items: [
    {
      type: ContactType.Email,
      text: 'thilonikariyakarawana518@gmail.com',
      href: 'mailto:thilonikariyakarawana518@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Embilipitiya, Sri Lanka',
      href: 'https://maps.app.goo.gl/P3LXGM1CfcpqAUqe6', 
    },
    {
      type: ContactType.Instagram,
      text: 'yashora_thiloni',
      href: 'https://www.instagram.com/yashora_thiloni/?hl=en/', 
    },
    {
      type: ContactType.Github,
      text: 'thiloni0002', 
      href: 'https://github.com/Thiloni0002', 
    },
  ],
};

/**
 * Social items
 */

export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Thiloni0002'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/thiloni-kariyakarawana-0a0016311/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/yashora_thiloni/?hl=en/'},

];
