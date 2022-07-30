import React, { useState } from 'react'

import { projectsLogo } from '../data'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PhotoshopCards from './PhotoshopCards';

const Portfolio = () => {

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





    return (
        <>
            <div className='flex flex-col'>
                <h1 className=' text-white lg:text-[30px] md:text-[25px] sm:text-[20px] mx-8'> Portfolio </h1>
                <Tabs>
                    <TabList className='flex justify-center py-5 my-5'>
                        <Tab className='selected:bg-[#fe4066] hover:bg-[#fe4066] bg-[#212224] border border-white rounded-l-sm cursor-pointer text-white focus:border-none py-4 px-16 text-2xl'>Photoshop </Tab>
                        <Tab className='selected:bg-[#fe4066] hover:bg-[#fe4066] bg-[#212224] border border-white cursor-pointer text-white focus:border-none py-4 px-16 text-2xl'>React App</Tab>
                        <Tab className='selected:bg-[#fe4066] hover:bg-[#fe4066] bg-[#212224] border border-white cursor-pointer text-white focus:border-none py-4 px-16 text-2xl'>Codepen</Tab>
                        <Tab className='selected:bg-[#fe4066] hover:bg-[#fe4066] bg-[#212224] border border-white rounded-r-sm cursor-pointer text-white focus:border-none py-4 px-16 text-2xl'>Java</Tab>
                    </TabList>

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
                        <h2 className='text-white'>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-white'>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-white'>Any content 4</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default Portfolio