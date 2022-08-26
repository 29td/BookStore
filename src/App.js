import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Books from './Components/Books';
import Categories from './Components/Categories';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
