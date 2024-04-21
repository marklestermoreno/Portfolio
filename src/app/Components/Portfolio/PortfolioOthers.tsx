import { db } from "@/app/firebase-config";
import { ProjectsOtherInfo } from "@/interfaces/ProjectsOtherInfo";
import { collection, onSnapshot, orderBy, query, limit, startAfter, DocumentSnapshot, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import LoadingData from "../Other/LoadingData";
import { ModalDesc } from "../Other/ModalDesc";

import Image from "next/image";

export default function PortfolioOthers() {

    const recordsPerPage = 6;

    const [data, setData] = useState<ProjectsOtherInfo[]>([]);
    const [lastDocument, setLastDocument] = useState<DocumentSnapshot<DocumentData> | null>(null);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [loaded, setLoaded] = useState(true);

    const dataCollectionRef = collection(db, "projectOther");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const q = query(dataCollectionRef, orderBy("id", "desc"), limit(recordsPerPage));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const fetchedData: ProjectsOtherInfo[] = [];
                snapshot.forEach((doc) => {
                    const data = doc.data() as ProjectsOtherInfo;
                    fetchedData.push(data);
                });
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
            const fetchedData: ProjectsOtherInfo[] = [];
            snapshot.forEach((doc) => {
                const data = doc.data() as ProjectsOtherInfo;
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


    /* Read More Modal */
    const [isModalDescOpen, setIsModalDescOpen] = useState(false);
    const [modalDescData, setModalDescData] = useState<ProjectsOtherInfo>();


    const openModalDesc = (projectsWebInfo: ProjectsOtherInfo) => {
        setModalDescData(projectsWebInfo);
        setIsModalDescOpen(true);
    };

    const closeModalDesc = () => setIsModalDescOpen(false);


    return (
        <>
            <div className="flex flex-wrap justify-around gap-4 mt-10">
                {data.map((item, index) => (
                    <div className="bg-[#1B1B1B] rounded-sm custom-shadow" key={index}>
                        <div className="flex justify-center text-center relative">
                            {!loaded ?
                                (
                                    <div className="blinking-dot"></div>
                                )
                                :
                                (
                                    <Image
                                        width={1000}
                                        height={1000}
                                        loading="lazy"
                                        src={item.image}
                                        alt={`${item.name}-image`}
                                        onLoad={() => setLoaded(true)}
                                        className="w-full h-auto grayscale hover:filter-none  hover:cursor-pointer transition-all duration-150"
                                    />
                                )
                            }
                            <span className="absolute right-3 top-3 bg-[#ff014f] text-xs px-2 py-1"> {item.type} </span>
                        </div>

                        <div className="hover:text-[#ff014f] hover:duration-150 hover:cursor-pointer">
                            <h3 className="text-lg font-semibold mx-4 mt-5">{item.name}</h3>
                        </div>

                        <p className="text-sm text-[#787878] font-light text-justify mx-4 mt-2">
                            {item.description.length > 250 ? `${item.description.substring(0, 250)}...` : item.description}
                        </p>

                        <div className="flex justify-center mx-5">
                            <p className="text-sm font-bold my-5 hover:cursor-pointer hover:text-[#ff014f] hover:duration-150" onClick={() => openModalDesc(item)}>  READ MORE </p>
                        </div>

                        <div className="text-start mx-4 border-t border-1 border-[#787878]">
                            <p className="text-xs italic text-[#C5C5C5] uppercase mt-2"> {item.dateCreated} </p>
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

            <ModalDesc isModalOpen={isModalDescOpen} closeModal={closeModalDesc} previewImage={modalDescData?.image}>
                <div className="text-start mb-4">
                    <p className="text-xl text-center text-[#ff014f] font-semibold">{modalDescData?.name}</p>

                    <div>
                        <p className="text-md text-[#ff014f] font-semibold text-justify"> Description</p>
                        <p className="text-xs mt-2 text-neutral-500"> {modalDescData?.description} </p>
                    </div>

                    {modalDescData?.github.length !== 0 && (
                        <p className="text-md text-[#ff014f] font-semibold text-justify mt-3">
                            Github:
                            <a className="text-xs mt-2 font-normal hover:text-neutral-500 text-blue-500" target="_blank"
                                href={modalDescData?.github}> {modalDescData?.github} </a>
                        </p>
                    )}

                    {modalDescData?.link.length !== 0 && (
                        <p className="text-md text-[#ff014f] font-semibold text-justify mt-1">
                            Youtube:
                            <a className="text-xs mt-2 font-normal hover:text-neutral-500 text-blue-500" target="_blank"
                                href={`https://www.youtube.com/watch?v=${modalDescData?.link}`}> Watch it here </a>
                        </p>
                    )}

                </div>
            </ModalDesc>
        </>
    )
}
