"use client"

import Header from "../Components/Header/Header";
import { preloadImageAssets } from "@/utils/preloadAssets";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export default function Contacts() {

    const [loading, setLoading] = useState(true);
    const [homeImages, setHomeImages] = useState<HTMLImageElement[]>([]);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 50,
        restDelta: 0.001
    });


    useEffect(() => {
        const preloadAssets = async () => {

            const home = await preloadImageAssets("HOME");
            setHomeImages(home);

            setLoading(false);
        };
        preloadAssets();

    }, []);

    return (
        <>

            <div className="sticky top-0 left-0 right-0 z-40">
                <Header homeImages={homeImages}></Header>
                <motion.div className="progress-bar" style={{ scaleX, willChange: "transform" }} />
            </div>
            <main className="min-h-screen bg-repeat" style={{ backgroundImage: "url('/background.jpg')" }}>
                <h1> Contacts </h1>
            </main>
        </>

    )
}