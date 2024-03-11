import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name = 'home' className = 'w-full h-full pt-[60px] bg-[#186EF8]'>
        
        {/* Container 
            mx-auto: Centers container
        */}
        <div className = 'max-w-[1920px] mx-auto px-10 flex flex-col justify-center'>

          <p className = 'text-2xl text-[#F8A218]'>Hello, my name is</p>

          <h1 className = 'text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Michael Timmerman
          </h1>

          <h2 className = 'text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            Welcome to my Website Portfolio
          </h2>

          <p className = 'text-lg text-black max-w-[700px]'>
            I'm a Computer Science graduate with over a year of professional experience analyzing space systems with an 
            emphasis on cost estimating. I built this webite to show off my web development skills and the other projects,
            I've worked on throughout the years. I'm constanstly making changes to this website and testing new things in the experiment page.
            I'm looking for a job as a web or software developer, so if you like what you see and want to reach out, 
            go to the contact portion and fill out the form or send me an email.
          </p>

          <div className = 'max-w-[100px]'>
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