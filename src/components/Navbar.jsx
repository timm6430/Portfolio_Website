import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Images/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className = 'fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#144bff] text-black'>
        <div>
            <img src = {Logo} alt = "Logo" style = {{width: '50px'}}/>
        </div>
        
        {/* menu*/}
            <ul className = 'hidden md:flex font-bold'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

        {/* Hamburger*/}
        <div onClick = {handleClick} className = 'cursor-pointer md:hidden z-10'>
            {/* If !nav is true show bars, on click show X*/}
            {!nav ? <FaBars /> : <FaTimes /> }
        </div>

        {/* Moblie menu*/}
        {/* If !nav is true hide list, on click show list*/}
        <ul className = {!nav ? 'hidden' : 'absolute w-full h-screen top-0 left-0 bg-[#186EF8] flex flex-col justify-center items-center'}>
            <li className = 'py-6 text-4xl'> 
            <Link onClick = {handleClick} to='home' smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li className = 'py-6 text-4xl'> 
            <Link onClick = {handleClick} to='about' smooth={true} duration={500}>
                About
            </Link>
            </li>
            <li className = 'py-6 text-4xl'> 
            <Link onClick = {handleClick} to='skills' smooth={true} duration={500}>
                Skills
            </Link>
            </li>
            <li className = 'py-6 text-4xl'> 
            <Link onClick = {handleClick}to='work' smooth={true} duration={500}>
                Work
            </Link>
            </li>
            <li className = 'py-6 text-4xl'> 
            <Link onClick = {handleClick} to='contact' smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>

        {/* Social icons*/}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className = 'w-[80px] h-[40px] md:w-[135px] md:pr-1 lg:w-[160px] lg:h-[60px] lg:px-4 flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300  bg-[#001aff]'>
                    <a className = 'w-full  duration-300 flex justify-between items-center text-black' href = 'https://www.linkedin.com/in/michael-timmerman-230b60229' target="_blank" rel="noopener noreferrer">
                        Linkedin <FaLinkedin size = {30} />
                    </a>
                </li>
                <li className = 'w-[80px] h-[40px] md:w-[135px] md:pr-1 lg:w-[160px] lg:h-[60px] lg:px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#585858]'>
                    <a className = 'w-full  duration-300 flex justify-between items-center text-black' href = 'https://github.com/timm6430' target="_blank" rel="noopener noreferrer">
                        GitHub <FaGithub size = {30} />
                    </a>
                </li>
                <li className = 'w-[80px] h-[40px] md:w-[135px] md:pr-1 lg:w-[160px]  lg:h-[60px] lg:px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#47fff3]'>
                    <a className = 'w-full duration-300 flex justify-between items-center text-black' href = 'mailto:mdt21@verizon.net'>
                        Email <HiOutlineMail size = {30} />
                    </a>
                </li>
                <li className = 'w-[80px] h-[40px] md:w-[135px] md:pr-1 lg:w-[160px] lg:h-[60px] lg:px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#438bdd]'>
                    <a className = 'w-full duration-300 flex justify-between items-center text-black' href = 'https://drive.google.com/file/d/1FwgVdOPro5cz_ddlm1RdM0KuvkM0p-xZ/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                        Resume <BsFillPersonLinesFill size = {30} />
                    </a>
                </li>
            </ul>
            
        </div>

    </div>
  )
}

export default Navbar