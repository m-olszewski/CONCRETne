import '../scss/_App.scss';
import Header from "./Header";
import Opening from "./Opening";
import Product from "./Product";
import About from "./About";

function App() {
    return (
        <div className="App">
            <Header/>
            <Opening/>
            <About/>
            <Product/>
        </div>
    );
}

export default App;
