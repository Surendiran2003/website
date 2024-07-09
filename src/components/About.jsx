import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

    <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
      <div className='flex flex-col justify-around'>
        <div className='sm:px-16 px-2'>
          <h2 className='text-4xl sm:text-4xl font-extrabold mt-2'>Introduction</h2>
          <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Surendiran,I hold a Masters in Computer Science from Pondicherry University, and I have a strong background in Web development, Database, IOT based electronics projects and Software development.
          <br/><h2 className='text-4xl sm:text-3xl font-extrabold mt-2'>My Approach</h2><br/>
          ✍️ I believe in the power of continuous learning and strive to stay updated with the latest trends and technologies in the field of software development. I am a strong advocate for clean and efficient code, and I always aim to deliver high-quality solutions that exceed expectations.
          <h3 className='text-4xl sm:text-2xl font-extrabold mt-2'>My Cool Stuff</h3>I'm also an EX. Ncc Air wing cadet where I have learned a lot about the basics of aircraft and also flown twice as a co-pilot it was an amazing experince in my life. where it teached my desicpline of how a good citizen should.</p>
          <ButtonLink
            url='https://drive.google.com/file/d/10y4sL49Pku9oOlpkEOdJ_Nn3T0NA0aI-/view?usp=sharing'
            text='View Resume →'
            padding={`p-3`}
          />

        </div>
        <div className='mt-20 flex justify-center flex-wrap gap-7'>
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About;