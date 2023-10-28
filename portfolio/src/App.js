import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Prizing from "./Components/Prizing";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Prizing />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
