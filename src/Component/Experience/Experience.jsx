import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Experience = () => {
    return (
        <>
            <div className='flex flex-col py-5 sm:mx-3 xsm:mx-2  xxsm:mx-0' id='experience'>
                <h1 className=' text-white lg:text-[30px] md:text-[25px] sm:text-[20px] mx-5'> Educational Attainment </h1>
                <div className='text-white flex lg:px-12  md:px-10 sm:px-5 xs:px-3 xxsm:px-0 py-10'>
                    <Tabs tabPosition='left' className='w-full duration-100'>
                        <TabPane tab={<span className='text-start items-start flex justify-start 
                                            lg:text-base lg:-ml-0
                                            md:text-sm md:-ml-5
                                            sm:text-[15px] sm:-ml-3
                                            xs:text-[12px] xs:-ml-3
                                            xsm:text-[9px] xsm:-ml-3 xsm:-mr-0
                                            xxsm:text-[6px] xxsm:-ml-3 xxsm:-mr-5
        
                                            '> Polytechnic University of <br /> the Philippines - Sta Mesa</span>} key='1' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='
                                            text-[#fe4066] 
                                            lg:text-[21px] lg:mt-8
                                            md:text-[17px] 
                                            sm:text-[15px] sm:-ml-0
                                            xs:text-[15px] xs:-ml-5 
                                            xxsm:-ml-10 xxsm:mt-4  xsm:text-[11px]
                                            xsm:-ml-10 xsm:-mr-10  xxsm:text-[8px] 
                                            
                                            font-semibold'> Bachelor of Science in Information Communication and Technology </h1>
                                <p className='lg:text-base 
                                            2xl:text-[20px]
                                            md:text-[14px] 
                                            sm:text-[12px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[10px]
                                            xsm:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        A graduate of Bachelor of Science in Information Communication and Technology in Polytechnic University of the Philippines.
                                        Have passed the BSIT Ladderize Qualifying Exam that made me eligible in pursuing my bachelor degree within the same institute.
                                        Have developed different web application and mobile application
                                    </span>
                                </p>

                            </div>
                        </TabPane>
                        <TabPane tab={<span className='text-start items-start flex justify-start 
                                            lg:text-base lg:-ml-0
                                            md:text-sm md:-ml-5
                                            sm:text-[15px] sm:-ml-3
                                            xs:text-[12px] xs:-ml-3
                                            xsm:text-[9px] xsm:-ml-3 xsm:-mr-0
                                            xxsm:text-[6px] xxsm:-ml-3 xxsm:-mr-5
        
                                            '> Polytechnic University of <br /> the Philippines - Sta Mesa</span>} key='2' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='
                                            text-[#fe4066] 
                                            lg:text-[21px] lg:mt-8
                                            md:text-[17px] 
                                            sm:text-[15px] sm:-ml-0
                                            xs:text-[15px] xs:-ml-5 
                                            xxsm:-ml-10 xxsm:mt-4  xsm:text-[11px]
                                            xsm:-ml-10 xsm:-mr-10  xxsm:text-[8px] 
                                            
                                            font-semibold'> Diploma in Information Communication and Technology </h1>
                                <p className='lg:text-sm 
                                            2xl:text-base
                                            md:text-[14px] 
                                            sm:text-[15px] 
                                            xs:-ml-5 
                                            sm:-ml-0 
                                            xs:text-[10px]
                                            xsm:text-[7px]
                                            xxsm:-ml-10 xxsm:text-[5px]
                                            pb-5
                                            '> June 2019 - August 2022 </p>
                                <p className='lg:text-base 
                                            2xl:text-[20px]
                                            md:text-[14px] 
                                            sm:text-[12px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[10px]
                                            xsm:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        A graduate of Associate Degree in Diploma in Information Communication and Technology. One of the
                                        designer and developer of the extension project of PUP-ITech TRACK IT - to modernized barangay
                                        transactions, and the Furbae - Animal Welfare. Consistent President's Lister from 2nd year to 3rd year
                                        and Dean's Lister in 1st year. A PUPCET passer in 2019 with a score of 89 but due to insufficient BSIT slot,
                                        was forced to transfer to Diploma Course to pursue Information Technology.
                                    </span>
                                </p>

                            </div>
                        </TabPane>
                        <TabPane tab={<span className='text-start items-start flex justify-start 
                                           lg:text-base lg:-ml-0
                                           md:text-sm md:-ml-5
                                           sm:text-[15px] sm:-ml-3
                                           xs:text-[12px] xs:-ml-3
                                           xsm:text-[9px] xsm:-ml-3 xsm:-mr-0
                                           xxsm:text-[6px] xxsm:-ml-3 xxsm:-mr-5'> (Systems Technology Institute) <br /> STI College Marikina </span>} key='3' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='
                                            text-[#fe4066] 
                                            lg:text-[21px] lg:mt-8
                                            md:text-[17px] 
                                            sm:text-[15px] sm:-ml-0
                                            xs:text-[15px] xs:-ml-5 
                                            xxsm:-ml-10 xxsm:mt-4  xsm:text-[11px]
                                            xsm:-ml-10 xsm:-mr-10  xxsm:text-[8px] 
                                            
                                            font-semibold'> Mobile App and Web Development (MAWD)                                            </h1>
                                <p className='lg:text-sm 
                                            2xl:text-base
                                            md:text-[14px] 
                                            sm:text-[15px] 
                                            xs:-ml-5 
                                            sm:-ml-0 
                                            xs:text-[10px]
                                            xsm:text-[7px]
                                            xxsm:-ml-10 xxsm:text-[5px]
                                            pb-5
                                            '> June 2017 - March 2019</p>
                                <p className='lg:text-base 
                                            2xl:text-[20px]
                                            md:text-[14px] 
                                            sm:text-[12px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[10px]
                                            xsm:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        Graduated with honors from Senior High School in 2019. Competed in Mobile App Development using Android Studio and came in second place in TECHiesh CineAstig Video Editing in 2019. Finished first place in the "STI College Marikina 2018 Hataw Sayaw" and first place in the "STI College Marikina Sportsfest Cheerdance Competition."
                                    </span>
                                </p>

                            </div>
                        </TabPane>
                        <TabPane tab={<span className='text-start items-start flex justify-start 
                                          lg:text-base lg:-ml-0
                                          md:text-sm md:-ml-5
                                          sm:text-[15px] sm:-ml-3
                                          xs:text-[12px] xs:-ml-3
                                          xsm:text-[9px] xsm:-ml-3 xsm:-mr-0
                                          xxsm:text-[6px] xxsm:-ml-3 xxsm:-mr-5'> General Licerio Geronimo <br /> Memorial National High School </span>} key='4' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='
                                            text-[#fe4066] 
                                            lg:text-[21px] lg:mt-8
                                            md:text-[17px] 
                                            sm:text-[15px] sm:-ml-0
                                            xs:text-[15px] xs:-ml-5 
                                            xxsm:-ml-10 xxsm:mt-4  xsm:text-[11px]
                                            xsm:-ml-10 xsm:-mr-10  xxsm:text-[8px] 
                                            
                                            font-semibold'> Junior High School (Grade 8 - Grade 10)
                                </h1>
                                <p className='lg:text-sm 
                                            2xl:text-base
                                            md:text-[14px] 
                                            sm:text-[15px] 
                                            xs:-ml-5 
                                            sm:-ml-0 
                                            xs:text-[10px]
                                            xsm:text-[7px]
                                            xxsm:-ml-10 xxsm:text-[5px]
                                            pb-5
                                            '> June 2014 - March 2017</p>
                                <p className='lg:text-base 
                                            2xl:text-[20px]
                                            md:text-[14px] 
                                            sm:text-[12px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[10px]
                                            xsm:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        Graduated from General Licerio Geronimo Memorial National High School in 2017. In 2015, Have won the Interpretative Dance - School Competition in Rodriguez and finished second in the Rizal Province Division. Have won third runner-up in the Ballroom Competition and second place in the Cheerdance School Competition in 2016.
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
                                             lg:text-base lg:-ml-0
                                             md:text-sm md:-ml-5
                                             sm:text-[15px] sm:-ml-3
                                             xs:text-[12px] xs:-ml-3
                                             xsm:text-[9px] xsm:-ml-3 xsm:-mr-0
                                             xxsm:text-[6px] xxsm:-ml-3 xxsm:-mr-5'> Freelance Developer/Editor, <br /> Computer Technician </span>} key='1' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='
                                            text-[#fe4066] 
                                            lg:text-[21px] lg:mt-8
                                            md:text-[17px] 
                                            sm:text-[15px] sm:-ml-0
                                            xs:text-[15px] xs:-ml-5 
                                            xxsm:-ml-10 xxsm:mt-4  xsm:text-[11px]
                                            xsm:-ml-10 xsm:-mr-10  xxsm:text-[8px] 
                                            
                                            font-semibold'> Freelance Developer/Editor, Computer Technician </h1>
                                <p className='lg:text-sm 
                                            2xl:text-base
                                            md:text-[14px] 
                                            sm:text-[15px] 
                                            xs:-ml-5 
                                            sm:-ml-0 
                                            xs:text-[10px]
                                            xsm:text-[7px]
                                            xxsm:-ml-10 xxsm:text-[5px]
                                            pb-5
                                            '> January 2019 - Present  </p>
                                <p className='lg:text-base 
                                            2xl:text-[20px]
                                            md:text-[14px] 
                                            sm:text-[12px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[10px]
                                            xsm:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        A self-employed Designer and Developer. Used Adobe Photoshop to create logos, design systems, and enhance photos. Five years of video editing experience for school projects, web ads and etc., with Adobe After Effects, Wondershare Filmora X, Sony Vegas for video and FL Studio, Mixcraft, and Audacity for audio.

                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            2xl:text-[20px]
                                            md:text-[14px] 
                                            sm:text-[12px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[10px]
                                            xsm:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        Developed system using modern web technologies such as React, Firebase, Sanity and MongoDb and small system using HTML, CSS, JS, Google Scripts and Google Spreadsheet. Furthermore, Configured basic computer hardware, managed network connectivity and computer systems

                                    </span>
                                </p>
                            </div>
                        </TabPane>
                        <TabPane tab={<span className='text-start items-start flex justify-start 
                                             lg:text-base lg:-ml-0
                                             md:text-sm md:-ml-5
                                             sm:text-[15px] sm:-ml-3
                                             xs:text-[12px] xs:-ml-3
                                             xsm:text-[9px] xsm:-ml-3 xsm:-mr-0
                                             xxsm:text-[6px] xxsm:-ml-3 xxsm:-mr-5'> Polytechnic University of <br /> the Philippines - 2nd Internship
                        </span>} key='2' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='
                                            text-[#fe4066] 
                                            lg:text-[21px] lg:mt-8
                                            md:text-[17px] 
                                            sm:text-[15px] sm:-ml-0
                                            xs:text-[15px] xs:-ml-5 
                                            xxsm:-ml-10 xxsm:mt-4  xsm:text-[11px]
                                            xsm:-ml-10 xsm:-mr-10  xxsm:text-[8px] 
                                            
                                            font-semibold'> Internship (Computer Programming Specialist)                                            </h1>
                                <p className='lg:text-sm 
                                            2xl:text-base
                                            md:text-[14px] 
                                            sm:text-[15px] 
                                            xs:-ml-5 
                                            sm:-ml-0 
                                            xs:text-[10px]
                                            xsm:text-[7px]
                                            xxsm:-ml-10 xxsm:text-[5px]
                                            pb-5
                                            '> December 2021 – July 2022 </p>
                                <p className='lg:text-base 
                                            2xl:text-[20px]
                                            md:text-[14px] 
                                            sm:text-[12px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[10px]
                                            xsm:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        A student currenly taking the assessment exam of Computer Systems Servicing - National Certificate in TESDA. Developed and designed a big project called TRACK IT – Barangay Informatics, an extension project of PUP Itech that will be donated in Barangay Cupang West, Bataan to help manage barangay transactions online.



                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            2xl:text-[20px]
                                            md:text-[14px] 
                                            sm:text-[12px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[10px]
                                            xsm:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        Created and edited the web advertisement and Web Presentation of TRACKIT Project (You can see the video link in portfolio section below) and worked as a developer and designer in - Animal Welfare (Furbae) that aims to connect pet to barangay system



                                    </span>
                                </p>
                            </div>
                        </TabPane>
                        <TabPane tab={<span className='text-start items-start flex justify-start 
                                           lg:text-base lg:-ml-0
                                           md:text-sm md:-ml-5
                                           sm:text-[15px] sm:-ml-3
                                           xs:text-[12px] xs:-ml-3
                                           xsm:text-[9px] xsm:-ml-3 xsm:-mr-0
                                           xxsm:text-[6px] xxsm:-ml-3 xxsm:-mr-5'> Polytechnic University of <br /> the Philippines - 1st Internship  </span>} key='3' className='text-white'>
                            <div className='px-5' style={{ marginTop: '-20px' }}>
                                <h1 className='
                                            text-[#fe4066] 
                                            lg:text-[21px] lg:mt-8
                                            md:text-[17px] 
                                            sm:text-[15px] sm:-ml-0
                                            xs:text-[15px] xs:-ml-5 
                                            xxsm:-ml-10 xxsm:mt-4  xsm:text-[11px]
                                            xsm:-ml-10 xsm:-mr-10  xxsm:text-[8px] 
                                            
                                            font-semibold'> Freelance Developer/Editor, Computer Technician </h1>
                                <p className='lg:text-sm 
                                            2xl:text-base
                                            md:text-[14px] 
                                            sm:text-[15px] 
                                            xs:-ml-5 
                                            sm:-ml-0 
                                            xs:text-[10px]
                                            xsm:text-[7px]
                                            xxsm:-ml-10 xxsm:text-[5px]
                                            pb-5
                                            '> January 2019 - Present  </p>
                                <p className='lg:text-base 
                                            2xl:text-[20px]
                                            md:text-[14px] 
                                            sm:text-[12px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[10px]
                                            xsm:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        Completed four TESDA online courses: Participating in Workplace Communication, Practicing COVID-19 Preventive Measures in the Workplace, Receiving and Responding to Workplace Communication, and SMART Android Mobile Apps Development for Beginners (that is shown in Achievements Section)


                                    </span>
                                </p>
                                <p className='lg:text-base 
                                            2xl:text-[20px]
                                            md:text-[14px] 
                                            sm:text-[12px]
                                            xs:-ml-0 xs:-mr-0 xs:text-[10px]
                                            xsm:text-[8px]
                                            xxsm:text-[5px] xxsm:-ml-10 xxsm:-mr-5
                                            flex'>
                                    <span className='flex'>
                                        Accomplished a two 300-hour courses at FreeCodeCamp: "Responsive Web Design" and "JavaScript Algorithms and Data Structures" with a Certificate of Completion (that is shown in Achievements Section). During this internship, I've developed a website called MLM Beats using HTML, CSS, JavaScript, PHP and MySQL

                                        system using modern web technologies such as React, Firebase, Sanity and MongoDb and small system using HTML, CSS, JS, Google Scripts and Google Spreadsheet. Furthermore, Configured basic computer hardware, managed network connectivity and computer systems

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