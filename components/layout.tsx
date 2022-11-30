
import Header from "./header";
import SideNavbar from "./sideNavbar";
// import Footer from "./footer";
import React from "react";
import Navbar from "./navbar";
import Aside from "./aside";


export default function Layout({ children }) {
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <SideNavbar></SideNavbar>
    <Aside></Aside>/
    {children}
    {/* <Footer></Footer> */}
    </>
  );
}
