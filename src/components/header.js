import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Image from "./image";
import "../scss/header.scss";

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
        <>
            <div className="nav">
                <Link to="/" className="textmain navtitle">
                    <Image filename="logo.png" /> <span>{title}</span>
                </Link>
                <a href="mailto:passatsdobrasil@gmail.com" rel="noreferrer" target="_blank" className="link textmain"> passatsdobrasil@gmail.com </a>
            </div>
            <div className="title">
                <b id="title" className="textmain">{title}</b>
                <br />
                <div className="tagline_box">
                    <p className="tagline textmain">Uma coleção exclusiva de um aficcionado por carros.</p>
                </div>
            </div>
        </>
    )
  } else {
    header = (
        <>
            <div className="nav">
                <Link to="/" className="textmain navtitle">
                    <Image filename="logo.png" /> <span>{title}</span>
                </Link>
                <a href="mailto:passatsdobrasil@gmail.com" rel="noreferrer" target="_blank" className="link textmain"> passatsdobrasil@gmail.com </a>
            </div>
        </>
    )
  }
  return (
    <>
        <header className="main-header">{header}</header>
    </>
  )
}

export default Header
