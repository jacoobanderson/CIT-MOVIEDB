import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Discover from './pages/Discover';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
