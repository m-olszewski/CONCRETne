import React from "react";
import '../scss/_App.scss';
import Header from "./Header";
import Opening from "./Opening";
import Material from "./Material";
import About from "./About";
import Footer from "./Footer";
import Specs from "./Specs";
import Order from "./Order";

function App() {
    return (
        <div className="App">
            <Header/>
            <Opening/>
            <About id="about"/>
            <Material id="materials"/>
            <div className="line"/>
            <Specs id="specs"/>
            <div className="line"/>
            <Order id="order"/>
            <div className="line"/>
            <Footer/>
        </div>
    );
}

export default App;
