'use client'
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  const [isDarkMode,setIsDarkMode] = useState(false)

  useEffect(()=>{
    if (localStorage.theme==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefer-color-scheme:dark)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if (isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme='dark'
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme=''
    }
  },[isDarkMode])
  return (
    <Fragment>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode}/>
      <About isDarkMode={isDarkMode}/>
      <Services isDarkMode={isDarkMode}/>
      <Work isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </Fragment>
  );
}
