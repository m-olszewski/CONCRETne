import React from 'react';
import {Link} from "react-router-dom";
import '../scss/_Confirmed.scss';

const Confirmed = () => {

    return (
        <div className="App-confirmed container">
            <div className="confirmed-header">
                <Link to="/"><span className="back-button">Strona główna</span></Link>
                <span className="separator">&#8811;</span>
                <Link to="/order"><span className="back-button">Zamówienie</span></Link>
                <span className="separator">&#8811;</span>
                <Link to="/order/basket"><span className="back-button">Koszyk</span></Link>
                <span className="separator">&#8811;</span>
                <Link to="/order/basket/userreg"><span className="back-button">Rejestracja</span></Link>
                <span className="separator">&#8811;</span>
                <Link to="/order/basket/summary"><span className="back-button">Podsumowanie</span></Link>
                <span className="separator">&#8811;</span>
                <span className="actually">Potwierdzenie</span>
            </div>
            <h2 className="confirmed-title">
                Dziękujemy,
                <span>zamówienie zastało złożone.</span>
            </h2>
            <div className="confirmed-main">
                <Link to="/admin" className="">Menadżer zamówień</Link>

            </div>
        </div>
    );
};

export default Confirmed;