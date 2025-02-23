'use client'

import React, { useEffect } from 'react'
import Lenis from 'lenis'

import Nav from "@/components/Global/Nav";
import Home from "@/components/Home/Home";
import About from "@/components/Home/About";
import Sites from "@/components/Home/Sites";
import StagesSection from "@/components/Home/Process";
import Contact from "@/components/Home/Contact";
import Footer from '@/components/Global/Footer';

export default function Page() {

  useEffect(() => {
    // Configuração para tornar o Lenis mais suave
    const lenisInstance = new Lenis({
      smooth: true,       // Habilita a rolagem suave
      lerp: 0.1,          // Controla a suavidade da rolagem (quanto menor, mais suave)
      friction: 0.1,      // Controla a fricção (quanto menor, mais suave e rápido)
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Sites />
      <StagesSection />
      <Contact/>
      <Footer/>
    </div>
  );
}