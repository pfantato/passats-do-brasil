import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ location, title, description, children, style }) => {
  return (
    <div className={style}>
      <Header location={location} title={title} description={description} />
      <main>{children}</main>
      <Footer title={title} />
    </div>
  )
}

export default Layout
