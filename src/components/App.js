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
            <About/>
            <Material/>
            <div className="line"/>
            <Specs/>
            <div className="line"/>
            <Order/>
            <div className="line"/>
            <Footer/>
        </div>
    );
}

export default App;
