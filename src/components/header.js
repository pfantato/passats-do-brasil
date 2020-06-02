import React from "react"
import { Link } from "gatsby"

import Image from "./image"
import "../scss/header.scss"

const Header = ({ location, title, description }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
      <div className="header__main">
        <div className="header__main__logo__link">
          <Image className="header__main__logo__link__image" filename="logo-dark.png" />
          <div className="header__main__logo__link__meta">
            <span className="header__main__logo__link__meta__title">{title}</span>
            <span className="header__main__logo__link__meta__slogan">{description}</span>
          </div>
        </div>
      </div>
      </>
    )
  } else {
    header = (
      <>
        <div className="header__inside">
          <Link to="/" className="header__inside__back_button">
            &lt; Todos os carros
          </Link>
          <div className="header__inside__logo__link">
            <Image className="header__inside__logo__link__image" filename="logo-light.png" />
          <div className="header__inside__logo__link__meta">
            <span className="header__inside__logo__link__meta__title">{title}</span>
            <span className="header__inside__logo__link__meta__slogan">{description}</span>
          </div>
          </div>
          <a
            className="header__inside__contact"
            href="mailto:passatsdobrasil@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            ENVIAR E-MAIL
          </a>
        </div>
      </>
    )
  }
  return (
    <>
      <header className="header">{header}</header>
    </>
  )
}

export default Header
