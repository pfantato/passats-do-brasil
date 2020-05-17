import React from "react";

export const Footer = () => {
    return (
        <footer>
            © {new Date().getFullYear()}, Powered by
            {` `}
            <a href="https://vagalume.digital">Vagalume Digital</a>
        </footer>
    );
}
export default Footer;