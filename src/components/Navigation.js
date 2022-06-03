import '../scss/_Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { Link } from "react-scroll";

const Navigation = () => {
    return (
        <nav className="menu">
            <ul className="menu-list">
                <li className="underline"><Link to="about"
                                                spy={true}
                                                smooth={true}
                                                duration={500}
                                                >o nas</Link></li>
                <li className="underline"><Link to="materials"
                                                spy={true}
                                                smooth={true}
                                                duration={750}>materiały</Link></li>
                <li className="underline"><Link to="specs"
                                                spy={true}
                                                smooth={true}
                                                duration={1000}>specyfikacja</Link></li>
                <li className="underline"><Link to="order"
                                                spy={true}
                                                smooth={true}
                                                duration={1000}>zamów</Link></li>
                <li><FontAwesomeIcon icon={brands('facebook')} className="menu-icons icon-fb"  /></li>
                <li><FontAwesomeIcon icon={brands('instagram')} className="menu-icons icon-ig" /></li>
            </ul>
        </nav>
    );
};

export default Navigation;