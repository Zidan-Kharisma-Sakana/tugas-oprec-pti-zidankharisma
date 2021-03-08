import React from 'react'
import { Icon } from 'semantic-ui-react'

export function Footer(props) {
    return(
        <div className="footer-basic">
        <footer>
            <div className="social">
                <a href="#">
                    <Icon inverted circular name="instagram" />
                </a>
                <a href="#">
                <Icon inverted circular name="whatsapp" />
                </a>
                <a href="https://www.linkedin.com/in/zidan-kharisma-adidarma-6730ab151/">
                <Icon inverted circular name="linkedin alternate" />
                </a>
                <a href="https://github.com/Zidan-Kharisma-Sakana">
                <Icon inverted circular name="github alternate" />
                 </a>
            </div>
            <p className="copyright">Zidan Kharisma Adidarma © 2021</p>
        </footer>
    </div>
    )}