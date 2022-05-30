import '../scss/_Order.scss'
import Form from "./Form";
import {Link} from "react-router-dom";
import {Element} from 'react-scroll';

const Order = () => {
    return (
        <Element name="order">
            <div className="App-order">
                <Link to="/order" className="order-text">Skonfiguruj swój wymarzony stolik i <p>złóż zamówienie</p></Link>
            </div>
        </Element>
    );
};

export const OrderForm = () => {
    return (
        <div className="order-main">
            <div className="order-left">
                <p className="order-text">Wybierz rozmiar, rodzaj i kolor nóg oraz blatu</p>
                <div className="order-summary">
                    <h3 className="order-summary-title">Twoje zamówienie:</h3>
                    <span className="order-summary-details">--szczegóły zamówienia--</span>
                </div>
                {/*<div className="order-visualisation">Wizualizacja stolika</div>*/}

            </div>
            <div className="order-right">
                <Form/>
            </div>
        </div>
    );
}

export default Order;