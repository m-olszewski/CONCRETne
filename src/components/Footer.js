import '../scss/_Footer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {brands} from "@fortawesome/fontawesome-svg-core/import.macro";
import {animateScroll as scroll, Link} from "react-scroll";

const Footer = () => {
    return (
        <div className="App-footer container">
            <a onClick={scroll.scrollToTop} className="footer-logo" href="#"><strong>concret</strong>.ne</a>
            <div className="footer-address">
                <p>
                    CONCRET.ne Sp. z o. o.<br/>
                    ul. Wymyślona 13/7<br/>
                    01-234 Warszawa
                </p>
                <p>
                    <span className="footer-mail">sayhi@concret.ne</span><br/>
                    +48 987 654 321
                </p>
            </div>
            <div>
                <nav className="footer-menu">
                    <ul className="footer-menu-list">
                        <li><Link to="about">o nas</Link></li>
                        <li><Link to="materials">materiały</Link></li>
                        <li><Link to="specs">specyfikacja</Link></li>
                        <li><Link to="order">zamów</Link></li>
                        <li><FontAwesomeIcon icon={brands('facebook')} className="footer-menu-icons icon-fb"/></li>
                        <li><FontAwesomeIcon icon={brands('instagram')} className="footer-menu-icons icon-ig"/></li>
                    </ul>
                </nav>
                <span className="footer-copyright">All rights reserved. Copyright © 2022</span>
            </div>
        </div>
    );
};

export default Footer;