import React, { useState, useEffect } from 'react'

// import { achievements } from '../data';
import AchievementsCards from './AchievementsCards';
import { VerticalTimeline } from 'react-vertical-timeline-component';

// Database
import { db } from '../../firebase-config'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const Achievements = () => {

    const [achievements, setAchievements] = useState([])

    const achievementsCollectionRef = collection(db, "achievements");

    useEffect(() => {

        const q = query(achievementsCollectionRef, orderBy("date", "desc"));
        onSnapshot(q, achievementsCollectionRef, snapshot => {
            setAchievements(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            )
        })

    }, [achievementsCollectionRef])


    return (
        <>
            <div className='flex flex-col' id='achievements'>
                <h1 className=' text-white lg:text-[30px] md:text-[25px] sm:text-[20px] mx-8'> Achievements </h1>
                <div className='flex justify-center text-center items-center'>
                    <h1 className='text-white 2xl:text-[20px] lg:text-[17px] md:text-[13px] sm:text-[11px] xs:text-[9] xsm:text-[7px] xxsm:text-[5px]
                        2xl:mx-96
                        lg:mx-64
                        md:mx-48
                        sm:mx-32
                        xs:mx-24
                        xsm:mx-12
                        xxsm:mx-6
                        pt-10'>
                        <b> As of November 22, 2022, </b> under the provision of Amended RA (9048).             
                        I have officially and legally updated my middle name from <b> "Peña" to "Dela Peña" </b>. 
                        Any certificates that has a middle name of Peña or middle initial of P before the subjected date is still considered mine. 
                        <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/Affidafit.pdf?alt=media&token=6683ce31-0cc9-4319-9f42-1d98ad8d1602"> Read Affidafit Here </a>
                    </h1>
                </div>
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
