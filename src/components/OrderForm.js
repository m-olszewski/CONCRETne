import '../scss/_Order.scss'
import {FormTable} from "./Form";
import {Link, useNavigate} from "react-router-dom";
import React from "react";

export const OrderForm = () => {
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        navigate('/order/basket');
    };

    return (
        <div className="order-main container">
            <div className="order-header">
                <div>
                    <Link to="/"><span className="back-button">Strona główna</span></Link>
                    <span className="separator">&#8811;</span>
                    <span className="actually">Zamówienie</span>
                </div>
                {/*<span>koszyk:</span>*/}
            </div>
            <h2 className="order-left-title">Skonfiguruj swój wymarzony stolik</h2>
            <p className="order-text">Wybierz rozmiar, rodzaj i kolor nóg oraz blatu.</p>
            <form className="order-form" onSubmit={handleSubmit}>
                <div className="order-options">
                    <div className="order-left">
                        <FormTable/>
                    </div>
                    <div className="order-right">
                        <p>szer
                        </p>
                    </div>
                </div>
                <div className="order-down">
                    <div className="order-price">Cena: <span className="price">1000 zl</span></div>
                    <input type="submit" className="order-basket-btn" id="btn" value="Do koszyka"/>
                </div>
            </form>
        </div>
    );
};