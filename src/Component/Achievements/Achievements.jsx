import React from 'react'

import { achievements } from '../data';
import AchievementsCards from './AchievementsCards';
import { VerticalTimeline } from 'react-vertical-timeline-component';

const Achievements = () => {


    return (
        <>
            <div className='flex flex-col' id='achievements'>
                <h1 className=' text-white lg:text-[30px] md:text-[25px] sm:text-[20px] mx-8'> Achievements </h1>
                <div className='py-10 sm:mx-10 xxsm:mx-5'>
                    <VerticalTimeline className=''>
                        {achievements.map((user, i) => (
                            <AchievementsCards user={user} key={i} />
                        ))}
                    </VerticalTimeline>
                </div>
            </div>


        </>
    )
}

export default Achievements