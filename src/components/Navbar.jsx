import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assests/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className = 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#F8A218] text-black'>
        <div>
            <img src = {Logo} alt = "Logo" style = {{width: '50px'}}/>
        </div>
        
        {/* menu*/}
            <ul className = 'hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

        {/* Hamburger*/}
        <div onClick = {handleClick} className = 'cursor-pointer md:hidden z-10'>
            {/* If !nav is true show bars, on click show X*/}
            {!nav ? <FaBars /> : <FaTimes /> }
        </div>

        {/* Moblie menu*/}
        {/* If !nav is true hide list, on click show list*/}
        <ul className = {!nav ? 'hidden' : 'absolute w-full h-screen top-0 left-0 bg-[#186EF8] flex flex-col justify-center items-center'}>
            <li className = 'py-6 text-4xl'> Home</li>
            <li className = 'py-6 text-4xl'> About</li>
            <li className = 'py-6 text-4xl'> Skills</li>
            <li className = 'py-6 text-4xl'> Work</li>
            <li className = 'py-6 text-4xl'> Contact</li>
        </ul>

        {/* Social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#001aff]'>
                    <a className = 'w-full flex justify-between items-center text-black' href = '/'>
                        Linkedin <FaLinkedin size = {30} />
                    </a>
                </li>
                <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#585858]'>
                    <a className = 'w-full flex justify-between items-center text-black' href = '/'>
                        GitHub <FaGithub size = {30} />
                    </a>
                </li>
                <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#47fff3]'>
                    <a className = 'w-full flex justify-between items-center text-black' href = '/'>
                        Email <HiOutlineMail size = {30} />
                    </a>
                </li>
                <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#438bdd]'>
                    <a className = 'w-full flex justify-between items-center text-black' href = '/'>
                        Resume <BsFillPersonLinesFill size = {30} />
                    </a>
                </li>
            </ul>
            
        </div>

    </div>
  )
}

export default Navbar