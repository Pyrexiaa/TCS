import './App.css';
import Navbar from './components/navbar/navbar';
import FirstPage from './components/FirstPage/FirstPage';
import AboutMuseum from './components/AboutMuseumPage/AboutMuseum';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<FirstPage />} />
                <Route path="/aboutMuseum" element={<AboutMuseum />} />
            </Routes>

        </>

    );
}

export default App;
