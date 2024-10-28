import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';
import {prefix} from '../../config';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const profileImageSrc = `${prefix}/myimage.jpg`;
  const {description, aboutItems} = aboutData;

  return (
    <Section className="bg-black" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
          <div className="relative h-[18rem] w-48 overflow-hidden rounded-2xl md:h-[20rem] md:w-64">
            <Image
              alt="about-me-image"
              className="object-cover" 
              src={profileImageSrc}
              quality={100}
              layout="fill" 
            />
          </div>
        </div>
        
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2 md:px-[4rem]">
            <h2 className="text-2xl font-bold text-white">About me</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:px-[4rem] md:pt-[4rem]">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className="text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
