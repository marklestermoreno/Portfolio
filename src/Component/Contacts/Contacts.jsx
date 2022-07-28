import React, {useState} from 'react'

import Profile from '../../assets/header-profile.png'
import Contact from '../../assets/contact-profile.png'

import { NavLink, Link } from 'react-router-dom'

const Contacts = () => {

    const activeStyle = '2xl:text-xl lg:text-base md:flex md:text-[12px] hidden px-3 font-medium text-[#a1a1a1] hover:text-[#fe4066] hover:transition-colors duration-200'
    const notActive = '2xl:text-xl lg:text-base md:flex md:text-[12px] hidden px-3 text-white hover:text-[#fe4066] hover:transition-colors duration-200'

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    })

    console.log(form)

    return (
        <>
            {/*  Header */}
            <div>
                <div className='flex justify-between items-center text-center py-3 
                    sm:px-5 px-2 
                    bg-[#212224] text-white'>
                    <div className='flex justify-center items-center text-center'>
                        <img src={Profile} alt="profile-header" className='w-14 h-12 hover:brightness-110' />
                        <a href='https://www.facebook.com/MLMoreno09'
                            className='px-3 hover:cursor-pointer text-white hover:text-white
                         sm:text-[13px] xsm:text-[10px] md:text-[15px] lg:text-base xxsm:text-[8px]
                         '> MARK LESTER MORENO
                        </a>
                    </div>
                    <Link to='/'
                        activeClass={activeStyle}
                        spy={true} smooth={true} offset={0} duration={500}
                        className={notActive}>
                        Home
                    </Link>

                    <Link to='/info' spy={true} smooth={true} offset={0} duration={500}
                        activeClass={activeStyle} className={notActive}>
                        Info
                    </Link>
                    <Link to='/experience' spy={true} smooth={true} offset={0} duration={500} activeClass={activeStyle} className={notActive}>
                        Experience
                    </Link>
                    <Link to='/portfolios' activeClass={activeStyle} className={notActive}>
                        Portfolios
                    </Link>
                    <Link to='/achivements' activeClass={activeStyle} className={notActive}>
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
                </div>
            </div>

            {/*  Header */}

            <div className='py-10 flex flex-col justify-center text-center items-center'>
                <h1 className=' text-white text-4xl font-semibold'>Let's Connect</h1>
                <div className='flex justify-center w-full px-24 py-8'>
                    <div className='h-[640px] w-[400px] rounded-lg shadow-sm shadow-white bg-[#212224] mx-5'>
                        <div className='flex flex-col'>
                            <div className='flex justify-center text-start items-start rounded-lg'>
                                <img src={Contact} alt='contact-profile'
                                    className='w-[340px] p-5 rounded-lg hover:brightness-110 hover:cursor-cell' />
                            </div>
                            <h1 className='text-white text-[25px] tracking-wider'> Mark Lester P. Moreno </h1>
                            <h1 className='text-[#fe4066] text-[15px] -mt-4'> Web Developer/UI Designer</h1>

                            <div className='flex flex-col pt-3 pl-5 '>
                                <div className='flex w-full'>
                                    <h1 className='w-1/5 text-[15px] text-[#fe4066]'>
                                        Phone
                                    </h1>
                                    <h1 className='w-4/5 text-[15px] text-white flex justify-start items-start text-left'>
                                        09089260456
                                    </h1>
                                </div>
                                <div className='flex w-full -mt-2'>
                                    <h1 className='w-1/5 text-[15px] text-[#fe4066]'>
                                        Email
                                    </h1>
                                    <h1 className='w-4/5 text-[15px] text-white flex justify-start items-start text-left'>
                                        marklestermoreno09@gmail.com
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[640px] w-[850px] rounded-lg shadow-sm shadow-white bg-[#212224] mx-5 p-10'>
                        <form className='flex flex-col justify-start items-start text-left'>
                            <span className='text-base font-medium text-white '> Your Name </span>
                            <input type="text" onChange={(e) => setForm({form, name: e.target.value})}
                            className='px-3 py-1.5 capitalize w-full rounded-md mt-3 font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#fe4066]  focus:invalid:border-red-500 focus:invalid:ring-red-500'
                                placeholder='Input Name' />

                            <span className='text-base font-medium text-white pt-5'> Phone Number </span>
                            <input type="number" onChange={(e) => setForm({form, phone: e.target.value})}
                            className='px-3 py-1.5 w-full rounded-md mt-3 font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#fe4066]  focus:invalid:border-red-500 focus:invalid:ring-red-500'
                                placeholder='Input Phone Number' />

                            <span className='text-base font-medium text-white pt-5'> Email </span>
                            <input type="email" onChange={(e) => setForm({form, email: e.target.value})}
                            className='px-3 py-1.5 w-full rounded-md mt-3 font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#fe4066]  focus:invalid:border-red-500 focus:invalid:ring-red-500'
                                placeholder='Input Email Address' />

                            <span className='text-base font-medium text-white pt-5'> Subject </span>
                            <input type="text" onChange={(e) => setForm({form, subject: e.target.value})}
                            className='px-3 py-1.5 w-full rounded-md mt-3 font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#fe4066]  focus:invalid:border-red-500 focus:invalid:ring-red-500'
                                placeholder='Input Subject' />

                            <span className='text-base font-medium text-white pt-5'> Message </span>
                            <textarea onChange={(e) => setForm({form, message: e.target.value})}
                            className='px-3 py-1.5 w-full rounded-md mt-3 font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#fe4066]  focus:invalid:border-red-500 focus:invalid:ring-red-500'
                                placeholder='Input Message' />

                            <div className='flex justify-around w-full py-10 '>
                                <button type='reset'
                                className='border border-[#fe40066] text-white font-medium px-4 py-2 rounded-lg hover:scale-110 duration-150'>
                                    Reset
                                </button>

                                <button className='bg-[#fe4066] text-white font-medium px-4 py-2 rounded-lg  hover:scale-110 duration-150'>
                                    Contact Me
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts