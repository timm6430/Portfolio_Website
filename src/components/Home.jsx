import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className = 'w-full h-screen bg-[#186EF8]'>
        
        {/* Container 
            mx-auto: Centers container
        */}
        <div className = 'max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center'>

          <p className = 'text-2xl text-[#F8A218]'>Hello, my name is</p>

          <h1 className = 'text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Michael Timmerman
          </h1>

          <h2 className = 'text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            Welcome to my Website Portfolio
          </h2>

          <p className = 'text-lg text-black py-4 max-w-[700px]'>
            I'm a Computer Science graduate with over a year of professional experience analyzing space systems with an 
            emphasis on cost estimating. Equip with the skills to build websites, video games and other software applications.
            I'm an adaptable team player with strong analytical skills and a proven track record of working well with others to
            achieve success. I'm looking for a job as a web developer, software engineer, or data anaylst.
          </p>

          <div>
            <button className = 'text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F8A218] hover:border-[#F8A218]'>
              View Work
              <span className = 'group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className = 'ml-3 ' />
              </span>
            </button>
          </div>

        </div>
    </div>
  )
}

export default Home