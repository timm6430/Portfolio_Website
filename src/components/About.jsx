import React from 'react'
import Profile from '../assets/Images/IMG_1392.jpg'

const About = () => {
  return (
    <div name = 'about' className = 'w-full h-full lg:px-[70px] md:px-[50px] p-10 bg-[#ebebeb] text-black'>
      <div className = 'w-full h-full flex flex-col justify-center items-center'>
        <div className = 'max-w-[1920px] w-full'>
          <div className = 'pb-8'>
            <p className = 'text-4xl font-bold inline border-b-4 border-[#F8A218]'>
              About
            </p>
          </div>
        </div>
        <div className = 'max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div>
            <img src={Profile} alt="Profile Pic" className='rounded-full shadow-xl shadow-black'/>
          </div>
          <div className = 'text-xl'>
            <p>
            I'm a passionate software developer with a knack for working with data, crafting websites, developing video games, and building various software applications. I earned my Bachelor's degree in Computer Science from Pacific University in 2021.
            Beyond coding, I'm a dedicated sports enthusiast, particularly fond of football and hockey. My journey in sports began at the age of 4 and continued through college, instilling in me a strong team spirit and a relentless pursuit of improvement every day.
            Curious to learn more about me? Feel free to reach out via the contact form or email. I look forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About