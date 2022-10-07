import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Database
import { db } from '../../firebase-config'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const Info = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  };

  const [data, setData] = useState([])

  const dataCollectionRef = collection(db, "skills02");

  useEffect(() => {

    const q = query(dataCollectionRef, orderBy("id", "asc"));
    onSnapshot(q, dataCollectionRef, snapshot => {
      setData(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }))
    })

  }, [dataCollectionRef])


  return (
    <>
      <div className='flex flex-col py-5 sm:mx-10 xxsm:mx-5' id='info'>
        <h1 className=' text-white lg:text-[30px] md:text-[25px] sm:text-[20px]'> Skills </h1>
        <div className='mt-10 xsm:mx-10 xxsm:mx-5'>
          <div>
            <Slider {...settings}>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Freact.png?alt=media&token=a8a60c98-64c8-4202-9ca8-700addc3e09a' alt='react-icons' className='lg:w-20 md:w-16 sm:w-12 xxsm:w-10' />
                  <h1 className='text-white pt-5 2xl:text-[30px] lg:text-[25px] md:text-[20px] xxsm:text-[15px] font-medium'> React JS</h1>
                  <h1 className='text-white items-center text-center pb-5 
                                lg:text-[15px] lg:px-18
                                md:text-[12px] md:px-10 
                                xs:text-[8px] xs:px-5
                                xxsm:text-[10px] xxsm:px-5 2xl:px-32 2xl:text-[20px]
                                sm:text-[10px] sm:px-5'>
                    <b> Skill Level: Proficient -  </b> Uses React JS to develop modern web app technologies. React JS associated with Node JS and Express JS
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fangular.png?alt=media&token=b95a7c6f-c5cf-47fa-a6e6-4bc6d31720fe' alt='angular-icons' className='lg:w-[75px] md:w-16 sm:w-12 xxsm:w-10' />
                  <h1 className='text-white pt-5 2xl:text-[30px] lg:text-[25px] md:text-[20px] xxsm:text-[15px] font-medium'> Angular JS</h1>
                  <h1 className='text-white items-center text-center pb-5 
                                lg:text-[15px] lg:px-18 
                                md:text-[12px] md:px-10 
                                xs:text-[8px] xs:px-5
                                xxsm:text-[10px] xxsm:px-5 2xl:px-32 2xl:text-[20px]
                                sm:text-[10px] sm:px-5'>
                    <b> Skill Level: Advanced Beginner - </b> Uses Angular JS to develop modern enterprise-grade web app technologies.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Ftailwind.png?alt=media&token=0f96f6f9-1e26-479b-8ebd-e0ead8685fc7' alt='tailwind-icons' className='md:w-[70px] sm:w-14 xxsm:w-10' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] xxsm:text-[15px] font-medium'> Tailwind CSS</h1>
                  <h1 className='text-white items-center text-center pb-5 
                                  lg:text-[15px] lg:px-18
                                  md:text-[12px] md:px-10
                                  xs:text-[8px] xs:px-5 
                                  xxsm:text-[10px] xxsm:px-5 2xl:px-32 2xl:text-[20px]
                                  sm:text-[10px] sm:px-5'>
                    <b> Skill Level: Expert - </b> Uses Tailwind CSS to build custom user interface more efficient, organized and enables to layout freely
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fantd.svg?alt=media&token=8c8d65cd-78a4-4af0-9e9b-1bdae5e5b4ed' alt='ant-icons' className='lg:w-[70px] md:w-[60px] sm:w-14 xxsm:w-10' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] xxsm:text-[15px] font-medium'> Ant Design </h1>
                  <h1 className='text-white items-center text-center pb-5 
                                  lg:text-[15px] lg:px-18 
                                  md:text-[12px] md:px-10 
                                  sm:text-[10px] sm:px-5
                                  xs:text-[8px] xs:px-5 
                                  xxsm:text-[10px] xxsm:px-5 2xl:px-32 2xl:text-[20px]
                                  '>
                    <b> Skill Level: Expert - </b> Uses Ant Design to create set of high quality React Components and design system for enterprise-level products.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fmaterialui.png?alt=media&token=338068ab-50be-4ccc-abc0-92ffa1442dfc' alt='materialui-icons' className='lg:w-[70px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] xxsm:text-[15px] font-medium'> Material UI </h1>
                  <h1 className='text-white items-center text-center pb-5 
                                  lg:text-[15px] lg:px-18 
                                  md:text-[12px] md:px-10 
                                  sm:text-[10px] sm:px-5
                                  xs:text-[8px] xs:px-5 
                                  xxsm:text-[10px] xxsm:px-5 2xl:px-32 2xl:text-[20px]
                                  '>
                    <b> Skill Level: Proficient - </b> Uses Material UI to create set of high quality comprehensive suite of UI Tools, alternative for Ant Design.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center pt-2 text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fbootstrap.png?alt=media&token=2a6e18bd-3264-4b89-844c-eb3491fb980b' alt='bootstrap-icons' className='lg:w-[85px] md:w-[70px] sm:w-[55px] xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] xxsm:text-[15px]  font-medium'> Bootstrap </h1>
                  <h1 className='text-white items-center text-center pb-5 
                                  lg:text-[15px] lg:px-18
                                  md:text-[12px] md:px-10
                                  sm:text-[10px] sm:px-5
                                  xs:text-[8px] xs:px-5 
                                  xxsm:text-[10px] xxsm:px-5 
                                  2xl:px-32 2xl:text-[20px]
                                  '>
                    <b> Skill Level: Proficient - </b> Uses Bootstrap for a modular and customizable architecture. It contains JS-based design template
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white pt-1'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fcss.png?alt=media&token=6d2c2fef-eeae-4bc4-9379-5a62335e6ee0' alt='scss-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] xxsm:text-[15px] font-medium'> SCSS </h1>
                  <h1 className='text-white items-center text-center pb-5 
                                  lg:text-[15px] lg:px-18
                                  md:text-[12px] md:px-10
                                  sm:text-[10px] sm:px-5
                                  xs:text-[8px] xs:px-5 
                                  xxsm:text-[10px] xxsm:px-5
                                  2xl:px-32 2xl:text-[20px]
                                  '>
                     <b> Skill Level: Proficient - </b> Uses SCSS for an advanced css for styling web design. SCSS is more expressive than the CSS
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fhtml.png?alt=media&token=0f58ad93-bd38-4dd7-83fb-c97bb33d3a6c' alt='html-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> HTML 5 </h1>
                  <h1 className='text-white items-center text-center pb-5 
                          lg:text-[15px] lg:px-18
                          md:text-[12px] md:px-10
                          xs:text-[8px] xs:px-5 
                          xxsm:text-[10px] xxsm:px-5
                          2xl:px-32 2xl:text-[20px]
                          sm:text-[10px] sm:px-5'
                  >
                     <b> Skill Level: Expert - </b>Uses HTML 5 to an advanced web app which has newer functionalities and supports all major browsers
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fmysql.png?alt=media&token=6e1aa056-79d0-48f0-a2c5-a5181fe9c359' alt='mysql-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> My SQL</h1>
                  <h1 className='text-white items-center text-center pb-5 
                                  lg:text-[15px] lg:px-18
                                  md:text-[12px] md:px-10
                                  xs:text-[8px] xs:px-5 
                                  2xl:px-32 2xl:text-[20px]
                                  xxsm:text-[10px] xxsm:px-5
                                  sm:text-[10px] sm:px-5'
                  >
                     <b> Skill Level: Competent - </b> Uses My SQL for relational management database system, a good replacement for MongoDB
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Ffirebase.png?alt=media&token=c5c0eae3-f8b7-4042-8a8a-68239e9e7849' alt='firebase-icons' className='lg:w-16 md:w-12 sm:w-10 xxsm:w-8' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Firebase  </h1>
                  <h1 className='text-white items-center text-center pb-5 
                                    lg:text-[15px] lg:px-18
                                    md:text-[12px] md:px-10
                                    xs:text-[8px] xs:px-5 
                                    2xl:px-32 2xl:text-[20px]
                                    xxsm:text-[10px] xxsm:px-5
                                    sm:text-[10px] sm:px-5'>
                     <b> Skill Level: Expert - </b> Uses Firebase for authentication and file storage. A good replacement to MongoDB for small user database
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fmongodb.svg?alt=media&token=ab61ca7d-6836-4297-a8ef-1354354cc9c7' alt='mongodb-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> MongoDB  </h1>
                  <h1 className='text-white items-center text-center pb-5 
                                lg:text-[15px] lg:px-18
                                md:text-[12px] md:px-10
                                xs:text-[8px] xs:px-5 
                                2xl:px-32 2xl:text-[20px]
                                xxsm:text-[10px] xxsm:px-5
                                sm:text-[10px] sm:px-5'>
                     <b> Skill Level: Proficient - </b> Uses MongoDB for large scale data, it has flexible schema makes it easier to store data and to work with it.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fsanity.png?alt=media&token=67c7eadf-2460-4ea0-bdc9-66b2fb4e5463' alt='sanity-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Sanity Studio   </h1>
                  <h1 className='text-white items-center text-center pb-5 
                        lg:text-[15px] lg:px-18
                        md:text-[12px] md:px-10
                        xs:text-[8px] xs:px-5 
                        2xl:px-32 2xl:text-[20px]
                        xxsm:text-[10px] xxsm:px-5
                        sm:text-[10px] sm:px-5'>
                     <b> Skill Level: Proficient - </b> Uses Sanity Studio as management system to delivers high-quality content to digital devices and products.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fphotoshop.png?alt=media&token=15a411d2-a97a-4cd0-8b4c-7a5a7708a5a8' alt='ps-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Adobe Photoshop </h1>
                  <h1 className='text-white items-center text-center pb-5 
                     lg:text-[15px] lg:px-18
                     md:text-[12px] md:px-10
                     xs:text-[8px] xs:px-5 
                     2xl:px-32 2xl:text-[20px]
                     xxsm:text-[10px] xxsm:px-5
                     sm:text-[10px] sm:px-5'>
                     <b> Skill Level: Expert - </b> Uses Photoshop to create logos, icons, system designs and for photo enhancement and manipulation
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fae.png?alt=media&token=b0bd32b4-b3c8-4f99-82ec-50888dff3cf0' alt='ae-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Adobe After Effects </h1>
                  <h1 className='text-white items-center text-center pb-5 
                    lg:text-[15px] lg:px-18
                    md:text-[12px] md:px-10
                    xs:text-[8px] xs:px-5 
                    2xl:px-32 2xl:text-[20px]
                    xxsm:text-[10px] xxsm:px-5
                    sm:text-[10px] sm:px-5'>
                     <b> Skill Level: Proficient - </b> Uses After Effects for complex digital visual effects, motion graphics, and compositing application.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fid.png?alt=media&token=667b6790-1d03-4d0b-915a-7c7a613ccbfd' alt='id-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Adobe InDesign </h1>
                  <h1 className='text-white items-center text-center pb-5 
                          lg:text-[15px] lg:px-18
                          md:text-[12px] md:px-10
                          xs:text-[8px] xs:px-5 
                          2xl:px-32 2xl:text-[20px]
                          xxsm:text-[10px] xxsm:px-5
                          sm:text-[10px] sm:px-5'>
                     <b> Skill Level: Proficient - </b> Uses InDesign as an alternative for Microsoft Publisher to create stunning flyers, brochures, handous and newsletter
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fic.png?alt=media&token=6e1b7d98-7f9b-436f-8599-17d9497c28f5' alt='ic-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Adobe InCopy </h1>
                  <h1 className='text-white items-center text-center pb-5 
                        lg:text-[15px] lg:px-18
                        md:text-[12px] md:px-10
                        xs:text-[8px] xs:px-5 
                        2xl:px-32 2xl:text-[20px]
                        xxsm:text-[10px] xxsm:px-5
                        sm:text-[10px] sm:px-5'>
                     <b> Skill Level: Proficient - </b> Uses InCopy as an alternative for Microsoft Word to create an advanced word processing
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Ffilmora.png?alt=media&token=88de8a58-029b-40b7-a263-9197943b00f0' alt='filmora-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Wondershare Filmora X</h1>
                  <h1 className='text-white items-center text-center pb-5 
                        lg:text-[15px] lg:px-18
                        md:text-[12px] md:px-10
                        2xl:px-32 2xl:text-[20px]
                        xs:text-[8px] xs:px-5 
                        xxsm:text-[10px] xxsm:px-5
                        sm:text-[10px] sm:px-5'>
                    <b> Skill Level: Expert - </b>Uses Wondershare Filmora for simple editing that do not requires a lot of complex visual effects.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fmixcraft.png?alt=media&token=486c96ad-04d0-4324-b2a5-8dfee1948fb6' alt='mixcraft-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Mixcraft Pro 10 </h1>
                  <h1 className='text-white items-center text-center pb-5 
                            lg:text-[15px] lg:px-20
                            md:text-[12px] md:px-10
                            xs:text-[8px] xs:px-5 
                            2xl:px-32 2xl:text-[20px]
                            xxsm:text-[10px] xxsm:px-5
                            sm:text-[10px] sm:px-5'>
                    <b> Skill Level: Proficient - </b> Uses Mixcraft for mixing complex audio tracks into single track as well as applying music effects
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Faudacity.png?alt=media&token=97532b63-d940-47b8-9f3d-059e7e13ec11' alt='audacity-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Audacity </h1>
                  <h1 className='text-white items-center text-center pb-5 
                          lg:text-[15px] lg:px-20
                          md:text-[12px] md:px-10
                          2xl:px-32 2xl:text-[20px]
                          xs:text-[8px] xs:px-5 
                          xxsm:text-[10px] xxsm:px-5
                          sm:text-[10px] sm:px-5'>
                    <b> Skill Level: Expert - </b> Uses Audacity for editing recording as well as applying complex music effects to recording
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fflstudio.png?alt=media&token=48ebf889-db00-40e2-a61c-f4a219297d5e' alt='flstudio-icons' className='lg:w-[100px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> FL Studio </h1>
                  <h1 className='text-white items-center text-center pb-5 
                          lg:text-[15px] lg:px-20
                          md:text-[12px] md:px-10
                          xs:text-[8px] xs:px-5 
                          2xl:px-32 2xl:text-[20px]
                          xxsm:text-[10px] xxsm:px-5
                          sm:text-[10px] sm:px-5'>
                    <b> Skill Level: Competent - </b> Uses FL Studio to create music production with a pattern-based music sequencer.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fjava.png?alt=media&token=13b192f3-9863-4e91-b6a6-ebe25d5472ee' alt='java-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Java </h1>
                  <h1 className='text-white items-center text-center pb-5 
                          lg:text-[15px] lg:px-20
                          md:text-[12px] md:px-10
                          xs:text-[8px] xs:px-5 
                          2xl:px-32 2xl:text-[20px]
                          xxsm:text-[10px] xxsm:px-5
                          sm:text-[10px] sm:px-5'>
                    <b> Skill Level: Proficient - </b> With great knowledge in different OOP Pillars, Java Swing and basic Android App.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fc%2B%2B.png?alt=media&token=a0e08b72-af69-47b1-99e1-7cddefb2f298' alt='c++-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> C++ </h1>
                  <h1 className='text-white items-center text-center pb-5 
                          lg:text-[15px] lg:px-20
                          md:text-[12px] md:px-10
                          xs:text-[8px] xs:px-5 
                          2xl:px-32 2xl:text-[20px]
                          xxsm:text-[10px] xxsm:px-5
                          sm:text-[10px] sm:px-5'>
                    <b> Skill Level: Advanced Beginner - </b> With great knowledge in C++ functions and classes.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fc%23.png?alt=media&token=994ee2ab-b5b9-4cfb-97b6-a0223f2d4926' alt='c#-icons' className='lg:w-[100px] md:w-[75px] sm:w-[65px] xxsm:w-[50px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> C# </h1>
                  <h1 className='text-white items-center text-center pb-5 
                          lg:text-[15px] lg:px-20 
                          md:text-[12px] md:px-10
                          xs:text-[8px] xs:px-5 
                          2xl:px-32 2xl:text-[20px]
                          xxsm:text-[10px] xxsm:px-5
                          sm:text-[10px] sm:px-5'>
                    <b> Skill Level: Proficient - </b> With great knowledge in different OOP Pillars with basic understanding on ASP.NET.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/skills%2Fpython.png?alt=media&token=47ebc6f1-60a0-4194-85bf-001340f2311d' alt='python-icons' className='lg:w-[100px] md:w-[75px] sm:w-[65px] xxsm:w-[50px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Python </h1>
                  <h1 className='text-white items-center text-center pb-5 
                          lg:text-[15px] lg:px-20 
                          md:text-[12px] md:px-10
                          xs:text-[8px] xs:px-5 
                          2xl:px-32 2xl:text-[20px]
                          xxsm:text-[10px] xxsm:px-5
                          sm:text-[10px] sm:px-5'>
                    <b> Skill Level: Proficient - </b> With great knowledge in different OOP Pillars with basic knowledge on Matplotlib.
                  </h1>
                </h3>
              </div>
            </Slider>
          </div>
        </div>
        <h1 className=' text-white lg:text-[30px] md:text-[25px] sm:text-[20px]'> What I Do </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 mx-auto items-center text-center w-full">
          {
            data.map((item, i) => (
              <>
                <div className='bg-[#212224] flex flex-col justify-center items-center text-center p-3 mx-3 my-7 xxsm:p-1 
                            rounded-lg shadow-white shadow-md hover:cursor-pointer duration-200 hover:bg-[#fe4066] hover:-translate-y-6'
                  key={i}>
                  <img src={item.icon} alt='icon' className='pt-5 w-16' />
                  <h1 className='text-white 2xl:text-[15px] lg:text-[20px] xxsm:text-[15px] font-semibold px-10 pt-5'> {item.title} </h1>
                  <h1 className='text-white 
                                  xxsm:px-10 2xl:px-5 lg:text-[15px] md:text-[12px] xxsm:text-[8px] pb-5
                                  '>
                    {item.details}
                  </h1>
                </div>
              </>
            ))

          }
        </div>
      </div>
    </>
  )
}

export default Info