import logo from './logo.svg';
import './App.css';
import Nameform from './input.js';
import Prompt from "./main-game/Word.js"
import NavigationBar from './navbar/NavigationBar';
import AboutUs from './about-us/AboutUs';

function App() {
  return (
    <div className="App">
      <Prompt content="hello" speed={10}/>
      <NavigationBar></NavigationBar>
      <AboutUs></AboutUs>
      <Nameform></Nameform>
    </div>
  );
}

export default App;
