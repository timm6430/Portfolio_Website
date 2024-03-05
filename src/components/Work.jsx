import React from 'react'
import Platformer from '../assets/platformer.png'
import Boomshine from '../assets/Boomshine.png'
import Minesweeper from '../assets/minesweeper.png'

const Work = () => {
  return (
    <div name = 'work' className='w-full md:h-screen text-black bg-[#186EF8]'>
      <div className=' w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#F8A218] text-black'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* container for projects */}
          {/* Gird Item */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Gird Item */}
          <div style={{ backgroundImage: `url(${Platformer})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">
            <div className='shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div'>

              {/* Hover effect for images */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-white tracking-wider'>
                  2d Platformer
                </span>

                {/* Buttons */}
                <div className='pt-8 text-center'>

                  {/* Link to project */}
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg">Video</button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Minesweeper})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">
            <div className='shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div'>

              {/* Hover effect for images */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-white tracking-wider'>
                  Android Minesweeper
                </span>

                {/* Buttons */}
                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg">Video</button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Boomshine})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">
            <div className='shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div'>

              {/* Hover effect for images */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-white tracking-wider'>
                  Android Boomshine
                </span>

                {/* Buttons */}
                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg">Video</button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work