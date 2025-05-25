import React, {useState} from "react";
import './App.css';
import { assets } from "./assets/assets.js";

const App = () =>{
  const [progress, setProgress] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-text">TEST</h1>
        <div className="logo">
        <img src={assets.react_logo} alt="React logo" />
        <p>React</p>
      </div>
      <div className="home">
        <p onClick={() => setProgress((prev) => ((prev + 1)%assets.home_text.length))}>{assets.home_text[progress]}</p>
        <p>{progress}</p>
      </div>
      </header>
    </div>
  );
}

export default App;
