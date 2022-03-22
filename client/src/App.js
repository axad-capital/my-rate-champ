import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComp from './components/NavComp/NavComp';
import HomePage from './pages/HomePage/HomePage';
import ThankYou from './pages/ThankYou/ThankYou';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import Disclaimer from './pages/Legal/Disclaimer';
import Partners from './pages/Legal/Partners';

function App() {
  return (
    <div className="App">
      <Router>
        <NavComp />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/thank-you' element={<ThankYou />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/disclaimer' element={<Disclaimer />} />
          <Route exact path='/partners' element={<Partners />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
