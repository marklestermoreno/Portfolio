
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import ImageGallery from 'react-image-gallery';

const ReactCards = ({ item }) => {

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
      original: item.image[0],
      thumbnail: item.image[0],
    },
    {
      original: item.image[1],
      thumbnail: item.image[1],
    },
    {
      original: item.image[2],
      thumbnail: item.image[2],
    }, {
      original: item.image[3],
      thumbnail: item.image[3],
    },
    {
      original: item.image[4],
      thumbnail: item.image[4],
    }
  ];


  return (
    <>


      <div className='flex justify-center items-center text-center' key={item.id} onClick={toggleModal}>
        <div className='bg-[#212224] rounded-xl basic-1/3 shadow-lg shadow-slate-50 text-white 
                                        hover:-translate-y-3 hover:cursor-pointer duration-150'>

          <img src={item.image[0]} alt='photoshop' className='rounded-lg p-5' />
          <div className='flex flex-col'>
            <div className='flex justify-center items-start px-7 pb-5'>
              <h1 className='capitalize text-xl font-medium text-white tracking-wide'> {item.name} </h1>
            </div>
            <div className='flex flex-col justify-between items-start text-start px-7 pb-5'>
              <h1 className='text-[#fe4066] capitalize text-[17px]'> {item.type} </h1>
              <h1 className='text-white capitalize -mt-2'> {item.dateCreated.toDate().toDateString()} </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay' ></div>
          <div className=' modal-content flex flex-col items-center duration-200 hide-scrollbar overflow-y-auto scrollbar-hide '>

            <div className='sm:py-5 xxsm:py-2'>
              <ImageGallery
                className='rounded-lg'
                items={images}
                showFullscreenButton={true}
                showPlayButton={false}
                showNav={false} />
            </div>
            <div className='mt-10 mx-10 sm:ml-10 xs:ml-7 xsm:ml-6 xxsm:ml-4 xsm:mr-5 xxsm:mr-5'>
              <h1 className='text-[#fe4066] 
                                            lg:text-[35px]
                                            2xl:text-[45px]
                                            md:text-[30px]
                                            sm:text-[20px]
                                            xsm:text-[12px]
                                            xxsm:text-[7px] xxsm:-mt-10
                                            font-semibold hover:text-[#fe4066]'>
                {item.name}
              </h1>
              <p className='lg:text-lg
                                            md:text-[15px]
                                        2xl:text-[20px]
                                        sm:text-[13px]
                                        xs:text-[9px] xs:-mt-0
                                        xsm:text-[7px] xsm:-mt-2
                                        xxsm:text-[5px] xxsm:-mt-1
                            '> {item.tags} </p>
              <p className='lg:text-[15px] 
                                         md:text-[13px]
                                         2xl:text-[20px]
                                         sm:text-[11px]
                                         xs:text-[9px]
                                         xsm:text-[6px]
                                         xxsm:text-[4px]
                            font-semibold'> Notes:
                <span className='font-thin'> {item.notes}  </span> </p>
              <p className='lg:text-[15px] 
                                         md:text-[13px]
                                         2xl:text-[20px]
                                         sm:text-[11px] sm:mb-0
                                         xs:text-[9px]
                                         xsm:text-[6px]  xsm:-mb-1
                                         xxsm:text-[4px] xxsm:-mb-2
                            font-semibold'> Technology:
                <span className='text-[#fe4066] font-thin'> {item.technology}  </span> </p>
              <span className='lg:text-[15px] 
                                         md:text-[13px]
                                         2xl:text-[20px]
                                         sm:text-[11px] 
                                         xs:text-[9px]
                                         xsm:text-[6px] 
                                         xxsm:text-[4px]
                            font-semibold'> Demo Link:
                <a href={item.link} className='text-[#fe4066] font-thin'> {item.link}  </a> </span>
              <p className='lg:text-[15px]
                                         md:text-[13px]
                                         2xl:text-[20px]
                                         sm:text-[11px]
                                         xs:text-[9px]
                                         xsm:text-[6px] 
                                         xxsm:text-[4px]
                            font-semibold'> Github Link:
                <a href={item.githublink} className='text-[#fe4066] font-thin'> {item.githublink}  </a> </p>

              {item.previewLink === '' ?
                <></> :
                <p className='lg:text-[15px]
               md:text-[13px]
               2xl:text-[20px]
               sm:text-[11px]
               xs:text-[9px]
               xsm:text-[6px] 
               xxsm:text-[4px]
              font-semibold'> System Design Link:
                  <a href={item.previewLink} className='text-[#fe4066] font-thin'> {item.previewLink}  </a> </p>

              }

              {item.videoAds === '' ?
                <></> :
                <p className='lg:text-[15px]
               md:text-[13px]
               2xl:text-[20px]
               sm:text-[11px]
               xs:text-[9px]
               xsm:text-[6px] 
               xxsm:text-[4px]
                font-semibold'> Website Ads Link:
                  <a href={item.videoAds} className='text-[#fe4066] font-thin'> {item.videoAds}  </a> </p>

              }

              {item.videoDemo === '' ?
                <></> :
                <p className='lg:text-[15px]
               md:text-[13px]
               2xl:text-[20px]
               sm:text-[11px]
               xs:text-[9px]
               xsm:text-[6px] 
               xxsm:text-[4px]
                font-semibold'> Web Demo Link:
                  <a href={item.videoDemo} className='text-[#fe4066] font-thin'> {item.videoDemo}  </a> </p>

              }
              <p className='lg:text-[15px] 
                                         md:text-[13px]
                                         2xl:text-[20px]
                                         sm:text-[11px]
                                         xs:text-[9px]
                                         xsm:text-[6px] 
                                         xxsm:text-[4px]
                            font-thin'> {item.description} </p>
              <div className='modal-text right'>
                <button className='close-modal btn_shadow xxsm:hidden xs:flex' onClick={toggleModal}>
                  <AiFillCloseCircle size={30} />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default ReactCards