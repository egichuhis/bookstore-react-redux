import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/categories" element={Categories} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
