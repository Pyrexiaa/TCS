import './App.css';
import Navbar from './components/navbar/navbar';
import FirstPage from './components/FirstPage/FirstPage';
import AboutMuseum from './components/AboutMuseumPage/AboutMuseum';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path="/aboutMuseum" element={<AboutMuseum />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App;
