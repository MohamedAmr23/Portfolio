import Image from "next/image";
import { Fragment } from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";

export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Header/>
      <About/>
    </Fragment>
  );
}
