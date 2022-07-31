import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import ReactLogo from '../../assets/react.png'
import Tailwind from '../../assets/tailwind.png'
import Antd from '../../assets/antd.svg'
import Firebase from '../../assets/firebase.png'
import MongoDB from '../../assets/mongodb.svg'
import Sanity from '../../assets/sanity.png'
import Photoshop from '../../assets/photoshop.png'
import AE from '../../assets/ae.png'
import BT from '../../assets/bootstrap.png'
import SCSS from '../../assets/css.png'
import HTML from '../../assets/html.png'
import MySQL from '../../assets/mysql.png'
import Filmora from '../../assets/filmora.png'
import Mixcraft from '../../assets/mixcraft.png'
import Audacity from '../../assets/audacity.png'
import FLStudio from '../../assets/flstudio.png'
import ID from '../../assets/id.png'
import IC from '../../assets/ic.png'

import SystemDesign from '../../assets/system-design.png'
import PhotoEditing from '../../assets/photo-editing.png'
import WebDev from '../../assets/webdev.png'
import Music from '../../assets/music.png'
import Comain from '../../assets/maintenance.png'
import Program from '../../assets/program.png'

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

  const data =
    [
      {
        id: 1,
        icon: SystemDesign ,
        title: 'System Design',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu tristique maximus, ultrices non er'
      },
      {
        id: 2,
        icon: WebDev ,
        title: 'Web Development',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu tristique maximus, ultrices non erat'
      },
      {
        id: 3,
        icon: PhotoEditing ,
        title: 'Media Editing',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu tristique maximus, ultrices non erat'
      },
      {
        id: 4,
        icon: Music ,
        title: 'Music Editing',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu tristique maximus, ultrices non erat'
      },
      {
        id: 5,
        icon: Comain ,
        title: 'Computer Maintenance',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu tristique maximus, ultrices non erat'
      },
      {
        id: 6,
        icon: Program ,
        title: 'Computer Program',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu tristique maximus, ultrices non eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae condimentum lectus. Etiam nisi neque, ultricies eu tristique maximus, ultrices non erat'
      }
    ]

  return (
    <>
      <div className='flex flex-col py-5 sm:mx-10 xxsm:mx-5' id='info'>
        <h1 className=' text-white lg:text-[30px] md:text-[25px] sm:text-[20px]'> Skills </h1>
        <div className='mt-10 xsm:mx-10 xxsm:mx-5'>
          <div>
            <Slider {...settings}>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={ReactLogo} alt='react-icons' className='lg:w-20 md:w-16 sm:w-12 xxsm:w-10' />
                  <h1 className='text-white pt-5 2xl:text-[30px] lg:text-[25px] md:text-[20px] xxsm:text-[15px] font-medium'> React JS</h1>
                  <h1 className='text-white items-center text-center pb-5 
                                lg:text-[15px] lg:px-18
                                md:text-[12px] md:px-10 
                                xs:text-[8px] xs:px-5
                                xxsm:text-[10px] xxsm:px-5 2xl:px-32 2xl:text-[20px]
                                sm:text-[10px] sm:px-5'>
                    Uses React JS to develop modern web app technologies. React JS associated with Node JS and Express JS
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={Tailwind} alt='tailwind-icons' className='md:w-[70px] sm:w-14 xxsm:w-10' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] xxsm:text-[15px] font-medium'> Tailwind CSS</h1>
                  <h1 className='text-white items-center text-center pb-5 
                                  lg:text-[15px] lg:px-18
                                  md:text-[12px] md:px-10
                                  xs:text-[8px] xs:px-5 
                                  xxsm:text-[10px] xxsm:px-5 2xl:px-32 2xl:text-[20px]
                                  sm:text-[10px] sm:px-5'>
                    Uses Tailwind CSS to build custom user interface more efficient, organized and enables to layout freely
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={Antd} alt='ant-icons' className='md:w-20 sm:w-14 xxsm:w-10' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] xxsm:text-[15px] font-medium'> Ant Design </h1>
                  <h1 className='text-white items-center text-center pb-5 
                                  lg:text-[15px] lg:px-18 
                                  md:text-[12px] md:px-10 
                                  sm:text-[10px] sm:px-5
                                  xs:text-[8px] xs:px-5 
                                  xxsm:text-[10px] xxsm:px-5 2xl:px-32 2xl:text-[20px]
                                  '>
                    Uses Ant Design to create set of high quality React Components and design system for enterprise-level products.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center pt-2 text-white'>
                  <img src={BT} alt='bootstrap-icons' className='lg:w-[100px] md:w-[70px] sm:w-[55px] xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] xxsm:text-[15px]  font-medium'> Bootstrap </h1>
                  <h1 className='text-white items-center text-center pb-5 
                                  lg:text-[15px] lg:px-18
                                  md:text-[12px] md:px-10
                                  sm:text-[10px] sm:px-5
                                  xs:text-[8px] xs:px-5 
                                  xxsm:text-[10px] xxsm:px-5 
                                  2xl:px-32 2xl:text-[20px]
                                  '>
                    Uses Bootstrap for a modular and customizable architecture. It contains JS-based design template
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white pt-1'>
                  <img src={SCSS} alt='scss-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] xxsm:text-[15px] font-medium'> SCSS </h1>
                  <h1 className='text-white items-center text-center pb-5 
                                  lg:text-[15px] lg:px-18
                                  md:text-[12px] md:px-10
                                  sm:text-[10px] sm:px-5
                                  xs:text-[8px] xs:px-5 
                                  xxsm:text-[10px] xxsm:px-5
                                  2xl:px-32 2xl:text-[20px]
                                  '>
                    Uses SCSS for an advanced css for styling web design. SCSS is more expressive than the CSS
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={HTML} alt='html-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> HTML 5 </h1>
                  <h1 className='text-white items-center text-center pb-5 
                          lg:text-[15px] lg:px-18
                          md:text-[12px] md:px-10
                          xs:text-[8px] xs:px-5 
                          xxsm:text-[10px] xxsm:px-5
                          2xl:px-32 2xl:text-[20px]
                          sm:text-[10px] sm:px-5'
                    >
                    Uses HTML 5 to an advanced web app which has newer functionalities and supports all major browsers
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={MySQL} alt='mysql-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> My SQL</h1>
                  <h1 className='text-white items-center text-center pb-5 
                                  lg:text-[15px] lg:px-18
                                  md:text-[12px] md:px-10
                                  xs:text-[8px] xs:px-5 
                                  2xl:px-32 2xl:text-[20px]
                                  xxsm:text-[10px] xxsm:px-5
                                  sm:text-[10px] sm:px-5'
                  >
                    Uses My SQL for relational management database system, a good replacement for MongoDB
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={Firebase} alt='firebase-icons' className='lg:w-16 md:w-12 sm:w-10 xxsm:w-8' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Firebase  </h1>
                  <h1 className='text-white items-center text-center pb-5 
                                    lg:text-[15px] lg:px-18
                                    md:text-[12px] md:px-10
                                    xs:text-[8px] xs:px-5 
                                    2xl:px-32 2xl:text-[20px]
                                    xxsm:text-[10px] xxsm:px-5
                                    sm:text-[10px] sm:px-5'>
                    Uses Firebase for authentication and file storage. A good replacement to MongoDB for small user database
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={MongoDB} alt='mongodb-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> MongoDB  </h1>
                  <h1 className='text-white items-center text-center pb-5 
                                lg:text-[15px] lg:px-18
                                md:text-[12px] md:px-10
                                xs:text-[8px] xs:px-5 
                                2xl:px-32 2xl:text-[20px]
                                xxsm:text-[10px] xxsm:px-5
                                sm:text-[10px] sm:px-5'>
                    Uses MongoDB for large scale data, it has flexible schema makes it easier to store data and to work with it.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={Sanity} alt='sanity-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Sanity Studio   </h1>
                  <h1 className='text-white items-center text-center pb-5 
                        lg:text-[15px] lg:px-18
                        md:text-[12px] md:px-10
                        xs:text-[8px] xs:px-5 
                        2xl:px-32 2xl:text-[20px]
                        xxsm:text-[10px] xxsm:px-5
                        sm:text-[10px] sm:px-5'>
                    Uses Sanity Studio as management system to delivers high-quality content to digital devices and products.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={Photoshop} alt='ps-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Adobe Photoshop </h1>
                  <h1 className='text-white items-center text-center pb-5 
                     lg:text-[15px] lg:px-18
                     md:text-[12px] md:px-10
                     xs:text-[8px] xs:px-5 
                     2xl:px-32 2xl:text-[20px]
                     xxsm:text-[10px] xxsm:px-5
                     sm:text-[10px] sm:px-5'>
                    Uses Photoshop to create logos, icons, system designs and for photo enhancement and manipulation
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={AE} alt='ae-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Adobe After Effects </h1>
                  <h1 className='text-white items-center text-center pb-5 
                    lg:text-[15px] lg:px-18
                    md:text-[12px] md:px-10
                    xs:text-[8px] xs:px-5 
                    2xl:px-32 2xl:text-[20px]
                    xxsm:text-[10px] xxsm:px-5
                    sm:text-[10px] sm:px-5'>
                    Uses After Effects for complex digital visual effects, motion graphics, and compositing application.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={ID} alt='id-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Adobe InDesign </h1>
                  <h1 className='text-white items-center text-center pb-5 
                          lg:text-[15px] lg:px-18
                          md:text-[12px] md:px-10
                          xs:text-[8px] xs:px-5 
                          2xl:px-32 2xl:text-[20px]
                          xxsm:text-[10px] xxsm:px-5
                          sm:text-[10px] sm:px-5'>
                    Uses InDesign as an alternative for Microsoft Publisher to create stunning flyers, brochures, handous and newsletter
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={IC} alt='ic-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Adobe InCopy </h1>
                  <h1 className='text-white items-center text-center pb-5 
                        lg:text-[15px] lg:px-18
                        md:text-[12px] md:px-10
                        xs:text-[8px] xs:px-5 
                        2xl:px-32 2xl:text-[20px]
                        xxsm:text-[10px] xxsm:px-5
                        sm:text-[10px] sm:px-5'>
                    Uses InCopy as an alternative for Microsoft Word to create an advanced word processing
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={Filmora} alt='filmora-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Wondershare Filmora X</h1>
                  <h1 className='text-white items-center text-center pb-5 
                        lg:text-[15px] lg:px-18
                        md:text-[12px] md:px-10
                        2xl:px-32 2xl:text-[20px]
                        xs:text-[8px] xs:px-5 
                        xxsm:text-[10px] xxsm:px-5
                        sm:text-[10px] sm:px-5'>
                    Uses Wondershare Filmora for simple editing that do not requires a lot of complex visual effects.
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={Mixcraft} alt='mixcraft-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Mixcraft Pro 10 </h1>
                  <h1 className='text-white items-center text-center pb-5 
                            lg:text-[15px] lg:px-20
                            md:text-[12px] md:px-10
                            xs:text-[8px] xs:px-5 
                            2xl:px-32 2xl:text-[20px]
                            xxsm:text-[10px] xxsm:px-5
                            sm:text-[10px] sm:px-5'>
                    Uses Mixcraft for mixing complex audio tracks into single track as well as applying music effects
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={Audacity} alt='audacity-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> Audacity </h1>
                  <h1 className='text-white items-center text-center pb-5 
                          lg:text-[15px] lg:px-20
                          md:text-[12px] md:px-10
                          2xl:px-32 2xl:text-[20px]
                          xs:text-[8px] xs:px-5 
                          xxsm:text-[10px] xxsm:px-5
                          sm:text-[10px] sm:px-5'>
                    Uses Audacity for editing recording as well as applying complex music effects to recording
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className='flex flex-col justify-center items-center text-center text-white'>
                  <img src={FLStudio} alt='flstudio-icons' className='lg:w-[85px] md:w-[65px] sm:w-[55px]  xxsm:w-[40px]' />
                  <h1 className='text-white pt-3 2xl:text-[30px] lg:text-[25px] md:text-[20px] font-medium'> FL Studio </h1>
                  <h1 className='text-white items-center text-center pb-5 
                          lg:text-[15px] lg:px-20
                          md:text-[12px] md:px-10
                          xs:text-[8px] xs:px-5 
                          2xl:px-32 2xl:text-[20px]
                          xxsm:text-[10px] xxsm:px-5
                          sm:text-[10px] sm:px-5'>
                    Uses FL Studio to create music production with a pattern-based music sequencer.
                  </h1>
                </h3>
              </div>
            </Slider>
          </div>
        </div>
        <h1 className=' text-white lg:text-[30px] md:text-[25px] sm:text-[20px]'> What I Do </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 mx-auto items-center text-center w-full">
            {
            data.map((item, i) =>(
              <>
                <div className='bg-[#212224] flex flex-col justify-center items-center text-center p-3 mx-3 my-7 xxsm:p-1 
                            rounded-lg shadow-white shadow-md hover:cursor-pointer duration-200 hover:bg-[#fe4066] hover:-translate-y-6' 
                key={i}>
                  <img src={item.icon} alt='icon' className='pt-5 w-16'/>
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