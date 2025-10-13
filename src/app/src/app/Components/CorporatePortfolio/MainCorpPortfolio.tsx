import { db } from "@/app/firebase-config";
import { ProjectsWebInfo } from "@/interfaces/ProjectsWebInfo";
import { collection, onSnapshot, orderBy, query, limit, where, startAfter, DocumentSnapshot, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ModalDesc } from "../Other/ModalDesc";
import { ModalImage } from "../Other/ModalImage";

import Image from 'next/image'
import LoadingData from "../Other/LoadingData";

export default function MainCorpPortfolio() {


    const recordsPerPage = 6;

    const [data, setData] = useState<ProjectsWebInfo[]>([]);
    const [lastDocument, setLastDocument] = useState<DocumentSnapshot<DocumentData> | null>(null);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [loaded, setLoaded] = useState(true);


    const dataCollectionRef = collection(db, "projectReact");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const q = query(dataCollectionRef, where("isPersonalProj", "==", false), orderBy("id", "asc"), limit(recordsPerPage));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const fetchedData: ProjectsWebInfo[] = [];
                snapshot.forEach((doc) => {
                    const data = doc.data() as ProjectsWebInfo;
                    fetchedData.push(data);
                });
                console.log(fetchData);
                setData(fetchedData);
                if (snapshot.docs.length < recordsPerPage) {
                    setHasMore(false);
                } else {
                    setLastDocument(snapshot.docs[snapshot.docs.length - 1]);
                }
                setLoading(false);
            });
            return unsubscribe;
        };

        fetchData();
    }, []);

    const handleLoadMore = async () => {
        if (lastDocument) {
            setLoading(true);
            const q = query(dataCollectionRef, orderBy("id", "desc"), startAfter(lastDocument), limit(recordsPerPage)); // Adjust the limit as per your requirement
            const snapshot = await getDocs(q);
            const fetchedData: ProjectsWebInfo[] = [];
            snapshot.forEach((doc) => {
                const data = doc.data() as ProjectsWebInfo;
                fetchedData.push(data);
            });
            setData(prevData => [...prevData, ...fetchedData]);
            if (snapshot.docs.length < recordsPerPage) {
                setHasMore(false);
            } else {
                setLastDocument(snapshot.docs[snapshot.docs.length - 1]);
            }
            setLoading(false);
        }
    };

    /* Modal */
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState<string[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? modalImage.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === modalImage.length - 1 ? 0 : prevIndex + 1));
    };

    const openModal = (image: string[]) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    /* Read More Modal */
    const [isModalDescOpen, setIsModalDescOpen] = useState(false);
    const [modalDescData, setModalDescData] = useState<ProjectsWebInfo>();


    const openModalDesc = (projectsWebInfo: ProjectsWebInfo) => {
        setModalDescData(projectsWebInfo);
        setIsModalDescOpen(true);
    };

    const closeModalDesc = () => setIsModalDescOpen(false);


    return (
        <>
            <div className='text-center mx-5 my-20' id='portfolio'>
                <h2 className=' text-white text-xl lg:text-4xl font-bold text-center'>
                    Elevating Innovation: <span className='text-[#ff014f]'> <br />
                        Explore Our Corporate Ventures! </span>   </h2>
                <p className='text-center text-gray-500 mx-5 md:mx-32 mt-5'>
                    Welcome to my corporate projects showcase! As a web designer, programmer, and developer, I focus on creating smart, effective digital solutions. Here, you&apos;ll find a selection of my work that highlights my skills in building modern websites and applications for businesses.
                    <br /> <br />
                    Please note, some of these projects are private and only accessible internally within the company. Additionally, certain freelancing projects have non-disclosure agreements (NDAs) and cannot be shown here. All work shown is credited to the companies I worked with. I don&apos;t own these projects but share them as a reference for the kind of work I&apos;ve done. If you want more details or want to talk about future projects, feel free to contact me.
                </p>

                <div className="flex flex-wrap justify-around gap-4 mt-10">
                    {data.map((item, index) => (
                        <div className="bg-[#1B1B1B] rounded-sm custom-shadow" key={index}>
                            <div className="flex justify-center text-center relative">
                                {!loaded ?
                                    <div className="blinking-dot"></div>
                                    :
                                    <Image
                                        width={500}
                                        height={500}
                                        loading="lazy"
                                        src={item.previewLink}
                                        alt={`${item.name}-image`}
                                        className="w-full h-auto grayscale hover:filter-none  hover:cursor-pointer transition-all duration-150"
                                        onLoad={() => setLoaded(true)}
                                    />
                                }
                                <span className="absolute right-3 top-3 bg-[#ff014f] text-xs px-2 py-1"> {item.type} </span>
                            </div>

                            <div className="text-center hover:text-[#ff014f] hover:duration-150 hover:cursor-pointer" onClick={() => window.open(item.link, '_blank')}>
                                <h3 className="text-lg font-semibold mx-4 mt-5">{item.name}</h3>
                                <p className="text-xs text-[#C5C5C5] uppercase mb-4"> {item.tags} </p>
                            </div>

                            <p className="text-sm text-[#787878] font-light text-justify mx-4 mt-2">
                                {item.description.length > 250 ? `${item.description.substring(0, 250)}...` : item.description}
                            </p>

                            <div className="flex justify-between mx-5">
                                <p className="text-sm font-bold my-5 hover:cursor-pointer hover:text-[#ff014f] hover:duration-150" onClick={() => openModal(item.image)}> VIEW UI </p>
                                <p className="text-sm font-bold my-5 hover:cursor-pointer hover:text-[#ff014f] hover:duration-150" onClick={() => openModalDesc(item)}>  READ MORE </p>
                            </div>

                        </div>
                    ))
                    }
                </div>
                {loading && <LoadingData />}
                {
                    !loading && hasMore && (
                        <button onClick={handleLoadMore} className="bg-[#ff014f] text-white px-4 py-2 rounded mt-10">
                            Load More
                        </button>
                    )
                }

                <ModalImage isModalOpen={isModalOpen} closeModal={closeModal} image={modalImage} currentImageIndex={currentImageIndex} handlePrevImage={handlePrevImage} handleNextImage={handleNextImage}>
                    <label className="tips"> Click <b> ESC </b> to close </label>
                    {
                        modalImage.length !== 1 && (
                            <label className="tips-v2"> Click <b> Arrows </b> to navigate to UI </label>
                        )
                    }
                </ModalImage>

                <ModalDesc isModalOpen={isModalDescOpen} closeModal={closeModalDesc} previewImage={modalDescData?.previewLink}>
                    <div className="text-start -mt-5 mb-4">
                        <p className="text-xl text-center text-[#ff014f] font-semibold">{modalDescData?.name}</p>
                        <p className="text-sm text-center text-neutral-800 font-light">{modalDescData?.tags}</p>


                        {modalDescData?.description.length !== 0 && (
                            <p className="text-md text-[#ff014f] font-semibold text-justify leading-tight mt-3">
                                Overview:
                                <span className="text-xs mt-2 ml-2 font-normal text-neutral-500">
                                    {modalDescData?.description} </span>
                            </p>
                        )}

                        {modalDescData?.notes.length !== 0 && (
                            <p className="text-md text-[#ff014f] font-semibold text-justify leading-tight mt-3">
                                Notes:
                                <span className="text-xs mt-2 ml-2 font-normal text-neutral-500">
                                    {modalDescData?.notes} </span>
                            </p>
                        )}


                        {modalDescData?.technology.length !== 0 && (
                            <p className="text-md text-[#ff014f] font-semibold text-justify mt-3">
                                Technology:
                                <span className="text-xs mt-2 ml-2 font-normal text-neutral-500">
                                    {modalDescData?.technology} </span>
                            </p>
                        )}

                        {modalDescData?.link.length !== 0 && (
                            <p className="text-md text-[#ff014f] font-semibold text-justify mt-1">
                                Website Link:
                                <a className="text-xs mt-2 font-normal hover:text-neutral-500 text-blue-500" target="_blank"
                                    href={modalDescData?.link}> {modalDescData?.link} </a>
                            </p>
                        )}

                        {modalDescData?.videoAds.length !== 0 && (
                            <p className="text-md text-[#ff014f] font-semibold text-justify mt-1">
                                Video Ads:
                                <a className="text-xs mt-2 font-normal hover:text-neutral-500 text-blue-500" target="_blank"
                                    href={modalDescData?.videoAds}> Click View Ads here </a>
                            </p>
                        )}

                        {modalDescData?.videoDemo.length !== 0 && (
                            <p className="text-md text-[#ff014f] font-semibold text-justify mt-1">
                                Video Demo:
                                <a className="text-xs mt-2 font-normal hover:text-neutral-500 text-blue-500" target="_blank"
                                    href={modalDescData?.videoDemo}> Click View Demo here </a>
                            </p>
                        )}


                    </div>
                </ModalDesc>
            </div>
        </>
    )
}