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
                    Here, you'll step into the dynamic world where my creativity meets code. As a web designer, programmer, and developer, I've poured my passion into crafting unique digital experiences that push boundaries and spark innovation. Get ready to embark on a journey through my diverse portfolio, where each project tells a story of imagination, skill, and endless possibilities. So, let's dive in and discover the wonders of my creative universe together!

                    <br /> <br />

                    Please note that only personal projects are showcased on this website. Work-related projects, including those developed under contract or for employers, are not featured here. If you are interested in viewing professional work samples or discussing potential collaborations, please contact me directly for further information.
                </p>

                <Tabs tabs={tabs} />

            </div>
        </>
    )
}