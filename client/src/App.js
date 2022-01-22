
// function App() {
//   return (
//     <div className="App">
//       <NavigationBar></NavigationBar>
//       <AboutUs></AboutUs>
//       <PromptController initWords={["hello", "goodbye", "potato"]}/>

import logo from './logo.svg';
import PromptController from './main-game/PromptController';

import "./App.css";
import Prompt from "./main-game/Prompt.js";
import AboutUs from "./about-us/AboutUs";
import Home from "./home-page/Home";
import { Routes, Route, Link } from "react-router-dom";
import NameForm from "./main-game/input";
import Cardsaver from "./quizlets/cardsaver"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<AboutUs></AboutUs>}></Route>
        <Route
          path="prompt"
          element={<Prompt content="hello" speed={10}></Prompt>}
        ></Route>
        <Route path="cards" element={<Cardsaver></Cardsaver>}></Route>
      </Routes>
    </div>
  );
}

export default App;
