import logo from '../logo.svg';
import '../scss/_App.scss';
import Header from "./Header";
import Opening from "./Opening";
import About from "./About";

function App() {
    return (
        <div className="App">
            <Header/>
            <Opening/>
            <About/>
        </div>
    );
}

export default App;
