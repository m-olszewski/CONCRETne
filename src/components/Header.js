import '../scss/_Header.scss'
import Navigation from "./Navigation";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
    return (
        <div className="App-header">
            <a onClick={scroll.scrollToTop} className="logo" href="#"><strong>concret</strong>.ne</a>
            <Navigation />
        </div>
    );
};

export default Header;
