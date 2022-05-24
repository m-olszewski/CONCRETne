import '../scss/_Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Navigation = () => {
    return (
        <nav className="menu">
            <ul className="menu-list">
                <li className="underline"><a href="#about"><span>o nas</span></a></li>
                <li className="underline"><a href="#materials"><span>materiały</span></a></li>
                <li className="underline"><a href="#specs"><span>specyfikacja</span></a></li>
                <li className="underline"><a href="#order"><span>zamów</span></a></li>
                <li><FontAwesomeIcon icon={brands('facebook')} className="menu-icons icon-fb"  /></li>
                <li><FontAwesomeIcon icon={brands('instagram')} className="menu-icons icon-ig" /></li>
            </ul>
        </nav>
    );
};

export default Navigation;