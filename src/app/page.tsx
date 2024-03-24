"use client"

import { useEffect, useState } from "react";
import { preloadImageAssets } from "@/utils/preloadAssets";
import Header from "./Components/Header/Header";
import Loading from "./Components/Other/Loading";
import HomePage from "./Components/Home/Home";
import SkillsPage from "./Components/Skills/Skills";

import Head from 'next/head';

import { motion, useScroll, useSpring } from "framer-motion";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Achievements from "./Components/Achievements/Achievements";

export default function Home() {

  const [loading, setLoading] = useState(true);

  const [homeImages, setHomeImages] = useState<HTMLImageElement[]>([]);
  const [infoImages, setInfoImages] = useState<HTMLImageElement[]>([]);
  const [skillsImages, setSkillsImages] = useState<HTMLImageElement[]>([]);
  const [experienceImages, setExperienceImages] = useState<HTMLImageElement[]>([]);
  const [portfolioImages, setPortfolioImages] = useState<HTMLImageElement[]>([]);
  const [achievements, setAchivementsImages] = useState<HTMLImageElement[]>([]);

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

      const info = await preloadImageAssets("INFO");
      setInfoImages(info);

      const skills = await preloadImageAssets("SKILLS");
      setSkillsImages(skills);

      const experience = await preloadImageAssets("EXPERIENCE");
      setExperienceImages(experience);

      const portfolio = await preloadImageAssets("PORTFOLIO");
      setPortfolioImages(portfolio);

      const achievements = await preloadImageAssets("ACHIEVEMENTS");
      setAchivementsImages(achievements);


      setLoading(false);
    };

    preloadAssets();

  }, []);

  return loading ? <Loading /> :
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky top-0 left-0 right-0 z-40">
        <Header homeImages={homeImages}></Header>
        <motion.div className="progress-bar" style={{ scaleX, willChange: "transform" }} />
      </div>
      <main className="min-h-screen bg-repeat" style={{ backgroundImage: "url('/background.jpg')" }}>
        <HomePage infoImages={infoImages} />
        <div className="separator" />
        <SkillsPage />
        <div className="separator" />
        <Experience />
        {/* <Portfolio /> */}
        <div className="separator" />
        <Achievements />
      </main>
    </>;
}

