import logo from './logo.svg';
import './App.css';
import Prompt from "./main-game/Prompt.js"
import Nameform from './main-game/input.js';
import NavigationBar from './navbar/NavigationBar';
import AboutUs from './about-us/AboutUs';
import PromptController from './main-game/PromptController';
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <AboutUs></AboutUs>
      <PromptController initWords={["hello", "goodbye", "potato"]}/>
    </div>
  );
}

export default App;
