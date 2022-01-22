import logo from './logo.svg';
import './App.css';
import NavigationBar from './navbar/NavigationBar';
import AboutUs from './about-us/AboutUs';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
