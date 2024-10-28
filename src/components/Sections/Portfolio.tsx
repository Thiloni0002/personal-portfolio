import Image from 'next/image';
import { FC, memo } from 'react';

import { SectionId } from '../../data/data';
import Section from '../Layout/Section';
import { prefix } from '../../config';

const portfolioItems = [
  {
    title: 'Hospital Management System',
    description: 'A group project using Java to build a system for managing hospital data, including patient records, appointments, and staff management.',
    url: 'https://github.com/NiromiKaumini/--Hospital_Manegement_systemHospital-Manegement-system',
    image: `${prefix}/images/portfolio/portfolio-1.jpeg`,
  },
  {
    title: 'Wildlife Explorer Website',
    description: 'A wildlife-themed website built using Next.js and Tailwind CSS, showcasing different habitats like rivers, oceans, forests, and mountains.',
    url: 'https://github.com/FHSS-USJ/assignment-01-Thiloni0002',
    image: `${prefix}/images/portfolio/portfolio-2.jpeg`,
  },
  {
    title: 'Movie Explorer App',
    description: 'A movie exploration app built using Next.js and the OMDb API, allowing users to search for movies and view details.',
    url: 'https://github.com/FHSS-USJ/assignment-02-Thiloni0002',
    image: `${prefix}/images/portfolio/portfolio-3.jpeg`,
  },
  {
    title: 'Personal Website',
    description: 'A personal portfolio website built using Next.js, designed to showcase my skills, projects, and experiences.',
    url: 'https://github.com/FHSS-USJ/assignment-02-Thiloni0002',
    image: `${prefix}/images/portfolio/portfolio-4.jpeg`,
  },
];


const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="relative bg-white p-3 rounded-lg shadow-md">
              <div className="w-[300px] h-[300px] relative">
                <Image
                  alt={item.title}
                  src={item.image}
                  fill // This will make the image fill the container (use with relative parent div)
                  className="rounded-lg object-cover" // Ensures the image covers the entire container while keeping the aspect ratio
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 mb-4 text-center w-[100%] inline-block text-blue-500 hover:underline"
              >
                <span className='text-center font-bold'>View Project</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
