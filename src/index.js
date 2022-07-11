import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {OrderForm} from "./components/OrderForm";
import Basket from "./components/Basket";
import UserReg from "./components/UserReg";
import Summary from "./components/Summary";
import Confirmed from "./components/Confirmed";
import Test from "./components/test";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/test" element={<Test />} />

            <Route path="/" element={<App />} />
            <Route path="order" element={<OrderForm />} />
            <Route path="order/basket" element={<Basket />} />
            <Route path="order/basket/userreg" element={<UserReg />} />
            <Route path="order/basket/summary" element={<Summary />} />
            <Route path="/order/confirmed/id_zamowienia" element={<Confirmed />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
