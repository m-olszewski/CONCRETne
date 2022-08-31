import React, {useEffect, useState} from 'react';
import '../scss/_OrderManager.scss'
import SingleOrder from "./SingleOrder";

const OrdersManager = () => {
    const url = 'http://localhost:3005/orders';
    const [allOrders, setAllOrders] = useState([]);

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
            .then(setAllOrders);
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
            .then(() => setAllOrders(allOrders => allOrders.filter(singleOrder => singleOrder.id !== id)));
    }

    const updateOrder = (id, singleOrder) => {
        fetch(`http://localhost:3005/orders/${id}`, {
            method: 'PUT',
            body: JSON.stringify(singleOrder),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status} (${response.statusText})`);
                }
                return response;
            })
            .then(response => response.json())
            .then(updatedSingleOrder => setAllOrders(allOrders => allOrders.map(singleOrder => singleOrder.id === id ? updatedSingleOrder : singleOrder)));
    }

    if (allOrders.length === 0) return null;
    // console.log(allOrders)

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
                {allOrders.map((singleOrder, i) => (
                    <tr key={singleOrder.id}>
                        <td>
                            {i + 1}
                        </td>
                        <td>
                            <div className="summary-table-img">ID: {singleOrder.id}</div>
                        </td>
                        <SingleOrder singleOrder={singleOrder} onDelete={deleteOrder} onUpdate={updateOrder}/>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersManager;