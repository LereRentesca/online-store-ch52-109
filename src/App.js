import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Catalog from './pages/catalog.jsx';
import About from './pages/about.jsx';
import Admin from './pages/admin.jsx';
import Home from './pages/home.jsx';
import Cart from './pages/cart.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalProvider from './context/globalProvider.jsx';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/home' element={ <Home /> } />
            <Route path="/catalog" element={ <Catalog /> } />
            <Route path="/admin" element={ <Admin /> } />
            <Route path='/about' element={ <About /> } />
            <Route path="/cart" element={ <Cart /> } />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
