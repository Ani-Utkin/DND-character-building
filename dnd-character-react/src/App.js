import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterList from './pages/CharacterList/CharacterList';
import Home from './pages/Home';
import Layout from './pages/Layout';
import AbilityScores from './pages/CreateCharacter/AbilityScores';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="CharacterList" element={<CharacterList />} />
            <Route path="Create" element={< AbilityScores/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
