import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Home';
import Categories from './Categories';

function BookStore() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default BookStore;
