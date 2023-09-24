import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Home} from "./pages/Home/Home";
import {Contact} from "./pages/Contact/Contact"
import {Projects} from "./pages/Projects/Projects";
import {Route, Routes} from "react-router-dom";


function App() {
    return(
        <div>
            <section className="flex flex-row justify-center">
                <header className="flex flex-col">
                            <NavBar/>
                </header>
            </section>
            <section className="flex flex-row justify-center">
                <main className="flex flex-col align-middle">
                            <Routes>
                                <Route path="/" element={<Home />}/>
                                <Route path="/Contact" element={<Contact />}/>
                                <Route path="/Projects" element={<Projects />}/>
                            </Routes>
                </main>
            </section>
        </div>
    )
}

export default App;