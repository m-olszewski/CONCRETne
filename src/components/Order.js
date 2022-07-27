import '../scss/_Order.scss'
import {Link} from "react-router-dom";
import {Element} from 'react-scroll';

const Order = () => {
    return (
        <Element name="order">
            <div className="App-order">
                <Link to="/order" className="order-text">
                    Skonfiguruj swój wymarzony stolik i <p>złóż zamówienie</p>
                </Link>
            </div>
        </Element>
    );
};

export default Order;