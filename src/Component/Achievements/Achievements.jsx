import React, {useState, useEffect} from 'react'

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
            }})
          )
        })
    
      }, [achievementsCollectionRef])


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