import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import { Tooltip } from 'antd';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const AchievementsCards = ({ user }) => {

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
            original: user.image[0],
            thumbnail: user.image[0],
        },
        {
            original: user.image[1],
            thumbnail: user.image[1],
        },
        {
            original: user.image[2],
            thumbnail: user.image[2],
        },
        {
            original: user.image[3],
            thumbnail: user.image[3],
        },
    
    ];

    return (

        <VerticalTimelineElement key={user.id}
            className="vertical-timeline-element--work py-10"
            contentStyle={{ background: '#212224', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date={<p className='text-white'> {user.date}  </p>}
            iconStyle={{ background: '#fe4066', color: 'white' }}
            icon={<Tooltip placement="topLeft" title={user.title} color='#fe4066' mouseEnterDelay={-0.5} mouseLeaveDelay={-0.5}> {user.icon}   </Tooltip>}
        >

            <div onClick={user.image === '' ? '' : toggleModal} key={user.id}>
                <h1 className='text-white 
                sm:text-[20px] 
                xs:text-[15px]
                xxsm:text-[13px]
                font-medium'>
                    {user.name}
                </h1>
                <p className='
                sm:text-base
                xs:text-sm
                xxsm:text-[7px]
                font-thin'>
                    {user.subname}
                </p>
            </div>
            {/* Popup box */}
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay' ></div>
                    <div className='modal-content 
                        flex flex-col items-center duration-200 hide-scrollbar overflow-y-auto scrollbar-hide '>
                        {
                            user.image.length === 1 ?
                                <img src={user.image} alt='certificate' />
                                :
                                <div className='sm:py-5 xxsm:py-2'>
                                    <ImageGallery
                                        className='rounded-lg'
                                        items={images}
                                        showFullscreenButton={true}
                                        autoPlay showPlayButton={false}
                                        showNav={false} />
                                </div>
                        }
                        <p className='font-thin'>
                            {user.name}
                        </p>
                    </div>
                </div>
            )}
        </VerticalTimelineElement>

    )
}

export default AchievementsCards