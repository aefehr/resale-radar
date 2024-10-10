import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BuyerPage from './pages/BuyerPage';
import SellerPage from './pages/SellerPage';

function App() {
  return (
    <Router>
        <div className="app">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/buyer" element={<BuyerPage />} />
                <Route path="/seller" element={<SellerPage />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
