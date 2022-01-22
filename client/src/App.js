import logo from "./logo.svg";
import PromptController from "./main-game/PromptController";
import "./App.css";
import Prompt from "./main-game/Prompt.js";
import AboutUs from "./about-us/AboutUs";
import Home from "./home-page/Home";
import { Routes, Route, Link } from "react-router-dom";
import NameForm from "./main-game/input";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<AboutUs></AboutUs>}></Route>
        <Route
          path="prompt"
          element={
            <PromptController initWords={["hello", "goodbye", "potato"]} />
          }
        ></Route>
        <Route path="text" element={<NameForm></NameForm>}></Route>
      </Routes>
    </div>
  );
}

export default App;
