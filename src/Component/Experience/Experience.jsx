import React from 'react';
import { Tabs } from 'antd';

import { BiCaretRight } from 'react-icons/bi'

const { TabPane } = Tabs;

const Experience = () => {
    return (
        <>
            <div className='flex flex-col py-5 sm:mx-3 xsm:mx-2  xxsm:mx-0' id='experience'>
                <h1 className=' text-white lg:text-[30px] md:text-[25px] sm:text-[20px] mx-5'> Educational Attainment </h1>
                <div className='text-white flex lg:px-12  md:px-10 sm:px-5 xs:px-3 xxsm:px-0 py-10'>
                    <Tabs tabPosition='left' className='w-full duration-100'>
                        <TabPane tab={<span className='text-start items-start flex justify-start 
                                            lg:text-base
                                            md:text-sm 
                                            sm:text-[10px] 
                                            xs:text-[8px] 
                                            xsm:text-[6px]
                                            xxsm:text-[4px]'> Polytechnic University of <br /> the Philippines - Sta Mesa</span>} key='1' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='text-white 
                                            lg:text-[21px] 
                                            md:text-[15px] 
                                            sm:text-[11px]
                                            xs:-ml-0 xs:text-[10px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:mt-4 
                                            xsm:-ml-10 xsm:-mr-10  xsm:text-[8px] 
                                            font-semibold'> Diploma in Information Communication and Technology </h1>
                                <p className='lg:text-sm 
                                            md:text-[12px] 
                                            sm:text-[10px] 
                                            xs:-ml-0 
                                            xsm:text-[6px]
                                            xxsm:-ml-10 xxsm:text-[4px]
                                            pb-5
                                            '> June 2019 - August 2022 </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus.
                                        Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu
                                        tristique maximus, ultrices non erat
                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus.
                                        Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu
                                        tristique maximus, ultrices non erat
                                    </span>
                                </p>
                            </div>
                        </TabPane>
                        <TabPane tab={<span className='text-start items-start flex justify-start 
                                            lg:text-base 
                                            md:text-sm 
                                            sm:text-[10px] 
                                            xs:text-[8px] 
                                            xsm:text-[6px]
                                            xxsm:text-[4px]'> (Systems Technology Institute) <br /> STI College Marikina </span>} key='2' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='text-white 
                                            lg:text-[21px] 
                                            md:text-[15px] 
                                            sm:text-[11px]
                                            xs:-ml-0 xs:text-[10px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:mt-4 
                                            xsm:-ml-10 xsm:-mr-10  xsm:text-[8px] 
                                            font-semibold'> Mobile App and Web Development (MAWD) </h1>
                                <p className='lg:text-sm 
                                            md:text-[12px] 
                                            sm:text-[10px] 
                                            xs:-ml-0 
                                            xsm:text-[6px]
                                            xxsm:-ml-10 xxsm:text-[4px]
                                            pb-5
                                            '> June 2017 - March 2019 </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus.
                                        Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu
                                        tristique maximus, ultrices non erat
                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus.
                                        Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu
                                        tristique maximus, ultrices non erat
                                    </span>
                                </p>
                            </div>
                        </TabPane>
                        <TabPane tab={<span className='text-start items-start flex justify-start 
                                            lg:text-base 
                                            md:text-sm 
                                            sm:text-[10px] 
                                            xs:text-[8px] 
                                            xsm:text-[6px]
                                            xxsm:text-[4px]'> General Licerio Geronimo <br /> Memorial National High Schhol </span>} key='3' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='text-white 
                                            lg:text-[21px] 
                                            md:text-[15px] 
                                            sm:text-[11px]
                                            xs:-ml-0 xs:text-[10px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:mt-4 
                                            xsm:-ml-10 xsm:-mr-10  xsm:text-[8px] 
                                            font-semibold'> Junior High School (Grade 8 - Grade 10) </h1>
                                <p className='lg:text-sm 
                                            md:text-[12px] 
                                            sm:text-[10px] 
                                            xs:-ml-0 
                                            xsm:text-[6px]
                                            xxsm:-ml-10 xxsm:text-[4px]
                                            pb-5
                                            '> June 2017 - March 2019 </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus.
                                        Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu
                                        tristique maximus, ultrices non erat
                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus.
                                        Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu
                                        tristique maximus, ultrices non erat
                                    </span>
                                </p>
                            </div>
                        </TabPane>
                    </Tabs>

                </div>
                <h1 className=' text-white lg:text-[30px] md:text-[25px] sm:text-[20px] mx-5'> Experience </h1>
                <div className='text-white flex lg:px-12  md:px-10 sm:px-5 xs:px-3 xxsm:px-0 py-10'>
                    <Tabs tabPosition='left' className='w-full duration-100'>
                        <TabPane tab={<span className='text-start items-start flex justify-start 
                                            lg:text-base
                                            md:text-sm 
                                            sm:text-[10px] 
                                            xs:text-[8px] 
                                            xsm:text-[6px]
                                            xxsm:text-[4px]'> Freelance Developer/Editor, <br /> Computer Technician </span>} key='1' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='text-white 
                                            lg:text-[21px] 
                                            md:text-[15px] 
                                            sm:text-[11px]
                                            xs:-ml-0 xs:text-[10px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:mt-4 
                                            xsm:-ml-10 xsm:-mr-10  xsm:text-[8px] 
                                            font-semibold'> Freelance Developer/Editor, Computer Technician </h1>
                                <p className='lg:text-sm 
                                            md:text-[12px] 
                                            sm:text-[10px] 
                                            xs:-ml-0 
                                            xsm:text-[6px]
                                            xxsm:-ml-10 xxsm:text-[4px]
                                            pb-5
                                            '> January 2019 - Present </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus.
                                        Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu
                                        tristique maximus, ultrices non erat
                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus.
                                        Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu
                                        tristique maximus, ultrices non erat
                                    </span>
                                </p>
                            </div>
                        </TabPane>
                        <TabPane tab={<span className='text-start items-start flex justify-start 
                                            lg:text-base 
                                            md:text-sm 
                                            sm:text-[10px] 
                                            xs:text-[8px] 
                                            xsm:text-[6px]
                                            xxsm:text-[4px]'> Polytechnic University of <br /> the Philippines - 2nd Internship
                                            </span>} key='2' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='text-white 
                                            lg:text-[21px] 
                                            md:text-[15px] 
                                            sm:text-[11px]
                                            xs:-ml-0 xs:text-[10px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:mt-4 
                                            xsm:-ml-10 xsm:-mr-10  xsm:text-[8px] 
                                            font-semibold'> Internship (Computer  Programming Specialist)
                                            </h1>
                                <p className='lg:text-sm 
                                            md:text-[12px] 
                                            sm:text-[10px] 
                                            xs:-ml-0 
                                            xsm:text-[6px]
                                            xxsm:-ml-10 xxsm:text-[4px]
                                            pb-5
                                            '> December 2021 – July 2022</p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus.
                                        Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu
                                        tristique maximus, ultrices non erat
                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus.
                                        Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu
                                        tristique maximus, ultrices non erat
                                    </span>
                                </p>
                            </div>
                        </TabPane>
                        <TabPane tab={<span className='text-start items-start flex justify-start 
                                            lg:text-base 
                                            md:text-sm 
                                            sm:text-[10px] 
                                            xs:text-[8px] 
                                            xsm:text-[6px]
                                            xxsm:text-[4px]'> Polytechnic University of <br /> the Philippines - 1st Internship  </span>} key='3' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='text-white 
                                            lg:text-[21px] 
                                            md:text-[15px] 
                                            sm:text-[11px]
                                            xs:-ml-0 xs:text-[10px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:mt-4 
                                            xsm:-ml-10 xsm:-mr-10  xsm:text-[8px] 
                                            font-semibold'> Internship Computer Programmer, Aide Junior Programmer</h1>
                                <p className='lg:text-sm 
                                            md:text-[12px] 
                                            sm:text-[10px] 
                                            xs:-ml-0 
                                            xsm:text-[6px]
                                            xxsm:-ml-10 xxsm:text-[4px]
                                            pb-5
                                            '> August 2021 – September 2021
                                            </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus.
                                        Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu
                                        tristique maximus, ultrices non erat
                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus.
                                        Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu
                                        tristique maximus, ultrices non erat
                                    </span>
                                </p>
                            </div>
                        </TabPane>
                    </Tabs>

                </div>
            </div>
        </>
    )
}

export default Experience