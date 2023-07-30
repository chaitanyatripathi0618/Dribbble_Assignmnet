import './App.css';
import logo from './Assets/dribbble.jpg';
import ContentPage from './Components/ContentPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='lefthead'>
        <ul>
          <li>Find talent </li>
          <li>For designers </li>
          <li>Inspiration</li>
          <li>Learn design</li>
          <li>Go Pro</li>
        </ul>
        </div>
        <div className="mid">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="buttons">
          <button id="logBtn">Log in <span id="dot">.</span></button>
          <button id="signBtn">sign in</button>
          <button id="hireBtn">Hire Creatives</button>
        </div>
      </header>
      <ContentPage/>
    </div>
  );
}

export default App;
