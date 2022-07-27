import '../scss/_Order.scss'
import '../scss/_Form.scss'

import {Link, useNavigate} from "react-router-dom";
import React, {useState} from 'react';
import {FormTable} from "./Form";

export const OrderForm = ({order, setOrder}) => {
    const [showSpan, setShowSpan] = useState(false);

    const costs = {
        steel: 19,     // 1 mb
        paint: 80,     // 1 m2
        chromium: 800, // 1 m2
        marble: {
            gr2cm: 2000,
            gr3cm: 3500
        },             // 1 m2
        concrete: 6000,// 1 m3
        oak: {
            gr2cm: 500,
            gr3cm: 800,
            gr4cm: 900
        },             // 1 m2

    }

    let frame = (((order.width * 4) + (order.length * 4) + (order.height * 4)) / 100);

    let area = (order.width * order.length) / 10000;
    let volume = frame * 4 * 0.03;

    const framePrice = () => {
        return frame * costs.steel;
    }

    const tableTopCost = () => {
        let tabletop;

        switch (order.material) {
            case 'Marmur':
                if (order.thickness === '2') {
                    tabletop = area * costs.marble.gr2cm;
                }
                if (order.thickness === '3') {
                    tabletop = area * costs.marble.gr3cm;
                }
                break;
            case 'Beton':
                tabletop = area * order.thickness * 0.01 * costs.concrete
                break;
            case 'Dąb':
                if (order.thickness === '2') {
                    tabletop = area * costs.oak.gr2cm;
                }
                if (order.thickness === '3') {
                    tabletop = area * costs.oak.gr3cm;
                }
                if (order.thickness === '4') {
                    tabletop = area * costs.oak.gr4cm;
                }
                break;
        }
        return tabletop;
    }

    const paintCost = () => {
        let paintcost;
        if (order.color === 'chrom') {
            paintcost = volume * costs.chromium;
        } else {
            paintcost = volume * costs.paint;
        }
        return paintcost;
    }
    // console.log(tableTopCost());
    // console.log(framePrice);
    // console.log(paintCost());

    const allValues = () => {
        let arr = [];
        Object.values(order).forEach((value) => {
            if (value) {
                arr.push(value)
            }
        });
        if (arr.length === 7) {
            return true
        }
    }

    order.price = Math.ceil(tableTopCost() + framePrice() + paintCost()) + 1000;
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        if (!allValues()) {
            setShowSpan(true)
        } else {
            navigate('/order/basket');
        }
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
            <form noValidate className="order-form" onSubmit={handleSubmit}>
                <div className="order-options">
                    <div className="order-left">
                        <FormTable order={order} setOrder={setOrder} allValues={allValues} showSpan={showSpan} setShowSpan={setShowSpan}/>
                    </div>
                    <div className="order-right">
                        <p>szerokość {order.width}</p>
                        <p>długość {order.length}</p>
                        <p>wysokośc {order.height}</p>
                        <p>blat {order.material}</p>
                        <p>grubość blatu {order.thickness}</p>
                        <p>kolor {order.color}</p>
                        <p>{order.price} zł</p>
                    </div>
                </div>
                <div className="order-down">
                    <div className="order-price">Cena: {allValues() &&
                        <span className="price">{order.price} zł</span>}</div>
                    <input type="submit" className="order-basket-btn" id="btn" value="Do koszyka"/>
                    <span className={`${showSpan ? "" : "hidden"}`}>Wybierz wszystkie opcje</span>

                </div>
            </form>
        </div>
    );
};

