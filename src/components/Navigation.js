import '../scss/_Navigation.scss';
const Navigation = () => {
    return (
        <nav className="menu">
            <ul className="menu-list">
                <li className="underline"><a href="#about"><span>o nas</span></a></li>
                <li className="underline"><a href="#products"><span>produkty</span></a></li>
                <li className="underline"><a href="#order"><span>zamów</span></a></li>
                <li className="underline"><a href="#contact"><span>kontakt</span></a></li>
            </ul>
        </nav>
    );
};

export default Navigation;