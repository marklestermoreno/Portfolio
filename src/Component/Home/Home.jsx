import React, { useState } from 'react'
import Profile from '../../assets/profile.png'
import Typewriter from 'typewriter-effect';

import { Modal } from 'antd';

import file from '../../assets/marklestermoreno.pdf'

const Home = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <>
            <div className='flex justify-center pt-10' id='home'>
                <div className='text-white lg:text-[25px] flex-col pl-16 justify-start text-start items-start w-1/2 
                                    lg:pt-20 lg:pl-14 
                                    3xl:pl-20
                                    md:text-[17px] md:pl-7 md:pt-16
                                    sm:pl-8 sm:pt-16 
                                    xs:pl-5 xs:pt-14 xs:text-[12px]
                                    xsm:pl-4 xsm:pt-8 xsm:text-[8px] 
                                    xxsm:pl-2 xxsm:pt-6 xxsm:text-[6px] 
                '>
                    WELCOME TO MY WORLD
                    <br />
                    <span className='text-white font-semibold 
                                    2xl:text-[50px]
                                    lg:text-[40px]
                                    md:text-[30px] md:pt-3
                                    sm:text-[20px]
                                    xs:text-[15px]
                                    xsm:text-[10px]
                                    xxsm:text-[8px]    
                    '>
                        Hi, <span className='text-[#fe4066]'>I'm Mark Lester Moreno </span>
                    </span>
                    <p className='flex text-[#fe4066] text-[50px] font-semibold 
                                    2xl:text-[50px]
                                    lg:text-[40px]
                                    md:text-[30px] 
                                    sm:text-[20px]
                                    xs:text-[15px]
                                    xsm:text-[10px]
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
                    <p className='2xl:text-[20px] lg:text-[18px] md:text-[13px] sm:text-[10px] xs:text-[9px] xsm:text-[6px] xxsm:text-[5px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed lorem vitae nunc tincidunt
                        venenatis et non arcu. Ut sagittis ante in risus eleifend lobortis. Ut eros elit, bibendum et
                        metus ut, tincidunt lacinia urna. Etiam auctor aliquam magna, ac porttitor ipsum lobortis in.
                        Duis arcu velit, scelerisque sed massa vitae, lobortis euismod lorem. Aliquam nibh nisl, gravida
                        et metus et, sagittis ultrices sapien.
                    </p>
                    <a href={file} download="Mark Lester Moreno Curiculum Vitae"
                        className='bg-[#fe4066] flex justify-center text-white px-3 py-1  rounded-md 
                                        hover:bg-white hover:text-[#fe4066] hover:transition-color duration-300
                                        lg:text-lg lg:w-32 lg:mt-10
                                        md:text-[16px] md:w-28 md:mt-5
                                        xs:text-[10px] xs:w-1/2 xs:mt-5
                                        xsm:text-[8px] xsm:w-1/2 xsm:mt-3
                                        xxsm:text-[5px] xxsm:w-1/2 xxsm:mt-4
                                        '>
                        Download CV
                    </a>
                </div>
                <div className='flex justify-center text-start items-start w-1/2 xs:pl-10 xsm:pl-6 pt-4 pb-10'>
                    <img src={Profile} alt='profile' onClick={showModal}
                        className='2xl:w-[450px] lg:w-96 md:w-72 sm:w-60 xs:w-44 xsm:w-32 xxsm:w-24 rounded-lg shadow-md hover:brightness-110 hover:cursor-cell' />
                </div>
            </div>

            <Modal title={false} footer={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <img src={Profile} alt='profile' onClick={showModal}
                    className='w-[550px] rounded-lg shadow-md hover:brightness-110' />
            </Modal>
        </>
    )
}

export default Home