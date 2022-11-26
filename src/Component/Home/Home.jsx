import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import { AiFillCloseCircle, AiFillAndroid } from 'react-icons/ai'
import { MdOutlineDocumentScanner } from 'react-icons/md'
import Typewriter from 'typewriter-effect';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


import { motion } from 'framer-motion'
import './modal.css'


const Home = () => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }

    const images = [
        {
            original: 'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/profile%2F01.jpg?alt=media&token=2b307540-cc96-43a6-b8e4-88d68af4a2b7',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/profile%2F01.jpg?alt=media&token=2b307540-cc96-43a6-b8e4-88d68af4a2b7',
        },
        {
            original: 'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/profile%2F02.jpg?alt=media&token=ad11619f-bb95-4a17-9194-f6c0001b666a',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/profile%2F02.jpg?alt=media&token=ad11619f-bb95-4a17-9194-f6c0001b666a',
        },
        {
            original: 'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/profile%2F03.png?alt=media&token=7f516a98-baf0-47fa-9578-a091ea28254d',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/profile%2F03.png?alt=media&token=7f516a98-baf0-47fa-9578-a091ea28254d',
        },
        {
            original: 'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/profile%2F04.png?alt=media&token=a4b0e98b-4f97-4a62-a98a-8e86de601f8b',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/profile%2F04.png?alt=media&token=a4b0e98b-4f97-4a62-a98a-8e86de601f8b',
        },
        {
            original: 'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/profile%2F05.jpg?alt=media&token=555bf4a1-5374-411e-8713-d43334da1eef',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/profile%2F05.jpg?alt=media&token=555bf4a1-5374-411e-8713-d43334da1eef',
        },

    ];

    const cvThemeLink = document.createElement('a');
    cvThemeLink.href = "https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/Moreno%2C%20Mark%20Lester%20-%20CV%20(Theme).pdf?alt=media&token=3246f232-ad6c-4075-bb49-df0c0825df77";
    document.body.appendChild(cvThemeLink);

    const cvWhiteLink = document.createElement('a');
    cvWhiteLink.href = "https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/Moreno%2C%20Mark%20Lester%20-%20CV%20(Plain).pdf?alt=media&token=b2e89fda-0ce7-4539-b1bc-37f762bcbbde";
    document.body.appendChild(cvWhiteLink);

    const resumeLink = document.createElement('a');
    resumeLink.href = "https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/MORENO%2C%20MARK%20LESTER%20-%20RESUME.pdf?alt=media&token=03978fe4-c278-4236-8324-0cfd68dea55c";
    document.body.appendChild(resumeLink);

    const resume = () => {
        confirmAlert({
            title: <p className='font-bold'> Resume or Curriculum Vitae </p>,
            message: <p className='font-medium'> What document will you download? </p>,
            buttons: [
                {
                    label: "Theme CV",
                    onClick: () => cvThemeLink.click()
                },
                {
                    label: "Plain CV",
                    onClick: () => cvWhiteLink.click()
                },
                {
                    label: "Resume",
                    onClick: () => resumeLink.click()
                },

            ]
        })
    }

    document.body.removeChild(cvThemeLink);
    document.body.removeChild(cvWhiteLink);
    document.body.removeChild(resumeLink);

    // APK

    const apk = document.createElement('a');
    apk.href = "https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/MLMoreno.apk?alt=media&token=442f20e9-1643-422e-9a5a-cdbfec76c8a8";
    document.body.appendChild(apk);

    const downloadApk = () => {
        confirmAlert({
            title: <p className='font-bold'> Download for Android </p>,
            message:
                <div className='mb-5'>
                    <p className='font-medium text-justify'>
                        <b> Reminder: </b><span> Due to Google Play Store Developer Fee of $25 you may
                            encounter problem installing the application since Google detects it as unwanted app.
                            If you encounter problem installing, <b> go to settings and search for Google Play Protect and disable it while installing </b>
                        </span> </p>
                    <p className='font-medium text-justify'>
                        <b> Note: </b> <span> I accept responsibility for any breach of personal information and any harmful event caused by this application.
                        </span> </p>
                </div>,
            buttons: [
                {
                    label: "Download",
                    onClick: () => apk.click()
                },
            ]
        })
    }

    document.body.removeChild(apk);

    return (
        <>
            <div className='flex justify-center pt-10' id='home'>
                <motion.div animate={{ x: 0 }} initial={{ x: -1000 }} transition={{ duration: 0.5 }}

                    className='text-white lg:text-[25px] flex-col pl-16 justify-start text-start items-start w-1/2 
                                    lg:pt-20 lg:pl-14 
                                    3xl:pl-20
                                    md:text-[17px] md:pl-7 md:pt-16
                                    sm:pl-8 sm:pt-10 
                                    xs:pl-5 xs:pt-2 xs:text-[12px]
                                    xsm:pl-4 xsm:pt-0 xsm:text-[10px] 
                                    xxsm:pl-2 xxsm:pt-0 xxsm:text-[6px] 
                '>
                    WELCOME TO MY WORLD
                    <br />
                    <span className='text-white font-semibold 
                                    2xl:text-[50px]
                                    lg:text-[40px]
                                    md:text-[30px] md:pt-3
                                    sm:text-[20px]
                                    xs:text-[15px]
                                    xsm:text-[12px]
                                    xxsm:text-[8px]    
                    '>
                        Hi, <span className='text-[#fe4066] hover:cursor-pointer' onClick={toggleModal}>I'm Mark Lester Moreno </span>
                    </span>
                    <p className='flex text-[#fe4066] text-[50px] font-semibold 
                                    2xl:text-[50px]
                                    lg:text-[40px]
                                    md:text-[30px] 
                                    sm:text-[20px]
                                    xs:text-[15px]
                                    xsm:text-[12px]
                                    xxsm:text-[8px]
                                                                        '
                    >
                        a <span className='text-white sm:pl-2 xs:pl-1 xsm:pl-1 xxsm:pl-1'>
                            <Typewriter
                                options={{
                                    strings: [
                                        'Professional Developer', 'UI/UX Developer',
                                        'Professional Programmer', 'Computer Technician'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </p>
                    <p className='2xl:text-[20px] lg:text-[18px] md:text-[13px] sm:text-[10px] xs:text-[9px] xsm:text-[8px] xxsm:text-[5px]'>


                        A graduate of Bachelor of Information Communication and Technology and Associate Degree of Diploma in Information Communication and Technology
                        at Polytechnic University of the Philippines - Sta Mesa who seek a position as an IT Professional to develop my skills and experience
                        further while helping the company in creating the best web app and maintaining their computer system

                    </p>
                    <div className='flex md:flex-row xxsm:flex-col md:justify-center'>
                        <button onClick={resume}
                            className='bg-[#fe4066] flex justify-center text-white xs:py-2 xxsm:py-1  rounded-md 
                                        hover:bg-white hover:text-[#fe4066] hover:transition-color duration-300
                                        lg:text-lg lg:w-48 lg:mt-10 lg:mr-6
                                        md:text-[14px] md:w-44 md:mt-5 md:mr-6
                                        xs:text-[10px] xs:w-full xs:mt-5
                                        xsm:text-[8px] xsm:w-full xsm:mt-1
                                        xxsm:text-[5px] xxsm:w-full xxsm:mt-1
                                        '>
                            <span className='md:pt-[5px] xsm:pt-[3px] xxsm:pt-[1.5px] xxsm:pr-1 pr-2'> <MdOutlineDocumentScanner /> </span> Download Resume
                        </button>
                        <div>
                            <button onClick={downloadApk}
                                className='bg-white flex justify-center text-[#111213] px-3 xs:py-2 xxsm:py-1 rounded-md 
                                        hover:bg-[#111213] hover:text-[#fe4066] hover:transition-color duration-300
                                        lg:text-lg lg:w-56 lg:mt-10 lg:ml-6 
                                        md:text-[14px] md:w-44 md:mt-5
                                        xs:text-[10px] xs:w-full xs:mt-5
                                        xsm:text-[8px] xsm:w-full xsm:mt-2
                                        xxsm:text-[5px] xxsm:w-full xxsm:mt-2
                                        '>
                                <span className='md:pt-[5px] xsm:pt-[3px] xxsm:pt-[1.5px] xxsm:pr-1 pr-2'> <AiFillAndroid /> </span> Download for Android
                            </button>
                        </div>
                    </div>
                </motion.div>
                <motion.div animate={{ x: 0 }} initial={{ x: 1000 }} transition={{ duration: 0.5 }}
                    className='flex justify-center text-start items-start w-1/2 xs:pl-10 xsm:pl-6 xs:pt-4 xsm:pt-0  pb-10'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/profile-02.png?alt=media&token=855c4773-19b7-4d59-8daf-876e827e7c86' alt='profile' onClick={toggleModal}
                        className='2xl:w-[450px] lg:w-96 md:w-72 sm:w-60 xs:w-48 xsm:w-40 xxsm:w-24 rounded-lg shadow-md hover:brightness-110 hover:cursor-pointer' />
                </motion.div >
            </div>

            {/* Popup box */}
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay' ></div>
                    <div className=' modal-content 
                    flex flex-col items-center duration-200 hide-scrollbar overflow-y-auto scrollbar-hide '>

                        <div className='mx-10 xs:ml-10 xsm:ml-6 xxsm:ml-4'>
                            <h1>
                                <a href='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/marklestermoreno.pdf?alt=media&token=5e794807-c88a-4de4-870c-0b0bef9744bb' download="Mark Lester Moreno Curiculum Vitae"
                                    className='text-[#fe4066] 
                                    lg:text-[35px]
                                    2xl:text-[45px]
                                    md:text-[30px]
                                    sm:text-[20px]
                                    xsm:text-[12px]
                                    xxsm:text-[7px] xxsm:-mt-10
                                    font-semibold hover:text-[#fe4066]'>
                                    Mark Lester Moreno
                                </a>
                            </h1>
                            <p className='lg:text-lg
                                         md:text-[15px]
                                         2xl:text-[20px]
                                         sm:text-[13px]
                                         xs:text-[9px] xs:-mt-0
                                         xsm:text-[7px] xsm:-mt-2
                                         xxsm:text-[5px] xxsm:-mt-2
                            '> "The Hardest Choices Require The Strongest Wills" - Thanos</p>
                            <p className='lg:text-[15px] 
                                         md:text-[13px]
                                         2xl:text-[20px]
                                         sm:text-[11px]
                                         xs:text-[9px]
                                         xsm:text-[7px] 
                                         xxsm:text-[5px]
                            font-thin'> Hi! My name is Mark Lester Moreno an <b> a 4th year PUP graduate student </b> who seek a position as an IT Professional to develop my skills and experience further while helping the company in creating the best web app and maintaining
                                their computer system </p>
                            <div className='grid overflow-hidden grid-cols-3 grid-rows-2 pt-2'>
                                <p className='box row-start-1 row-end-1 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-semibold'> Email </p>
                                <p className='box row-start-1 row-end-1 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-thin'> marklestermoreno09@gmail.com </p>
                                <p className='box row-start-2 row-end-2 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-semibold'> Facebook </p>
                                <p className='box row-start-2 row-end-2 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-thin'> https://www.facebook.com/MLMoreno09 </p>
                                <p className='box row-start-3 row-end-3 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-semibold'> Github </p>
                                <p className='box row-start-3 row-end-3 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-thin'> https://github.com/marklestermoreno </p>
                                <p className='box row-start-4 row-end-4 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-semibold'> Linkedin </p>
                                <p className='box row-start-4 row-end-4 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-thin'> https://www.linkedin.com/in/mark-lester-moreno-6a06a6219/ </p>
                                <p className='box row-start-5 row-end-6 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-semibold'> Contact No: </p>
                                <p className='box row-start-5 row-end-6 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-thin'> 09089260456 or 847-837-41 </p>
                            </div>
                            <div className='grid overflow-hidden grid-cols-3 grid-rows-2 pt-4 pb-4'>
                                <p className='box row-start-1 row-end-1 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-semibold'> Birthdate</p>
                                <p className='box row-start-1 row-end-1 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-thin capitalize'> January 9, 2001 (21 Years Old) </p>
                                <p className='box row-start-2 row-end-2 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-2 xxsm:-mt-0 font-semibold'> Birthplace </p>
                                <p className='box row-start-2 row-end-2 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-2 xxsm:-mt-0 font-thin capitalize'> Malanday, Marikina City </p>
                                <p className='box row-start-3 row-end-3 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-3 xxsm:-mt-0 font-semibold'> Blood Type </p>
                                <p className='box row-start-3 row-end-3 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-3 xxsm:-mt-0 font-thin capitalize'> 0 </p>
                                <p className='box row-start-4 row-end-4 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-2 xxsm:-mt-0 font-semibold'> Height and Weight </p>
                                <p className='box row-start-4 row-end-4 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-2 xxsm:-mt-0 font-thin capitalize'> 170cm - 65kg </p>
                                <p className='box row-start-5 row-end-5 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-2 xxsm:-mt-0 font-semibold'> Nationality </p>
                                <p className='box row-start-5 row-end-5 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-2 xxsm:-mt-0 font-thin capitalize'> Filipino </p>
                                <p className='box row-start-6 row-end-6 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-2 xxsm:-mt-0 font-semibold'> Hobbies </p>
                                <p className='box row-start-6 row-end-6 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-2 xxsm:-mt-0 font-thin capitalize'> Creating Music, Dancing, Playing NBA2k  </p>
                                <p className='box row-start-7 row-end-7 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-2 xxsm:-mt-0 font-semibold'> Weaknesses </p>
                                <p className='box row-start-7 row-end-7 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-2 xxsm:-mt-0 font-thin capitalize'> Jack of all trades, Pessimistic  </p>
                                <p className='box row-start-8 row-end-8 col-start-1 col-end-1 text-[#fe4066] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-2 xxsm:-mt-0 font-semibold'> Strength </p>
                                <p className='box row-start-8 row-end-8 col-start-2 col-end-4 text-[#111213] 2xl:text-[20px] xxsm:text-[5px] xsm:text-[7px] xs:text-[9px] lg:text-[15px] md:text-[13px] sm:text-[11px] sm:-mt-2 xxsm:-mt-0 font-thin capitalize'> Tenacious, Competitive </p>
                            </div>
                            <div className='modal-text right'>
                                <button className='close-modal btn_shadow xxsm:hidden xs:flex' onClick={toggleModal}>
                                    <AiFillCloseCircle size={30} />
                                </button>
                            </div>
                        </div>
                        <div className='sm:py-5 xxsm:py-2'>
                            <ImageGallery
                                className='rounded-lg'
                                items={images}
                                showFullscreenButton={true}
                                autoPlay showPlayButton={false}
                                showNav={false} />
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Home