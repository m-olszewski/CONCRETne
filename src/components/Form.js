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


export const FormTable = () => {
    return (
        <>
            <h2 className="order-form-title">Specyfikacja stolika</h2>

            <div className="selectbox-content">
                <label for="width">Szerokość stolika:</label>
                <select id="width">
                    <option>wybierz</option>
                    <option>40 cm</option>
                    <option>50 cm</option>
                    <option>60 cm</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label>Długość stolika: </label>
                <select>
                    <option>wybierz</option>
                    <option>60 cm</option>
                    <option>70 cm</option>
                    <option>80 cm</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label>Wysokość stolika: </label>
                <select>
                    <option>wybierz</option>
                    <option>35 cm</option>
                    <option>40 cm</option>
                    <option>45 cm</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label>Materiał blatu: </label>
                <select>
                    <option>wybierz</option>
                    <option>Marmur</option>
                    <option>Beton</option>
                    <option>Dąb</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label>Grubość blatu: </label>
                <select>
                    <option>wybierz</option>
                    <option>1 cm</option>
                    <option>2 cm</option>
                    <option>3 cm</option>
                    <option>4 cm</option>
                    <option>5 cm</option>
                </select>
            </div>

            <div className="selectbox-content">
                <label>Kolor nóg: </label>
                <select>
                    <option>wybierz</option>
                    <option>czarny</option>
                    <option>biały</option>
                    <option>złoty</option>
                    <option>chrom</option>
                </select>
            </div>

        </>
    );
};


export const FormPersonal = () => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        // 👇️ redirect to /contacts
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