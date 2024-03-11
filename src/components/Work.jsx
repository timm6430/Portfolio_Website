import React from 'react'
import ReactPlayer from 'react-player'
import Platformer from '../assets/Images/platformer.png'
import Boomshine from '../assets/Images/Boomshine.png'
import Minesweeper from '../assets/Images/minesweeper.png'
import BoomshineVideo from '../assets/Videos/Boomshine.mp4'
import MinesweeperVideo from '../assets/Videos/Minesweeper.mp4'

const Work = () => {
  return (
    <div name = 'work' className='w-full md:h-screen text-black bg-[#186EF8]'>
      <div className=' w-full h-full max-w-[1920px] mx-auto p-4 flex flex-col justify-center'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#F8A218] text-black'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* container for projects */}
          {/* Gird */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>

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
                  <a href="https://youtu.be/lAo_W4HHvzU?si=-uiI93wjm9slDtxj" target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg">Video</button>
                  </a>
                  <a href="https://github.com/timm6430/2D_Platformer" target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Gird Item */}
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
                <ReactPlayer width='100%' height ='100%' url={MinesweeperVideo} controls={true} />
                <a href="https://github.com/timm6430/Boomshine" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Gird Item */}
          <div style={{ backgroundImage: `url(${Boomshine})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">
            
              {/* Hover effect for images */}
              <div className='w-fit h-fit opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-white tracking-wider'>
                  Android Boomshine
                </span>

                {/* Buttons */}
                <ReactPlayer width='100%' height ='100%' url={BoomshineVideo} controls={true} />
                <a href="https://github.com/timm6430/Boomshine" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work