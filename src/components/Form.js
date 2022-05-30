import React from 'react';



const Form = () => {

    return (
        <form className="order-form">
            <div className="order-form-up">
                <h2 className="order-form-title">Specyfikacja stolika</h2>
                <label>Szerokość:
                    <select>
                        <option>40 cm</option>
                        <option>50 cm</option>
                        <option>60 cm</option>
                    </select>
                </label>
                <label>Długość:
                    <select>
                        <option>60 cm</option>
                        <option>70 cm</option>
                        <option>80 cm</option>
                    </select>
                </label>
                <label>Wysokość:
                    <select>
                        <option>35 cm</option>
                        <option>40 cm</option>
                        <option>45 cm</option>
                    </select>
                </label>
                <label>Materiał:
                    <select>
                        <option>Marmur</option>
                        <option>Beton</option>
                        <option>Dąb</option>
                    </select>
                </label>
                <label>Grubość blatu:
                    <select>
                        <option>1 cm</option>
                        <option>2 cm</option>
                        <option>3 cm</option>
                        <option>4 cm</option>
                        <option>5 cm</option>
                    </select>
                </label>
                <label>Kolor nóg:
                    <select>
                        <option>czarny</option>
                        <option>biały</option>
                        <option>złoty</option>
                        <option>chrom</option>
                    </select>
                </label>
            </div>
            <div className="order-form-down">
                <h2 className="order-form-title">Dane i adres</h2>

                <input type="text" placeholder="imię"/>
                <input type="text" placeholder="nazwisko"/>
                <input type="email" placeholder="e-mail"/>
                <input type="text" placeholder="nr tel"/>
                <input type="text" placeholder="miasto"/>
                <input type="text" placeholder="ulica"/>
                <input type="text" placeholder="kod pocztowy"/>

            </div>
            <input className="order-form-btn" type="submit" value="zamów"/>

        </form>
    );
};

export default Form;