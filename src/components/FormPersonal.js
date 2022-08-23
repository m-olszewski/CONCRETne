import React, {useState} from 'react';
import '../scss/_FormPersonal.scss'
import {Link, useNavigate} from "react-router-dom";

const Input = (props) => {
    return (
        <div className="inputbox-content">
            <input id={props.id} name={props.name} type={props.type} value={props.value} onChange={props.onChange}
                   className={`${props.err && "input-error"}`} required/>
            <label htmlFor={props.id}>{props.labelText}</label>
            {props.err &&
                <span className="error-message">{props.err}</span>}
            <span className="underline"/>
        </div>
    );
};

export const FormPersonal = ({order, setOrder}) => {

    const [errorMessages, setErrorMessages] = useState(null);

    function handleChange(event) {
        const {name, value} = event.target;

        setOrder(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    }

    function validate(order) {
        const errorMessages = {};

        if (!order.name) {
            errorMessages.name = 'Pole nie może być puste!';
        } else if (order.name.length < 3) {
            errorMessages.name = 'Podane imię jest zbyt krótkie!';
        }

        if (!order.surname) {
            errorMessages.surname = 'Pole nie może być puste!';
        } else if (order.surname.length < 3) {
            errorMessages.surname = 'Podane nazwisko jest zbyt krótkie!';
        }

        if (!order.email) {
            errorMessages.email = 'Pole nie może być puste!';
        } else if (!order.email.match('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')) {
            errorMessages.email = 'Podany email jest nieprawidłowy!';
        }

        if (!order.phone) {
            errorMessages.phone = 'Pole nie może być puste!';
        } else if (!order.phone.match('(?:\\(?\\?)?(?:[-\\.\\(\\)\\s]*(\\d)){9}\\)?$')) {
            errorMessages.phone = 'Podany numer jest nieprawidłowy!';
        }

        if (!order.city) {
            errorMessages.city = 'Pole nie może być puste!';
        } else if (order.city.length < 3) {
            errorMessages.city = 'Podane miasto jest nieprawdłowe!';
        }

        if (!order.street) {
            errorMessages.street = 'Pole nie może być puste!';
        }

        if (!order.postcode) {
            errorMessages.postcode = 'Pole nie może być puste!';
        } else if (!order.postcode.match('^[0-9]{2}-[0-9]{3}$')) {
            errorMessages.postcode = 'Podany kod pocztowy jest nieprawidłowy!';
        }

        return Object.keys(errorMessages).length > 0
            ? errorMessages
            : null;
    }

    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        console.log(order);
        const errorMessages = validate(order);
        setErrorMessages(errorMessages);
        if (!errorMessages) {
            navigate('/order/basket/summary');
        }
        console.log(errorMessages);

    };

    return (
        <form noValidate onSubmit={handleSubmit}>
            <h2 className="order-form-title">Dane i adres</h2>

            <Input id={"name"} name={"name"} type={"text"} labelText={"Imię"} value={order.name}
                   onChange={handleChange} err={errorMessages?.name}/>
            <Input id={"surname"} name={"surname"} type={"text"} labelText={"Nazwisko"} value={order.surname}
                   onChange={handleChange} err={errorMessages?.surname}/>
            <Input id={"email"} name={"email"} type={"email"} labelText={"E-Mail"} value={order.email}
                   onChange={handleChange} err={errorMessages?.email}/>
            <Input id={"phone"} name={"phone"} type={"text"} labelText={"Numer telefonu"} value={order.phone}
                   onChange={handleChange} err={errorMessages?.phone}/>
            <Input id={"city"} name={"city"} type={"text"} labelText={"Miasto"} value={order.city}
                   onChange={handleChange} err={errorMessages?.city}/>
            <Input id={"street"} name={"street"} type={"text"} labelText={"Ulica"} value={order.street}
                   onChange={handleChange} err={errorMessages?.street}/>
            <Input id={"postcode"} name={"postcode"} type={"text"} labelText={"Kod pocztowy"} value={order.postcode}
                   onChange={handleChange} err={errorMessages?.postcode}/>
            <div className="userreg-down">
                <input type="submit" className="userreg-confirmed-btn" id="btn" value="Podsumowanie"/>
            </div>
        </form>
    );
};