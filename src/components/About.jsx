import React from 'react'

const About = () => {
  return (
    <div name = 'about' className = 'w-full h-screen bg-[#186EF8] text-black'>
      <div className = 'w-full h-full flex flex-col justify-center items-center'>
        <div className = 'max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className = 'sm:text-right pb-8 pl-4'>
            <p className = 'text-4xl font-bold inline border-b-4 border-[#F8A218]'>
              About
            </p>
          </div>
        </div>
        <div className = 'max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className = 'sm:text-right text-4xl font-bold '>
            <p>
              Hello, I'm Michael, nice to meet you. Please take a look around
            </p>
          </div>
          <div>
            <p>
              I am a passionate software developer that enjoys to create websites and video games. I graduated from Pacific University
              in 2021 with a Bechalor's degree in Computer Science. I am also a former college althete who loves all types of sports, with an interest
              of learning more about data analytics as it is becoming a huge part of the modern game.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About