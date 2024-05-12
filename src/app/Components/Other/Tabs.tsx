import React, { useState } from 'react';
import { TabsProps } from '@/interfaces/Tabs';

import "./utils.css"


const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabs text-center">
            <div className="w-100 flex justify-center text-center mt-10">
                <div className='tabs-container flex-col sm:flex-row'>
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer px-5 py-2 mx-2 ${activeTab === index ? 'active-tabs' : 'inactive-tabs'}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.title}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab-pane ${activeTab === index ? 'block' : 'hidden'}`}
                    >
                        {activeTab === index && tab.component}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
