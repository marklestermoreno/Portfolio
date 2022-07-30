import React from 'react'
import Header from './Component/Header/Header'

import Home from './Component/Home/Home'
import Info from './Component/Info/Info'
import Experience from './Component/Experience/Experience'
import Portfolio from './Component/Portfolio/Portfolio'

const Page = () => {
    return (
        <>
            <div className='sticky top-0 left-0 right-0 z-40'>
                <Header />
            </div>
            <div>
                <Home />
            </div>
            <div>
                <Info />
            </div>
            <div>
                <Experience />
            </div>
            <div>
                <Portfolio />
            </div>
        </>
    )
}

export default Page