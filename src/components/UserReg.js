import React from 'react';
import {FormPersonal} from "./Form";
import {Link} from "react-router-dom";
import '../scss/_Userreg.scss'

const UserReg = () => {
    return (
        <div className="App-userreg container">
            <div className="userreg-header">
                <Link to="/"><span className="back-button">Strona główna</span></Link>
                <span className="separator">&#8811;</span>
                <Link to="/order"><span className="back-button">Zamówienie</span></Link>
                <span className="separator">&#8811;</span>
                <Link to="/order/basket"><span className="back-button">Koszyk</span></Link>
                <span className="separator">&#8811;</span>
                <span className="actually">Rejestracja</span>
            </div>
            <div className="userreg-main">
                <FormPersonal/>
            </div>
        </div>
    );
};

export default UserReg;