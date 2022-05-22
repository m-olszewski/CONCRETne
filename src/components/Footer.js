import '../scss/_Footer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {brands} from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = () => {
    return (
        <div className="App-footer container">
            <a className="footer-logo" href="#"><strong>concret</strong>.ne</a>
            <div className="footer-address">
                <span>
                    CONCRET.ne Sp. z o. o.
                    ul. Warszawska 13/7
                    01-234 Warszawa
                </span>
                <span>
                    sayhi@concret.ne
                    +48 987 654 321
                </span>
            </div>
            <div>
                <nav className="footer-menu">
                    <ul className="footer-menu-list">
                        <li><a href="#about"><span>o nas</span></a></li>
                        <li><a href="#products"><span>produkty</span></a></li>
                        <li><a href="#order"><span>zamów</span></a></li>
                        <li><a href="#contact"><span>kontakt</span></a></li>
                        <li><FontAwesomeIcon icon={brands('facebook')} className="footer-menu-icons icon-fb"/></li>
                        <li><FontAwesomeIcon icon={brands('instagram')} className="footer-menu-icons icon-ig"/></li>
                    </ul>
                </nav>
                <span className="footer-copyright">All rights reserver. Copyright © 2022</span>
            </div>
        </div>
    );
};

export default Footer;