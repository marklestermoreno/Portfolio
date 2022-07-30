import React from 'react'
import { Link } from 'react-router-dom'
import video from '../src/assets/video/Signature.mp4'

const Loading = () => {
    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <Link to='/'>
                    <video
                        src={video}
                        type='video/mp4'
                        loop
                        controls={false}
                        muted
                        autoPlay
                        className='h-screen w-full object-cover'
                    />
                </Link>
            </div>
        </div>
    )
}

export default Loading