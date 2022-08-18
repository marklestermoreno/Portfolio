import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import { FaSadTear } from 'react-icons/fa'
import { RiStarSmileFill } from 'react-icons/ri'

import { notification } from 'antd';

import { NavLink, Link } from 'react-router-dom'

import { motion } from 'framer-motion'

const Contacts = () => {

    const activeStyle = '2xl:text-xl lg:text-base md:flex md:text-[12px] hidden px-3 font-medium text-[#a1a1a1] hover:text-[#fe4066] hover:transition-colors duration-200'
    const notActive = '2xl:text-xl lg:text-base md:flex md:text-[12px] hidden px-3 text-white hover:text-[#fe4066] hover:transition-colors duration-200'

    const form1 = useRef();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)

    console.log(form)

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        emailjs.sendForm('service_0ld9o9e', 'template_u4489sh', form1.current, 'llaBp5MDHXXVueueG')
            .then(() => {
                notification.open({
                    icon: <> <RiStarSmileFill className='mt-8 text-green-500' />   </>,
                    message: <> <p className='text-green-500 text-lg'> Information Submitted </p> </>,
                    duration: 5,
                    description:
                        <p className='-mt-1'> Your response has been submitted <br /> I will contact you soon. Thank You!  </p>,
                })
                setLoading(false)
                navigate('/')
            }, (error) => {
                notification.open({
                    icon: <> <FaSadTear className='mt-8 text-red-500' />   </>,
                    message: <> <p className='text-red-500 text-lg'> There was an error </p> </>,
                    duration: 5,
                    description:
                        <p className='-mt-1'> Try Again later! or  <br /> contact me directly through my <br /> social media account </p>,
                })
                console.log(error.text);
                setLoading(false)
            });

    }

    const preventNumber = e => {
        if (e.which < 48 || e.which > 57) {
            e.preventDefault();
        }
    }

    return (
        <>
            {/*  Header */}
            <div>
                <motion.div animate={{ y: 0 }} initial={{ y: -200 }} transition={{ duration: 0.10 }} className='flex justify-between items-center text-center py-3 
                    sm:px-5 px-2 
                    bg-[#212224] text-white'>
                    <div className='flex justify-center items-center text-center'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/header-profile.png?alt=media&token=c8763ec5-7534-478b-9787-2711bc50ea7a' alt="profile-header" className='w-14 h-12 hover:brightness-110' />
                        <Link to='/'
                            className='px-3 hover:cursor-pointer text-white hover:text-white
                         sm:text-[13px] xsm:text-[10px] md:text-[15px] lg:text-base xxsm:text-[8px]
                         '> MARK LESTER MORENO
                        </Link>
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
                </motion.div>
            </div>

            {/*  Header */}

            <div className='py-10 flex flex-col justify-center text-center items-center'>
                <h1 className=' text-white text-4xl font-semibold'>Let's Connect</h1>
                <div className='flex lg:justify-center w-full md:px-16 xxsm:px-1 py-8'>
                    <motion.div animate={{ x: 0 }} initial={{ x: -1000 }} transition={{ duration: 0.5 }}
                        className='xxsm:hidden lg:flex h-[640px] 2xl:w-[650px] w-[500px] shadow-sm shadow-white bg-[#212224] mx-auto'>
                        <div className='flex flex-col m-auto p-auto'>
                            <div className='flex justify-center text-start items-start'>
                                <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/contact-profile.png?alt=media&token=75d70099-6192-4907-8255-a5b7a0d9c51c' alt='contact-profile'
                                    className=' w-[390px] p-5 rounded-lg hover:brightness-110 hover:cursor-cell' />
                            </div>
                            <h1 className='text-white text-[25px] tracking-wider'> Mark Lester P. Moreno </h1>
                            <h1 className='text-[#fe4066] text-[15px] -mt-4 mb-10'> Web Developer/UI Designer</h1>
                        </div>
                    </motion.div >
                    <motion.div animate={{ x: 0 }} initial={{ x: 1000 }} transition={{ duration: 0.5 }} className='md:h-[640px] xxsm:h-[700px] 2xl:w-[1000px] w-[850px] rounded-lg shadow-sm shadow-white bg-[#212224] mx-5
                            
                            p-10'>
                        <form onSubmit={handleSubmit} ref={form1}
                            autoComplete="off"
                            className='flex flex-col justify-start items-start text-left'>
                            <span className='text-base font-medium text-white '> Your Name </span>
                            <input type="text" disabled={loading}
                                name='user_name'
                                required onChange={(e) => setForm({ form, name: e.target.value })}
                                className='px-3 py-1.5 w-full rounded-md mt-3 font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#fe4066]  focus:invalid:border-red-500 focus:invalid:ring-red-500'
                                placeholder='Input Name' />

                            <span className='text-base font-medium text-white pt-5'> Phone Number </span>
                            <input type="text" maxLength={11}
                                name='user_number'
                                disabled={loading} onKeyPress={preventNumber}
                                required onChange={(e) => setForm({ form, phone: e.target.value })}
                                className='px-3 py-1.5 w-full rounded-md mt-3 font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#fe4066]  focus:invalid:border-red-500 focus:invalid:ring-red-500'
                                placeholder='Input Phone Number' />

                            <span className='text-base font-medium text-white pt-5'> Email </span>
                            <input type="email" disabled={loading}
                                name='user_email'
                                required onChange={(e) => setForm({ form, email: e.target.value })}
                                className='px-3 py-1.5 w-full rounded-md mt-3 font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#fe4066]  focus:invalid:border-red-500 focus:invalid:ring-red-500'
                                placeholder='Input Email Address' />

                            <span className='text-base font-medium text-white pt-5'> Subject </span>
                            <input type="text" disabled={loading}
                                name='user_subject'
                                required onChange={(e) => setForm({ form, subject: e.target.value })}
                                className='px-3 py-1.5 w-full rounded-md mt-3 font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#fe4066]  focus:invalid:border-red-500 focus:invalid:ring-red-500'
                                placeholder='Input Subject' />

                            <span className='text-base font-medium text-white pt-5'> Message </span>
                            <textarea rows="3" style={{
                                overflow: 'auto',
                                resize: 'none'
                            }}
                                name='user_message'
                                required disabled={loading} onChange={(e) => setForm({ form, message: e.target.value })}
                                className='px-3 py-1.5 w-full rounded-md mt-3 font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#fe4066]  focus:invalid:border-red-500 focus:invalid:ring-red-500'
                                placeholder='Input Message' />

                            <div className='flex sm:flex-row xxsm:flex-col justify-around w-full py-10 '>
                                <button type='reset' disabled={loading}
                                    className='border border-[#fe40066] text-lg text-white font-medium px-4 py-2 rounded-lg hover:scale-110 duration-150'>
                                    Reset
                                </button>
                                <br />
                                <button type='submit' disabled={loading}
                                    className={loading ?
                                        'bg-[#ff5577] text-white text-lg font-medium px-4 py-2 rounded-lg'
                                        :
                                        'bg-[#fe4066] text-white text-lg font-medium px-4 py-2 rounded-lg hover:scale-110 duration-150'
                                    }
                                >
                                    {loading ?
                                        'Sending ...'
                                        :
                                        'Send Email'
                                    }
                                </button>
                            </div>
                        </form>
                    </motion.div >
                </div>
            </div>
        </>
    )
}

export default Contacts