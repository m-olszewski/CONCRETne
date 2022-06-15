import '../scss/_Basket.scss'

import React from 'react';
import {Link} from "react-router-dom";

const Basket = () => {
    return (
        <div className="App-basket container">
            <div className="basket-header">
                <Link to="/"><span className="back-button">Strona główna</span></Link>
                <span className="separator">&#8811;</span>
                <Link to="/order"><span className="back-button">Zamówienie</span></Link>
                <span className="separator">&#8811;</span>
                <span className="actually">Koszyk</span>
            </div>
            <h2 className="basket-title">Zawartość Twojego koszyka<span>:</span></h2>
            <div className="basket-main">
                <table className="basket-table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Produkt</th>
                        <th>Cena</th>
                        <th>Akcje</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {/*<td className="basket-table-specs">*/}
                        <td>
                            <div className="basket-table-img">miniaturka</div>
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


                        <td className="basket-table-price">__price__</td>
                        <td className="basket-table-actions">
                            <span className="edit">edycja</span>
                            <span className="remove">usuń</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="basket-down">
                <Link to="/order/basket/userreg" className="basket-userreg-btn">Zamawiam</Link>
            </div>
        </div>
    );
};

export default Basket;