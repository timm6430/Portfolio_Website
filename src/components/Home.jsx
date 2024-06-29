import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name = 'home' className = 'w-full h-full pt-[60px] bg-[#186EF8]'>
        
        {/* Container 
            mx-auto: Centers container
        */}
        <div className = 'max-w-[1920px] mx-auto lg:px-[70px] md:px-[50px] px-10 flex flex-col justify-center'>

          <p className = 'text-2xl text-[#F8A218]'>Hello, my name is</p>

          <h1 className = 'text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Michael Timmerman
          </h1>

          <h2 className = 'text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            Welcome to my Website Portfolio
          </h2>

          <p className = 'text-lg text-black'>
          I'm a Computer Science graduate with over a year and a half of professional experience specializing in analyzing space systems data, with a focus on cost estimating. I've built this website to showcase my web development skills and highlight the diverse projects I've contributed to over the years.
          I'm constantly refining this site and exploring new ideas. Currently seeking new opportunities, I invite you to reach out via the contact form or email if you'd like to connect or learn more about my work.
          </p>

          <div className = 'max-w-[170px]'>
            <Link to='work' smooth={true} duration={500}>
              <button className = 'text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F8A218] hover:border-[#F8A218]'>
                  View Work
                <span className = 'group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className = 'ml-3 ' />
                </span>
              </button>
            </Link>
          </div>

        </div>
    </div>
  )
}

export default Home