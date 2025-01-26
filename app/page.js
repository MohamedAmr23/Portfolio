import Image from "next/image";
import { Fragment } from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";

export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Header/>
    </Fragment>
  );
}
