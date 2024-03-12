import React from 'react'
import HTML from '../assets/Images/html.png';
import CSS from '../assets/Images/css.png';
import JavaScript from '../assets/Images/javascript.png';
import ReactImg from '../assets/Images/react.png';
import GitHub from '../assets/Images/github.png';
import Tailwind from '../assets/Images/tailwind.png';
import CSharp from '../assets/Images/Csharp.png';
import Python from '../assets/Images/Python-logo.png'

const Skills = () => {
  return (
    <div name = 'skills' className='w-full h-full lg:px-[70px] md:px-[50px] px-10 bg-[#186EF8]'>
      {/*Container */}
      <div className='w-full max-w-[1920px] mx-auto py-4 flex flex-col justify-center'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#F8A218] text-black'>Skills</p>
          <p className='py-4'>These are the techologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src = {HTML} alt = 'HTML icon'/>
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src = {CSS} alt = 'CSS icon'/>
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src = {JavaScript} alt = 'JavaScript icon'/>
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src = {ReactImg} alt = 'React icon'/>
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src = {GitHub} alt = 'GitHub icon'/>
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src = {Tailwind} alt = 'Tailwind icon'/>
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src = {CSharp} alt = 'C# icon'/>
            <p className='my-4'>C#</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src = {Python} alt = 'Python icon'/>
            <p className='my-4'>Python</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills