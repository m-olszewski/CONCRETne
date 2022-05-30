import '../scss/_Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
    return (
        <nav className="menu">
            <ul className="menu-list">
                <li className="underline"><Link to="about">o nas</Link></li>
                <li className="underline"><Link to="materials">materiały</Link></li>
                <li className="underline"><Link to="specs">specyfikacja</Link></li>
                <li className="underline"><Link to="order">zamów</Link></li>
                <li><FontAwesomeIcon icon={brands('facebook')} className="menu-icons icon-fb"  /></li>
                <li><FontAwesomeIcon icon={brands('instagram')} className="menu-icons icon-ig" /></li>
            </ul>
        </nav>
    );
};

export default Navigation;