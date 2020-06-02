import React from "react";
import Image from "./image";

export const Footer = ( { title } ) => {
    return (
        <footer>
            <p className="copyright">
                © {new Date().getFullYear()}, { title } • Todos os direitos reservados.
            </p>
            <a href="https://vagalume.digital" rel="noreferrer" target="_blank" className="vd_ads">
                powered by
                <Image filename="logo-vd-yellow.png" />
            </a>
        </footer>
    );
}
export default Footer;