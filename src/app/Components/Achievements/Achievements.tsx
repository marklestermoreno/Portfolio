import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { AchievementInfo } from "@/interfaces/AchiemevementInfo";

import Modal from "../Other/Modal";

import "./Achievements.css"
import { db } from "@/app/firebase-config";

export default function Achievements() {

    const [data, setData] = useState<AchievementInfo[]>([]);
    const dataCollectionRef = collection(db, "achievements");

    useEffect(() => {
        const fetchData = async () => {
            const q = query(dataCollectionRef, orderBy("sequence", "desc"));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const fetchedData: AchievementInfo[] = [];
                snapshot.forEach((doc) => {
                    const data = doc.data() as AchievementInfo;
                    fetchedData.push({ ...data });
                });
                setData(fetchedData);
            });
            return unsubscribe;
        };

        fetchData();
    }, []);


    /* Modal */

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className='mx-5 mt-20' id='info'>
                <h2 className=' text-white lg:text-4xl font-bold text-center'>
                    Epic Wins:<span className='text-[#ff014f]'> My Success Story</span>.
                </h2>
                <p className='text-center text-gray-500 mx-32 mt-5'>
                    <b> As of November 22, 2022, </b> under the provision of Amended RA (9048).
                    I have officially and legally updated my middle name from <b> "Peña" to "Dela Peña" </b>.
                    Any certificates that has a middle name of Peña or middle initial of P before the subjected date is still considered mine.
                    <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/Affidavit.pdf?alt=media&token=7429e80b-fb5e-4588-b2fe-fa3dbade3519" target="_blank"> Read Affidafit Here </a>
                </p>

                <div className="flex flex-wrap justify-around gap-4 mt-10">
                    {data.map((item, index) => (
                        <>
                            <div className="achievements-container" key={index}>
                                <div className="flex flex-wrap justify-between items-center mb-4">
                                    <div className='flex flex-col justify-start items-start '>
                                        {
                                            item.image.length != 0 ?
                                                <></> :
                                                <button className="btn-achievements" onClick={openModal}> View Image </button>
                                        }
                                        <p className='text-white text-xl font-bold mt-4'>{item.title}</p>
                                        <div className="flex">
                                            <p className='text-[#6d6d6d] text-xs font-light'>{item.subname}</p>
                                            <span className="border-l-2 border-[#6d6d6d] mx-1" />
                                            <p className='text-[#6d6d6d] text-xs font-light'>{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <img src={item.icon} className='w-12 h-12 rounded-full hover:brightness-110' />
                                    </div>
                                </div>
                                <div className="separator"> </div>
                                <div className="text-justify -mt-4">
                                    <span className="text-[#ff014f] text-xs font-medium"> DESCRIPTION </span>
                                    <p className="text-[#999999] text-xs font-extralight mt-2"> {item.description}</p>
                                </div>
                            </div>
                            <ModalComponent isModalOpen={isModalOpen} closeModal={closeModal} image={item.image} />
                        </>
                    ))}
                </div>
            </div>

        </>
    );
}



export const ModalComponent = ({ isModalOpen, closeModal, image }: { isModalOpen: boolean; closeModal: any, image: string[] }) => {
    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            {
                image.map((item) => (
                    <>
                        <img src={item} alt="achievements" className="w-20 h-20" />
                    </>
                ))

            }
        </Modal>
    )
} 