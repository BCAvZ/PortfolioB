import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Home} from "./pages/Home/Home";
import {Contact} from "./pages/Contact/Contact"
import {Projects} from "./pages/Projects/Projects";
import {Route, Routes} from "react-router-dom";


function App() {
    return(
        <section className="flex flex-row w-100 justify-evenly border-2">
            <div className="flex flex-col align-middle">
                    <header>
                        <NavBar/>
                    </header>

                    <main>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/Contact" element={<Contact />}/>
                            <Route path="/Projects" element={<Projects />}/>
                        </Routes>
                    </main>
            </div>
        </section>
    )
}

export default App;