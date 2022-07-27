import React, {useState} from "react";
import '../scss/_App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./LandingPage";
import {OrderForm} from "./OrderForm";
import Basket from "./Basket";
import UserReg from "./UserReg";
import Summary from "./Summary";
import Confirmed from "./Confirmed";

const initialOrderValues = {
    width: '',
    length: '',
    height: '',
    material: '',
    thickness: '',
    color: '',
    price: ''
};



function App() {

    const [order, setOrder] = useState(initialOrderValues);
    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        city: '',
        street: '',
        postcode: ''
    });

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/order" element={<OrderForm order={order} setOrder={setOrder}/>}/>
                <Route path="/order/basket" element={<Basket order={order}/>}/>
                <Route path="/order/basket/userreg" element={<UserReg values={values} setValues={setValues}/>}/>
                <Route path="/order/basket/summary" element={<Summary order={order} values={values} setValues={setValues}/>}/>
                <Route path="/order/confirmed/id_zamowienia" element={<Confirmed/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;