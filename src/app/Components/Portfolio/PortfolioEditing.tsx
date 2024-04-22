import { db } from "@/app/firebase-config";
import { ProjectsLogoInfo } from "@/interfaces/ProjectsLogoInfo";
import { collection, onSnapshot, orderBy, query, limit, startAfter, DocumentSnapshot, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import Image from "next/image";

import LoadingData from "../Other/LoadingData";

export default function PortfolioWeb() {

    const recordsPerPage = 6;

    const [data, setData] = useState<ProjectsLogoInfo[]>([]);
    const [lastDocument, setLastDocument] = useState<DocumentSnapshot<DocumentData> | null>(null);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [loaded, setLoaded] = useState(true); // Initialize loaded state to true

    const dataCollectionRef = collection(db, "projectLogo");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const q = query(dataCollectionRef, orderBy("sequence", "desc"), limit(recordsPerPage));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const fetchedData: ProjectsLogoInfo[] = [];
                snapshot.forEach((doc) => {
                    const data = doc.data() as ProjectsLogoInfo;
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
            const q = query(dataCollectionRef, orderBy("sequence", "desc"), startAfter(lastDocument), limit(recordsPerPage));
            const snapshot = await getDocs(q);
            const fetchedData: ProjectsLogoInfo[] = [];
            snapshot.forEach((doc) => {
                const data = doc.data() as ProjectsLogoInfo;
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

    return (
        <>
            <div className="flex flex-wrap justify-around gap-4 mt-10">
                {data.map((item, index) => (
                    <div className="bg-[#1B1B1B] rounded-sm custom-shadow" key={index}>
                        <div className="flex justify-center text-center relative">
                            {!loaded ? (
                                <div className="blinking-dot"></div>
                            ) : (
                                <Image
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    src={item.image[0]}
                                    alt={`${item.name}-image`}
                                    className="w-full h-auto grayscale hover:filter-none  hover:cursor-pointer transition-all duration-150"
                                    onLoad={() => setLoaded(true)} // Adding onLoad event handler
                                />
                            )}
                            <span className="absolute right-3 top-3 bg-[#ff014f] text-xs px-2 py-1"> {item.type.toUpperCase()} </span>
                        </div>

                        <div className="hover:text-[#ff014f] hover:duration-150 hover:cursor-pointer">
                            <h3 className="text-lg font-semibold mx-4 mt-5">{item.name}</h3>
                            <p className="text-xs text-[#C5C5C5] uppercase mb-4"> {item.tags} </p>
                        </div>

                        <div className="text-start mx-4 border-t border-1 border-[#787878]">
                            <p className="text-xs italic text-[#C5C5C5] uppercase mt-2"> {item.dateCreated} </p>
                        </div>
                    </div>
                ))}
            </div>
            {loading && <LoadingData />}
            {
                !loading && hasMore && (
                    <button onClick={handleLoadMore} className="bg-[#ff014f] text-white px-4 py-2 rounded mt-10">
                        Load More
                    </button>
                )
            }
        </>
    );
}
