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
                                            lg:text-[21px] lg:mt-8
                                            md:text-[15px] 
                                            sm:text-[11px] 
                                            xs:-ml-0 xs:text-[10px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:mt-4 
                                            xsm:-ml-10 xsm:-mr-10  xsm:text-[8px] 
                                            font-semibold'> Diploma in Information Communication and Technology </h1>
                                <p className='lg:text-sm 
                                            2xl:text-base
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
                                            2xl:text-[20px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        A 3rd year graduating student in Diploma in Information Communication and Technology. One of the
                                        designer and developer of the extension project of PUP-ITech TRACK IT - to modernized barangay
                                        transactions, and the Furbae - Animal Welfare. Consistent President's Lister from 2nd year to 3rd year
                                        and Dean's Lister in 1st year. A PUPCET passer in 2019 with a score of 89.
                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            2xl:text-[20px]
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
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
                                            lg:text-[21px] lg:mt-8
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
                                            2xl:text-base
                                            xsm:text-[6px]
                                            xxsm:-ml-10 xxsm:text-[4px]
                                            pb-5
                                            '> June 2017 - March 2019 </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            2xl:text-[20px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />

                                        Graduated with honors from Senior High School in 2019. Competed in Mobile App
                                        Development using Android Studio and came in second place in TECHiesh CineAstig Video
                                        Editing in 2019. Finished first place in the "STI College Marikina
                                        2018 Hataw Sayaw" and first place in the "STI College Marikina Sportsfest Cheerdance
                                        Competition."
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
                                            lg:text-[21px] lg:mt-8
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
                                            2xl:text-base
                                            xxsm:-ml-10 xxsm:text-[4px]
                                            pb-5
                                            '> June 2014 - March 2017 </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            2xl:text-[20px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />

                                        Graduated from General Licerio Geronimo Memorial National High School in 2017. In 2015,
                                        Have won the Interpretative Dance - School Competition in Rodriguez and finished second in the Rizal
                                        Province Division. Have won third runner-up in the Ballroom Competition and second
                                        place in the Cheerdance School Competition in 2016.

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
                                            2xl:text-base
                                            xxsm:-ml-10 xxsm:text-[4px]
                                            pb-5
                                            '> January 2019 - Present </p>
                                <p className='
                                            2xl:text-[20px]
                                            lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />

                                        A self-employed Designer and Developer. Used Adobe Photoshop to create logos, design systems, and
                                        enhance photos.  Five years of video editing experience for school projects,
                                        web ads and etc., with Adobe After Effects, Wondershare Filmora X, Sony Vegas for video and FL Studio,
                                        Mixcraft, and Audacity for audio.
                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            2xl:text-[20px]
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Developed system using modern web technologies such as React, Firebase,
                                        Sanity and MongoDb and small system using HTML, CSS, JS, Google Scripts and Google Spreadsheet. Furthermore,
                                        Configured basic computer hardware, managed network connectivity and computer systems
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
                                            2xl:text-base
                                            xsm:text-[6px]
                                            xxsm:-ml-10 xxsm:text-[4px]
                                            pb-5
                                            '> December 2021 – July 2022</p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            2xl:text-[20px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        A student currenly taking the assessment exam of Computer Systems Servicing - National Certificate
                                        in TESDA. Developed and designed a big project called TRACK IT – Barangay Informatics, an extension 
                                        project of PUP Itech that will be donated in Barangay Cupang West, Bataan to help manage barangay transactions online.
                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            2xl:text-[20px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />
                                        Created and edited the web advertisement and Web Presentation of 
                                        TRACKIT Project (You can see the video link in portfolio section below) and worked as a developer
                                        and designer in - Animal Welfare (Furbae) that aims to connect pet to barangay system
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
                                            2xl:text-base
                                            xs:-ml-0 
                                            xsm:text-[6px]
                                            xxsm:-ml-10 xxsm:text-[4px]
                                            pb-5
                                            '> August 2021 – September 2021
                                </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            sm:text-[10px]
                                            2xl:text-[20px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />

                                        Completed four TESDA online courses: Participating in Workplace Communication, Practicing
                                        COVID-19 Preventive Measures in the Workplace, Receiving and Responding to Workplace Communication,
                                        and SMART Android Mobile Apps Development for Beginners (that is shown in Achievements Section)

                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            md:text-[12px] 
                                            2xl:text-[20px]
                                            sm:text-[10px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 -mt-6 sm:hidden xxsm:flex' />
                                        <BiCaretRight size={70} className='text-[#fe4066] pr-5 sm:flex xxsm:hidden' />

                                        Accomplished a two 300-hour courses at FreeCodeCamp: "Responsive Web Design" and
                                         "JavaScript Algorithms and Data Structures" with a Certificate of Completion (that is shown in Achievements Section).
                                        During this internship, I've developed a website called MLM Beats using HTML, CSS, JavaScript, PHP and MySQL

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