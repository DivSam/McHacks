import logo from './logo.svg';
import './App.css';
import Prompt from "./main-game/Prompt.js"
import NavigationBar from './navbar/NavigationBar';
import AboutUs from './about-us/AboutUs';

function App() {
  return (
    <div className="App">
      <Prompt content="hello" initX={200} initY={10} speed={10} xSpeed={0} ySpeed={200}/>
      <NavigationBar></NavigationBar>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
