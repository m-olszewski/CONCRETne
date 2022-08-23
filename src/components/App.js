import React, {useState} from "react";
import '../scss/_App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./LandingPage";
import {OrderForm} from "./OrderForm";
import Basket from "./Basket";
import UserReg from "./UserReg";
import Summary from "./Summary";
import Confirmed from "./Confirmed";
import OrdersManager from "./OrdersManager";

const initialOrderValues = {
    width: '',
    length: '',
    height: '',
    material: '',
    thickness: '',
    color: '',
    price: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    city: '',
    street: '',
    postcode: ''
};

function App() {

    const [order, setOrder] = useState(initialOrderValues);


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/order" element={<OrderForm order={order} setOrder={setOrder}/>}/>
                <Route path={`/order/basket`} element={<Basket order={order}/>}/>
                <Route path="/order/basket/userreg" element={<UserReg order={order} setOrder={setOrder}/>}/>
                <Route path="/order/basket/summary" element={<Summary order={order} setOrder={setOrder}/>}/>
                <Route path="/order/confirmed/id_zamowienia" element={<Confirmed order={order}/>}/>
                <Route path="/admin" element={<OrdersManager order={order}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;