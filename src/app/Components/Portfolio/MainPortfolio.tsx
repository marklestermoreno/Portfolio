import Tabs from "../Other/Tabs";
import PortfolioEditing from "./PortfolioEditing";
import PortfolioOthers from "./PortfolioOthers";
import PortfolioWeb from "./PortfolioWeb";

import "./Portfolio.css"

export default function MainPortfolio() {

    const tabs = [
        {
            title: 'Website Projects',
            component: <PortfolioWeb />
        },
        {
            title: 'Media Projects',
            component: <PortfolioEditing />
        },
        {
            title: 'Other Projects',
            component: <PortfolioOthers />
        }
    ];

    return (
        <>
            <div className='mx-5 my-20' id='portfolio'>
                <h2 className=' text-white text-xl lg:text-4xl font-bold text-center'>
                    Unveiling My Creative Universe: <span className='text-[#ff014f]'> <br />
                        Explore My Personal Projects! </span>                </h2>
                <p className='text-center text-gray-500 mx-5 md:mx-32 mt-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae eros mauris.
                    Morbi bibendum eu purus ut euismod. Vestibulum gravida elit nibh, et malesuada ante porta
                    ac. Maecenas volutpat ligula a varius tempor. Suspendisse potenti. Duis volutpat viverra
                    lacus. Ut ante neque, auctor commodo ex nec, imperdiet rhoncus sapien.
                </p>

                <Tabs tabs={tabs} />

            </div>
        </>
    )
}