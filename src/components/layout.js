import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ location, title, children }) => {

  return (
    <>
      <Header location={location} title={title}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
