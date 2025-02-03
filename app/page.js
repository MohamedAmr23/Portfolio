import Image from "next/image";
import { Fragment } from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";

export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
    </Fragment>
  );
}
