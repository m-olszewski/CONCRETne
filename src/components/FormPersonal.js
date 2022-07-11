import React from 'react';
import '../scss/_Form.scss'
import {Link, useNavigate} from "react-router-dom";

const Input = (props) => {
    return (
        <div className="inputbox-content">
            <input id={props.id} name={props.name} type={props.type} required/>
            <label htmlFor={props.id}>{props.labelText}</label>
            <span className="underline"></span>
        </div>
    );
};

export const FormPersonal = () => {
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();

        navigate('/order/basket/summary');
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="order-form-title">Dane i adres</h2>

            <Input id={"name"} name={"name"} type={"text"} labelText={"Imię"}/>
            <Input id={"surname"} name={"surname"} type={"text"} labelText={"Nazwisko"}/>
            <Input id={"email"} name={"email"} type={"email"} labelText={"E-Mail"}/>
            <Input id={"phone"} name={"phone"} type={"text"} labelText={"Numer telefonu"}/>
            <Input id={"city"} name={"city"} type={"text"} labelText={"Miasto"}/>
            <Input id={"street"} name={"street"} type={"text"} labelText={"Ulica"}/>
            <Input id={"postcode"} name={"postcode"} type={"text"} labelText={"Kod pocztowy"}/>
            <div className="userreg-down">
                <input type="submit"  className="userreg-confirmed-btn" id="btn" value="Podsumowanie"/>
                {/*<Link to="/order/basket/summary">Podsumowanie</Link>*/}
            </div>
        </form>
    );
};