import '../scss/_Header.scss'
import Navigation from "./Navigation";
const Header = () => {
    return (
        <div className="App-header">
            <a className="logo" href="#"><strong>concret</strong>ne</a>
            <Navigation />
        </div>
    );
};

export default Header;