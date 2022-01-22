import logo from './logo.svg';
import './App.css';
import Prompt from "./main-game/Word.js"

function App() {
  return (
    <div className="App">
      <Prompt content="hello" speed={10}/>
    </div>
  );
}

export default App;
