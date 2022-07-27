import React from 'react';
import {Link} from "react-router-dom";
import '../scss/_Summary.scss'


const Summary = ({order, values}) => {
    // const [order, setOrder] = props;
const handleClick = () => {
    console.log(order);
    console.log(values)
}
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
                        <th/>
                        <th>Cena</th>
                        <th className="spec-title">Adres zamówienia</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="summary-table-img">miniaturka</div>
                        </td>
                        <td className="specifications">
                            <span
                                className="spec-title"><strong>Stolik kawowy</strong> {order.material} {order.color}</span>

                            <div className="spec-specs">
                                <div className="spec-group">
                                    <span>Szerokość: <span className="spec-underline">{order.width} cm</span></span>
                                    <span>Długość: <span className="spec-underline">{order.length} cm</span></span>
                                    <span>Wysokość: <span className="spec-underline">{order.height} cm</span></span>
                                </div>
                                <div className="spec-group">
                                    <span>Blat: <span className="spec-underline">{order.material}</span></span>
                                    <span>Grubość blatu: <span
                                        className="spec-underline">{order.thickness} cm</span></span>
                                    <span>Kolor nóg: <span className="spec-underline">{order.color}</span></span>
                                </div>
                            </div>
                        </td>
                        <td className="summary-table-price">{order.price} zł</td>
                        <td className="address">
                            <div>
                                <span>{values.name} {values.surname}</span>
                                <span>{values.street}</span>
                                <span>{values.postcode}, {values.city}</span>
                                <span>{values.phone}</span>
                            </div>
                            <Link to="/order/basket/userreg"><span className="back-button">zmień</span></Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="summary-down">
                <div className="summary-price">Do zapłaty: <span className="price">{order.price} zł</span></div>
                <Link onClick={handleClick} to="/order/confirmed/id_zamowienia" className="summary-confirmed-btn">Potwierdzam zakup</Link>
            </div>
        </div>
    );
};

export default Summary;