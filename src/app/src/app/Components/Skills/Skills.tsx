import { useEffect, useState } from 'react'
import { db } from '../../firebase-config';

import Slider from "react-slick";

import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import "./Skills.css";
import { SkillsInfo } from '@/interfaces/SkillsInfo';

export default function Skills() {

    const [data, setData] = useState<SkillsInfo[]>([]);
    const dataCollectionRef = collection(db, "skills");


    useEffect(() => {
        const fetchData = async () => {
            const q = query(dataCollectionRef, orderBy("id", "asc"));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const fetchedData: SkillsInfo[] = [];
                snapshot.forEach((doc) => {
                    const data = doc.data() as SkillsInfo;
                    fetchedData.push({ ...data });
                });
                setData(fetchedData);
            });
            return unsubscribe;
        };

        fetchData();


    }, []);

    var settings = {
        dots: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        slidesToShow: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                }
            },
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
                breakpoint: 772,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    };


    return (
        <>
            <div className='mx-5 my-20' id='info'>
                <h2 className=' text-white lg:text-2xl'> Skills </h2>
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div className='mt-4 flex flex-col justify-center items-center' key={index}>
                            <div className='container-skills flex flex-col items-center p-5 mx-2'>
                                <img src={item.image} alt={`${item.name}-icons`} className='w-20 h-20' />
                                <div className='flex flex-col justify-center items-center '>
                                    <p className='text-white text-xl font-bold mt-5'>{item.name}</p>
                                    <p className='text-white items-center text-center'>
                                        <span> Skill Level: </span> {item.skillLevel}
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
        </>

    );
}
