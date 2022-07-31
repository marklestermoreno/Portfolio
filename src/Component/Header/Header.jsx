import React from 'react'

// Images and Icons
import Profile from '../../assets/header-profile.png'

// Misc
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

import { motion } from 'framer-motion'


const Header = () => {

    const activeStyle = '2xl:text-xl lg:text-base md:flex md:text-[12px] hidden px-3 font-medium text-[#a1a1a1] hover:text-[#fe4066] hover:transition-colors duration-200'
    const notActive = '2xl:text-xl lg:text-base md:flex md:text-[12px] hidden px-3 text-white hover:text-[#fe4066] hover:transition-colors duration-200'

    return (
        <>
            <motion.div animate={{ y: 0 }} initial={{ y: -200 }} transition={{ duration: 0.10}}
            className='flex justify-between items-center text-center py-3 
                    sm:px-5 px-2 
                    bg-[#212224] text-white'>
                <div className='flex justify-center items-center text-center'>
                    <img src={Profile} alt="profile-header" className='w-14 h-12 hover:brightness-110' />
                    <NavLink to='/'
                        className='px-3 hover:cursor-pointer text-white hover:text-white
                         sm:text-[13px] xsm:text-[10px] md:text-[15px] lg:text-base xxsm:text-[8px]
                         '> MARK LESTER MORENO
                    </NavLink>
                </div>
                <Link to='home' 
                activeClass={activeStyle}
                spy={true} smooth={true} offset={0} duration={500} 
                className={notActive}>
                    Home
                </Link>

                <Link to='info' spy={true} smooth={true} offset={0} duration={500} 
                activeClass={activeStyle} className={notActive}>
                    Info
                </Link>
                <Link to='experience' spy={true} smooth={true} offset={0} duration={500}  activeClass={activeStyle} className={notActive}>
                    Experience
                </Link>
                <Link to='portfolios'   spy={true} smooth={true} offset={0} duration={500}  activeClass={activeStyle} className={notActive}>
                    Portfolios
                </Link>
                <Link to='achievements'   spy={true} smooth={true} offset={0} duration={500}  activeClass={activeStyle} className={notActive}>
                    Achievements
                </Link>
                <div className='flex justify-center items-center text-center px-3'>
                    <NavLink to='/contacts' className='bg-[#fe4066] text-white px-3 py-1 rounded-md 
                                        hover:bg-white hover:text-[#fe4066] hover:transition-color duration-300
                                        lg:text-lg text-[12px] 
                                        sm:text-[12px]
                                        xxsm:text-[8px]
                                        '>
                        Let's Connect
                    </NavLink>
                </div>
            </motion.div>
            
        </>
    )
}

export default Header