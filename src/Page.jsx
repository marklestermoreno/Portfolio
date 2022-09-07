import React from 'react'
import Header from './Component/Header/Header'

import Home from './Component/Home/Home'
import Info from './Component/Info/Info'
import Experience from './Component/Experience/Experience'
import Portfolio from './Component/Portfolio/Portfolio'
import Achievements from './Component/Achievements/Achievements'

import './index.css'

// Framer Motion
import { motion, useScroll, useSpring } from "framer-motion";

const Page = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });


    return (
        <>
            <div className='sticky top-0 left-0 right-0 z-40'>
                <Header />
                <motion.div className="progress-bar" style={{ scaleX }} />
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
            <div>
                <Achievements />
            </div>
        </>
    )
}

export default Page