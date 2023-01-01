import './App.css';
import FirstPage from './components/FirstPage/FirstPage';
import AboutMuseum from './components/AboutMuseumPage/AboutMuseum';
import Architecture from './components/Architecture/Architecture';
import Gallery from './components/Gallery/Gallery';
import OurTeam from './components/OurTeam/OurTeam';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path="/aboutMuseum" element={<AboutMuseum />} />
        <Route path="/aboutArchitecture" element={<Architecture />}/>
        <Route path='/aboutGallery' element={<Gallery />}/>
        <Route path='/aboutOurTeam' element={<OurTeam />}/>
      </Routes>

    </>

  );
}

export default App;
