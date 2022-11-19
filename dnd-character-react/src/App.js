import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
      <h1 style={{ textAlign:'center' }}>DND Character Build</h1>
        <ul>
          <li>Home</li>
          <li>Create Character</li>
          <li>My Characters</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
