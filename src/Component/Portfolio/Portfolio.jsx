import React, { useState, useEffect } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PhotoshopCards from './PhotoshopCards';
import ReactCards from './ReactCards';
import OtherCards from './OtherCards';
import CodepenCards from './CodepenCards';

// Database
import { db } from '../../firebase-config'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const Portfolio = () => {

    // Project React


    const [projectsReact, setProjectReact] = useState([])
    const projectReactCollectionRef = collection(db, "projectReact");

    useEffect(() => {

        const q = query(projectReactCollectionRef, orderBy("dateCreated", "desc"));
        onSnapshot(q, projectReactCollectionRef, snapshot => {
            setProjectReact(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })

    }, [projectReactCollectionRef])

    // Project Other

    const [projectsOther, setProjectOther] = useState([])
    const projectOtherCollectionRef = collection(db, "projectOther");

    useEffect(() => {

        const q = query(projectOtherCollectionRef, orderBy("dateCreated", "desc"));
        onSnapshot(q, projectOtherCollectionRef, snapshot => {
            setProjectOther(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            )
        })

    }, [projectOtherCollectionRef])

    // Project Logo

    const [projectsLogo, setProjectsLogo] = useState([])
    const projectsLogoCollectionRef = collection(db, "projectLogo");

    useEffect(() => {

        const q = query(projectsLogoCollectionRef, orderBy("dateCreated", "desc"));
        onSnapshot(q, projectsLogoCollectionRef, snapshot => {
            setProjectsLogo(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            )
        })

    }, [projectsLogoCollectionRef])

    // Project Codepen

    const [projectsCodepen, setProjectsCodepen] = useState([])
    const projectCodepenCollectionRef = collection(db, "projectCodepen");

    useEffect(() => {

        const q = query(projectCodepenCollectionRef, orderBy("dateCreated", "desc"));
        onSnapshot(q, projectCodepenCollectionRef, snapshot => {
            setProjectsCodepen(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            )
        })

    }, [projectCodepenCollectionRef])


    // Pagination Photoshop

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage,] = useState(6);

    const [pageNumberLimit,] = useState(3);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(projectsLogo.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = projectsLogo.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <button
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ?
                        "bg-[#fe4066] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 cursor-not-allowed' mx-2"
                        : "bg-[#212224] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 hover:bg-[#fe4066] cursor-pointer mx-2"}
                >
                    {number}
                </button>
            );
        } else {
            return null;
        }
    });
    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <button onClick={handleNextbtn}> </button>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <button onClick={handlePrevbtn}> </button>;
    }

    const disabledPrev = currentPage === pages[0] ? true : false
    const disabledNext = currentPage === pages[pages.length - 1] ? true : false


    // Pagination React 

    const [currentPageReact, setcurrentPageReact] = useState(1);
    const [itemsPerPageReact,] = useState(6);

    const [pageNumberLimitReact,] = useState(3);
    const [maxPageNumberLimitReact, setmaxPageNumberLimitReact] = useState(3);
    const [minPageNumberLimitReact, setminPageNumberLimitReact] = useState(0);

    const handleClickReact = (event) => {
        setcurrentPageReact(Number(event.target.id));
    };

    const pagesReact = [];
    for (let i = 1; i <= Math.ceil(projectsReact.length / itemsPerPageReact); i++) {
        pagesReact.push(i);
    }

    const indexOfLastItemReact = currentPageReact * itemsPerPageReact;
    const indexOfFirstItemReact = indexOfLastItemReact - itemsPerPageReact;
    const currentItemsReact = projectsReact.slice(indexOfFirstItemReact, indexOfLastItemReact);

    const renderPageNumbersReact = pagesReact.map((numberReact) => {
        if (numberReact < maxPageNumberLimitReact + 1 && numberReact > minPageNumberLimitReact) {
            return (
                <button
                    key={numberReact}
                    id={numberReact}
                    onClick={handleClickReact}
                    className={currentPageReact === numberReact ?
                        "bg-[#fe4066] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 cursor-not-allowed' mx-2"
                        : "bg-[#212224] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 hover:bg-[#fe4066] cursor-pointer mx-2"}
                >
                    {numberReact}
                </button>
            );
        } else {
            return null;
        }
    });
    const handleNextbtnReact = () => {
        setcurrentPageReact(currentPageReact + 1);

        if (currentPageReact + 1 > maxPageNumberLimitReact) {
            setmaxPageNumberLimitReact(maxPageNumberLimitReact + pageNumberLimitReact);
            setminPageNumberLimitReact(minPageNumberLimitReact + pageNumberLimitReact);
        }
    };

    const handlePrevbtnReact = () => {
        setcurrentPageReact(currentPageReact - 1);

        if ((currentPageReact - 1) % pageNumberLimitReact === 0) {
            setmaxPageNumberLimitReact(maxPageNumberLimitReact - pageNumberLimitReact);
            setminPageNumberLimitReact(minPageNumberLimitReact - pageNumberLimitReact);
        }
    };

    let pageIncrementBtnReact = null;
    if (pagesReact.length > maxPageNumberLimitReact) {
        pageIncrementBtnReact = <button onClick={handleNextbtnReact}> </button>;
    }

    let pageDecrementBtnReact = null;
    if (minPageNumberLimitReact >= 1) {
        pageDecrementBtnReact = <button onClick={handlePrevbtnReact}> </button>;
    }

    const disabledPrevReact = currentPageReact === pagesReact[0] ? true : false
    const disabledNextReact = currentPageReact === pagesReact[pagesReact.length - 1] ? true : false


    // Pagination Other 

    const [currentPageOther, setcurrentPageOther] = useState(1);
    const [itemsPerPageOther,] = useState(6);

    const [pageNumberLimitOther,] = useState(3);
    const [maxPageNumberLimitOther, setmaxPageNumberLimitOther] = useState(3);
    const [minPageNumberLimitOther, setminPageNumberLimitOther] = useState(0);

    const handleClickOther = (event) => {
        setcurrentPageOther(Number(event.target.id));
    };

    const pagesOther = [];
    for (let i = 1; i <= Math.ceil(projectsOther.length / itemsPerPageOther); i++) {
        pagesOther.push(i);
    }

    const indexOfLastItemOther = currentPageOther * itemsPerPageOther;
    const indexOfFirstItemOther = indexOfLastItemOther - itemsPerPageOther;
    const currentItemsOther = projectsOther.slice(indexOfFirstItemOther, indexOfLastItemOther);

    const renderPageNumbersOther = pagesOther.map((numberOther) => {
        if (numberOther < maxPageNumberLimitOther + 1 && numberOther > minPageNumberLimitOther) {
            return (
                <button
                    key={numberOther}
                    id={numberOther}
                    onClick={handleClickOther}
                    className={currentPageOther === numberOther ?
                        "bg-[#fe4066] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 cursor-not-allowed' mx-2"
                        : "bg-[#212224] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 hover:bg-[#fe4066] cursor-pointer mx-2"}
                >
                    {numberOther}
                </button>
            );
        } else {
            return null;
        }
    });
    const handleNextbtnOther = () => {
        setcurrentPageOther(currentPageOther + 1);

        if (currentPageOther + 1 > maxPageNumberLimitOther) {
            setmaxPageNumberLimitOther(maxPageNumberLimitOther + pageNumberLimitOther);
            setminPageNumberLimitOther(minPageNumberLimitOther + pageNumberLimitOther);
        }
    };

    const handlePrevbtnOther = () => {
        setcurrentPageOther(currentPageOther - 1);

        if ((currentPageOther - 1) % pageNumberLimitOther === 0) {
            setmaxPageNumberLimitOther(maxPageNumberLimitOther - pageNumberLimitOther);
            setminPageNumberLimitOther(minPageNumberLimitOther - pageNumberLimitOther);
        }
    };

    let pageIncrementBtnOther = null;
    if (pagesOther.length > maxPageNumberLimitOther) {
        pageIncrementBtnOther = <button onClick={handleNextbtnOther}> </button>;
    }

    let pageDecrementBtnOther = null;
    if (minPageNumberLimitOther >= 1) {
        pageDecrementBtnOther = <button onClick={handlePrevbtnOther}> </button>;
    }

    const disabledPrevOther = currentPageOther === pagesOther[0] ? true : false
    const disabledNextOther = currentPageOther === pagesOther[pagesOther.length - 1] ? true : false

    // Pagination Codepen

    const [currentPageCodepen, setcurrentPageCodepen] = useState(1);
    const [itemsPerPageCodepen,] = useState(6);

    const [pageNumberLimitCodepen,] = useState(3);
    const [maxPageNumberLimitCodepen, setmaxPageNumberLimitCodepen] = useState(3);
    const [minPageNumberLimitCodepen, setminPageNumberLimitCodepen] = useState(0);

    const handleClickCodepen = (event) => {
        setcurrentPageCodepen(Number(event.target.id));
    };

    const pagesCodepen = [];
    for (let i = 1; i <= Math.ceil(projectsCodepen.length / itemsPerPageCodepen); i++) {
        pagesCodepen.push(i);
    }

    const indexOfLastItemCodepen = currentPageCodepen * itemsPerPageCodepen;
    const indexOfFirstItemCodepen = indexOfLastItemCodepen - itemsPerPageCodepen;
    const currentItemsCodepen = projectsCodepen.slice(indexOfFirstItemCodepen, indexOfLastItemCodepen);

    const renderPageNumbersCodepen = pagesCodepen.map((numberCodepen) => {
        if (numberCodepen < maxPageNumberLimitCodepen + 1 && numberCodepen > minPageNumberLimitCodepen) {
            return (
                <button
                    key={numberCodepen}
                    id={numberCodepen}
                    onClick={handleClickCodepen}
                    className={currentPageCodepen === numberCodepen ?
                        "bg-[#fe4066] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 cursor-not-allowed' mx-2"
                        : "bg-[#212224] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 hover:bg-[#fe4066] cursor-pointer mx-2"}
                >
                    {numberCodepen}
                </button>
            );
        } else {
            return null;
        }
    });
    const handleNextbtnCodepen = () => {
        setcurrentPageCodepen(currentPageCodepen + 1);

        if (currentPageCodepen + 1 > maxPageNumberLimitCodepen) {
            setmaxPageNumberLimitCodepen(maxPageNumberLimitCodepen + pageNumberLimitCodepen);
            setminPageNumberLimitCodepen(minPageNumberLimitCodepen + pageNumberLimitCodepen);
        }
    };

    const handlePrevbtnCodepen = () => {
        setcurrentPageCodepen(currentPageCodepen - 1);

        if ((currentPageCodepen - 1) % pageNumberLimitCodepen === 0) {
            setmaxPageNumberLimitCodepen(maxPageNumberLimitCodepen - pageNumberLimitCodepen);
            setminPageNumberLimitCodepen(minPageNumberLimitCodepen - pageNumberLimitCodepen);
        }
    };

    let pageIncrementBtnCodepen = null;
    if (pagesCodepen.length > maxPageNumberLimitCodepen) {
        pageIncrementBtnCodepen = <button onClick={handleNextbtnCodepen}> </button>;
    }

    let pageDecrementBtnCodepen = null;
    if (minPageNumberLimitCodepen >= 1) {
        pageDecrementBtnCodepen = <button onClick={handlePrevbtnCodepen}> </button>;
    }

    const disabledPrevCodepen = currentPageCodepen === pagesCodepen[0] ? true : false
    const disabledNextCodepen = currentPageCodepen === pagesCodepen[pagesCodepen.length - 1] ? true : false


    return (
        <>
            <div className='flex flex-col' id='portfolios'>
                <h1 className=' text-white lg:text-[30px] md:text-[25px] sm:text-[20px] mx-8'> Portfolio </h1>
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
                        <b>I and my team own most of the materials. </b> Any copyright that is used without my permission is <b> prohibited</b>.
                        To avoid any future issues, please contact me if you want to avert any copyright issue. Thank you!
                    </h1>
                </div>
                <Tabs>
                    <TabList className='flex justify-center py-5 my-5'>
                        <Tab className='selected:bg-[#fe4066] hover:bg-[#fe4066] bg-[#212224] border border-white rounded-l-sm cursor-pointer text-white focus:border-none 
                        lg:py-4 lg:px-16 lg:text-2xl
                        md:py-4 md:px-12 md:text-xl 
                        sm:py-4 sm:px-10 sm:text-lg
                        xs:py-4 xs:px-6 xs:text-base
                        xsm:py-3 xsm:px-5 xsm:text-[10px]
                        xxsm:py-2 xxsm:px-4 xxsm:text-[8px]
                        '> React App </Tab>
                        <Tab className='selected:bg-[#fe4066] hover:bg-[#fe4066] bg-[#212224] border border-white cursor-pointer text-white focus:border-none 
                        lg:py-4 lg:px-16 lg:text-2xl
                        md:py-4 md:px-12 md:text-xl 
                        sm:py-4 sm:px-10 sm:text-lg
                        xs:py-4 xs:px-6 xs:text-base
                        xsm:py-3 xsm:px-5 xsm:text-[10px]
                        xxsm:py-2 xxsm:px-4 xxsm:text-[8px]
                        '> Photoshop </Tab>
                        <Tab className='selected:bg-[#fe4066] hover:bg-[#fe4066] bg-[#212224] border border-white cursor-pointer text-white focus:border-none 
                        lg:py-4 lg:px-16 lg:text-2xl
                        md:py-4 md:px-12 md:text-xl 
                        sm:py-4 sm:px-10 sm:text-lg
                        xs:py-4 xs:px-6 xs:text-base
                        xsm:py-3 xsm:px-5 xsm:text-[10px]
                        xxsm:py-2 xxsm:px-4 xxsm:text-[8px]
                        '>Others</Tab>
                        <Tab className='selected:bg-[#fe4066] hover:bg-[#fe4066] bg-[#212224] border border-white rounded-r-sm cursor-pointer text-white focus:border-none 
                        lg:py-4 lg:px-16 lg:text-2xl
                        md:py-4 md:px-12 md:text-xl 
                        sm:py-4 sm:px-10 sm:text-lg
                        xs:py-4 xs:px-6 xs:text-base
                        xsm:py-3 xsm:px-5 xsm:text-[10px]
                        xxsm:py-2 xxsm:px-4 xxsm:text-[8px]
                        '>Codepen</Tab>
                    </TabList>



                    <TabPanel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-10 w-full mx-auto pt-10 px-10">
                            {
                                currentItemsReact.map((item, id) => {
                                    return <ReactCards key={id} item={item} />
                                })

                            }
                        </div>

                        <div className='flex items-center text-center justify-center ml-3 py-10'>
                            <div className=''>
                                <button
                                    className={!disabledPrevReact ?
                                        'bg-[#212224] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 hover:bg-[#fe4066] duration-150 cursor-pointer'
                                        :
                                        'bg-gray-400 text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 cursor-not-allowed'
                                    }
                                    onClick={handlePrevbtnReact}
                                    disabled={disabledPrevReact}
                                >
                                    Prev
                                </button>
                            </div>
                            <div className='px-3 py-3'>  {pageDecrementBtnReact} </div>
                            <div className='px-3 py-3'>  {renderPageNumbersReact} </div>
                            <div className='px-3 py-3'>  {pageIncrementBtnReact} </div>
                            <div>
                                <button
                                    className={
                                        !disabledNextReact ?
                                            'bg-[#212224] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 hover:bg-[#fe4066] duration-150 cursor-pointer'
                                            :
                                            'bg-gray-400 text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 cursor-not-allowed'
                                    }
                                    onClick={handleNextbtnReact}
                                    disabled={disabledNextReact}
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                    </TabPanel>


                    <TabPanel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-10 w-full mx-auto pt-10 px-10">
                            {
                                currentItems.map((item, id) => {
                                    return <PhotoshopCards key={id} item={item} />
                                })

                            }
                        </div>
                        <div className='flex items-center text-center justify-center ml-3 py-10'>
                            <div className=''>
                                <button
                                    className={!disabledPrev ?
                                        'bg-[#212224] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 hover:bg-[#fe4066] duration-150 cursor-pointer'
                                        :
                                        'bg-gray-400 text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 cursor-not-allowed'
                                    }
                                    onClick={handlePrevbtn}
                                    disabled={disabledPrev}
                                >
                                    Prev
                                </button>
                            </div>
                            <div className='px-3 py-3'>  {pageDecrementBtn} </div>
                            <div className='px-3 py-3'>  {renderPageNumbers} </div>
                            <div className='px-3 py-3'>  {pageIncrementBtn} </div>
                            <div>
                                <button
                                    className={
                                        !disabledNext ?
                                            'bg-[#212224] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 hover:bg-[#fe4066] duration-150 cursor-pointer'
                                            :
                                            'bg-gray-400 text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 cursor-not-allowed'
                                    }
                                    onClick={handleNextbtn}
                                    disabled={disabledNext}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-10 w-full mx-auto pt-10 px-10">
                            {
                                currentItemsOther.map((item, id) => {
                                    return <OtherCards key={id} item={item} />
                                })

                            }
                        </div>

                        <div className='flex items-center text-center justify-center ml-3 py-10'>
                            <div className=''>
                                <button
                                    className={!disabledPrevOther ?
                                        'bg-[#212224] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 hover:bg-[#fe4066] duration-150 cursor-pointer'
                                        :
                                        'bg-gray-400 text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 cursor-not-allowed'
                                    }
                                    onClick={handlePrevbtnOther}
                                    disabled={disabledPrevOther}
                                >
                                    Prev
                                </button>
                            </div>
                            <div className='px-3 py-3'>  {pageDecrementBtnOther} </div>
                            <div className='px-3 py-3'>  {renderPageNumbersOther} </div>
                            <div className='px-3 py-3'>  {pageIncrementBtnOther} </div>
                            <div>
                                <button
                                    className={
                                        !disabledNextOther ?
                                            'bg-[#212224] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 hover:bg-[#fe4066] duration-150 cursor-pointer'
                                            :
                                            'bg-gray-400 text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 cursor-not-allowed'
                                    }
                                    onClick={handleNextbtnOther}
                                    disabled={disabledNextOther}
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-10 w-full mx-auto pt-10 px-10">
                            {
                                currentItemsCodepen.map((item, id) => {
                                    return <CodepenCards key={id} item={item} />
                                })

                            }
                        </div>

                        <div className='flex items-center text-center justify-center ml-3 py-10'>
                            <div className=''>
                                <button
                                    className={!disabledPrevCodepen ?
                                        'bg-[#212224] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 hover:bg-[#fe4066] duration-150 cursor-pointer'
                                        :
                                        'bg-gray-400 text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 cursor-not-allowed'
                                    }
                                    onClick={handlePrevbtnCodepen}
                                    disabled={disabledPrevCodepen}
                                >
                                    Prev
                                </button>
                            </div>
                            <div className='px-3 py-3'>  {pageDecrementBtnCodepen} </div>
                            <div className='px-3 py-3'>  {renderPageNumbersCodepen} </div>
                            <div className='px-3 py-3'>  {pageIncrementBtnCodepen} </div>
                            <div>
                                <button
                                    className={
                                        !disabledNextCodepen ?
                                            'bg-[#212224] text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 hover:bg-[#fe4066] duration-150 cursor-pointer'
                                            :
                                            'bg-gray-400 text-white sm:text-base xs:text-[10px] xxsm:text-[7px] sm:rounded-lg xxsm:rounded-sm sm:px-6 sm:py-3 xxsm:px-2 xxsm:py-1 cursor-not-allowed'
                                    }
                                    onClick={handleNextbtnCodepen}
                                    disabled={disabledNextCodepen}
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default Portfolio