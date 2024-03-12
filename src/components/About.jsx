import React from 'react'
import Profile from '../assets/Images/profile_pic.png'

const About = () => {
  return (
    <div name = 'about' className = 'w-full h-full lg:px-[70px] md:px-[50px] px-10 bg-[#186EF8] text-black'>
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
              I am a passionate software developer who enjoys to create websites, video games and other software applications. 
              I graduated from Pacific University in 2021 with a Bechalor's degree in Computer Science. I am also a sports fanatic, with my favorites
              being football and hockey. I started playing sports at 4 years old and continued my athletic career through college. I am a great team player
              with the mindset of getting better each and every day. If you would like to know more about me, be sure to fill out a form or send me an email.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About