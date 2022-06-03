import '../scss/_Order.scss'
import FormRight, {FormLeft} from "./Form";
import {Link} from "react-router-dom";
import {Element} from 'react-scroll';
// import React from "@types/react";

const Order = () => {
    return (
        <Element name="order">
            <div className="App-order">
                <Link to="/order" className="order-text">Skonfiguruj swój wymarzony stolik i <p>złóż zamówienie</p>
                </Link>
            </div>
        </Element>
    );
};

export const OrderForm = () => {
    return (
        <div className="order-main container">
            <Link to="/"><span className="back-button">Wstecz</span></Link>
            <h2 className="order-left-title">Skonfiguruj swój wymarzony stolik</h2>
            <p className="order-text">Wybierz rozmiar, rodzaj i kolor nóg oraz blatu.</p>
            <form className="order-form">
                <div className="order">
                    <div className="order-left">
                        <FormLeft/>
                        {/*<div className="order-summary">*/}
                        {/*    <h3 className="order-summary-title">Twoje zamówienie:</h3>*/}
                        {/*    <span className="order-summary-details">--szczegóły zamówienia--</span>*/}
                        {/*</div>*/}
                        {/*<div className="order-visualisation">Wizualizacja stolika</div>*/}
                    </div>
                    <div className="order-right">
                        <FormRight/>
                    </div>
                </div>
                <input className="order-form-btn" type="submit" value="Potwierdzam i zamawiam"/>
            </form>
        </div>
    );
}

export default Order;