import '../scss/_App.scss';
import Header from "./Header";
import Opening from "./Opening";
import Product from "./Product";
import About from "./About";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Opening/>
            <About/>
            <Product/>
            <div className="line"/>
            <Footer/>
        </div>
    );
}

export default App;
