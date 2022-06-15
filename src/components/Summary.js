import React from 'react';
import {Link} from "react-router-dom";
import '../scss/_Summary.scss'


const Summary = () => {
    return (
        <div className="App-summary container">
            <div className="summary-header">
                <Link to="/"><span className="back-button">Strona główna</span></Link>
                <span className="separator">&#8811;</span>
                <Link to="/order"><span className="back-button">Zamówienie</span></Link>
                <span className="separator">&#8811;</span>
                <Link to="/order/basket"><span className="back-button">Koszyk</span></Link>
                <span className="separator">&#8811;</span>
                <Link to="/order/basket/userreg"><span className="back-button">Rejestracja</span></Link>
                <span className="separator">&#8811;</span>
                <span className="actually">Podsumowanie</span>
            </div>
            <h2 className="summary-title">Podsumowanie zamówienia<span>:</span></h2>
            <div className="summary-main">
                <table className="summary-table">
                    <thead>
                    <tr>
                        <th>Produkt</th>
                        <th></th>
                        <th>Cena</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="summary-table-img">miniaturka</div>
                        </td>
                        <td className="specifications">
                            <span className="spec-title"><strong>Stolik kawowy</strong> __marble__ __black__</span>

                            <div className="spec-specs">
                                <div className="spec-group">
                                    <span>Szerokość: __width__</span>
                                    <span>Długość: __length__</span>
                                    <span>Wysokość: __height__</span>
                                </div>
                                <div className="spec-group">
                                    <span>Blat: __material__</span>
                                    <span>Grubość blatu: __thickness__</span>
                                    <span>Kolor nóg: __color__</span>
                                </div>
                            </div>
                        </td>
                        <td className="summary-table-price">__price__</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="summary-main-2">
                <table className="summary-address">
                    <thead>
                    <tr>
                        <th>
                            <span className="spec-title">Adres zamówienia</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="address">
                                <span>__imie__nazwisko</span>
                                <span>__ulica__</span>
                                <span>__postcode__ , __miasto__</span>
                                <span>_tel__</span>
                            </div>
                            <Link to="/order/basket/userreg"><span className="back-button">zmień</span></Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="summary-down">
                <div className="summary-price">Do zapłaty: <span className="price">__cena__</span></div>
                <Link to="/order/confirmed/id_zamowienia" className="summary-confirmed-btn">Potwierdzam zakup</Link>
            </div>
        </div>
    );
};

export default Summary;