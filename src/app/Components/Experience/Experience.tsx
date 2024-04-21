import { useEffect, useState } from 'react'
import { db } from '../../firebase-config';

import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import "./Experience.css";
import { ExperienceInfo } from '@/interfaces/ExperienceInfo';
import Image from 'next/image';


export default function Experience() {

    const [data, setData] = useState<ExperienceInfo[]>([]);
    const dataCollectionRef = collection(db, "Experience");

    useEffect(() => {
        const fetchData = async () => {
            const q = query(dataCollectionRef, orderBy("id", "desc"));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const fetchedData: ExperienceInfo[] = [];
                snapshot.forEach((doc) => {
                    const data = doc.data() as ExperienceInfo;
                    fetchedData.push({ ...data });
                });
                setData(fetchedData);
            });
            return unsubscribe;
        };

        fetchData();

    }, []);

    const schoolExperiences = data.filter(item => item.categories.toUpperCase() === "SCHOOL" || window.innerWidth < 768);
    const workExperiences = data.filter(item => item.categories.toUpperCase() !== "SCHOOL" && window.innerWidth >= 768);



    return (
        <>
            <div className='mx-5 mt-10' id='experience'>
                <h2 className=' text-white text-xl lg:text-4xl font-bold text-center'>
                    My History of <span className='text-[#ff014f]'> Success</span>.
                </h2>
                <p className='text-center text-gray-500 mx-5 md:mx-32 mt-5'>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Convallis a cras semper auctor neque vitae. Viverra accumsan in nisl nisi scelerisque eu ultrices. Dignissim enim sit amet venenatis urna cursus eget.
                </p>
                <div className='container'>

                    <div className="timeline">
                        {schoolExperiences.map((item, index) => (
                            <ExperiencesComponent index={index} item={item} />
                        ))}
                    </div>


                    <div className="timeline">
                        {workExperiences.map((item, index) => (
                            <ExperiencesComponent index={index} item={item} />
                        ))}
                    </div>


                </div>
            </div>
        </>

    );
}


export const ExperiencesComponent = ({ index, item }: { index: number; item: ExperienceInfo }) => {
    return (
        <div className="timeline-container" key={index}>
            <div className="timeline-icon"> </div>
            <div className="timeline-body">
                <Image width={66} height={60}
                 src={item.image} alt='experience-image' className='w-12 mb-4' />
                <h4 className="timeline-name">{item.title}</h4>
                <h4 className="timeline-title mt-2"><span className="badge">{item.name}</span></h4>
                <p> {item.description}</p>
                <p className="timeline-subtitle">{item.date}</p>
            </div>
        </div>

    )
} 