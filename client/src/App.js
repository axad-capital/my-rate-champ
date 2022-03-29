import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AutoPage from './pages/AutoPage/AutoPage';
import HealthPage from './pages/HealthPage/HealthPage';
import LifePage from './pages/LifePage/LifePage';
import ThankYouAuto from './pages/ThankYouPages/ThankYouAuto/ThankYouAuto';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import Disclaimer from './pages/Legal/Disclaimer';
import Partners from './pages/Legal/Partners';
import ThankYouHealth from './pages/ThankYouPages/ThankYouHealth/ThankYouHealth';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/auto-insurance' element={<AutoPage />} />
          <Route exact path='/health-insurance' element={<HealthPage />} />
          <Route exact path='/life-insurance' element={<LifePage />} />
          <Route exact path='/thank-you-auto' element={<ThankYouAuto />} />
          <Route exact path='/thank-you-health' element={<ThankYouHealth />} />
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
