import '../scss/_Order.scss'



const Order = () => {
    return (
        <div className="App-order container">
            <h1 className="order-title">Skonfiguruj swój wymarzony stolik</h1>
            <div className="order-main">
                <div className="order-left">
                    <p className="order-text">Wybierz rozmiar, rodzaj i kolor nóg oraz blatu</p>
                    <div className="order-summary">
                        <h3 className="order-summary-title">Twoje zamówienie:</h3>
                        <span className="order-summary-details">--szczegóły zamówienia--</span>
                    </div>
                    {/*<div className="order-visualisation">Wizualizacja stolika</div>*/}

                </div>
                <div className="order-right">
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
                </div>
            </div>
        </div>
    );
};

export default Order;