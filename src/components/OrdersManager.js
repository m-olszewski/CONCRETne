import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import '../scss/_OrderManager.scss'

const OrdersManager = () => {
    const url = 'http://localhost:3005/orders';
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = () => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status} (${response.statusText})`);
                }
                return response;
            })
            .then(response => response.json())
            .then(setOrders);
    }

    const deleteOrder = (id) => {
        fetch(`http://localhost:3005/orders/${id}`, {
            method: 'DELETE',
           })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status} (${response.statusText})`);
                }
                return response;
            })
            .then(response => response.json())
            .then(() => setOrders(orders => orders.filter(ord => ord.id !== id)));
    }

    // const [isEditing, setIsEditing] = useState(false);
    //
    // function handleEditButtonClick() {
    //     setIsEditing(true);
    // }
    function handleDeleteButtonClick(ord) {
       // deleteOrder(ord.id);
        console.log(ord.id)
    }

    if (orders.length === 0) return null;

    return (

        <div className="summary-main">
            <table className="summary-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Produkt</th>
                    <th/>
                    <th>Cena</th>
                    <th className="spec-title">Adres zamówienia</th>
                    <th>Akcje</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((ord, i) => (
                    <tr key={ord.id}>
                        <td>
                            {i+1}
                        </td>
                        <td>
                            <div className="summary-table-img">ID: {ord.id}</div>
                        </td>

                        <td className="specifications">
                            <span
                                className="spec-title"><strong>Stolik kawowy</strong> {ord.material} {ord.color}</span>

                            <div className="spec-specs">
                                <div className="spec-group">
                                    <span>Szerokość: <span className="spec-underline">{ord.width} cm</span></span>
                                    <span>Długość: <span className="spec-underline">{ord.length} cm</span></span>
                                    <span>Wysokość: <span className="spec-underline">{ord.height} cm</span></span>
                                </div>
                                <div className="spec-group">
                                    <span>Blat: <span className="spec-underline">{ord.material}</span></span>
                                    <span>Grubość blatu: <span
                                        className="spec-underline">{ord.thickness} cm</span></span>
                                    <span>Kolor nóg: <span className="spec-underline">{ord.color}</span></span>
                                </div>
                            </div>
                        </td>
                        <td className="summary-table-price">{ord.price} zł</td>
                        <td className="address">
                            <div>
                                <span>{ord.name} {ord.surname}</span>
                                <span>{ord.street}</span>
                                <span>{ord.postcode}, {ord.city}</span>
                                <span>{ord.phone}</span>
                                <Link
                                    to='#'
                                    onClick={(e) => {
                                        window.location.href = `mailto:${ord.email}`;
                                        e.preventDefault();
                                    }}
                                >
                                    {ord.email}
                                </Link>
                            </div>
                        </td>
                        <td className="manager-actions">
                            <div>
                                <button onClick={handleDeleteButtonClick}>Usuń</button>
                                <span>Edytuj</span>
                            </div>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersManager;