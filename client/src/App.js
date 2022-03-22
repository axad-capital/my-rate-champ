import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComp from './components/NavComp/NavComp';
import HomePage from './pages/HomePage/HomePage';
import ThankYou from './pages/ThankYou/ThankYou'

function App() {
  return (
    <div className="App">
      <Router>
        <NavComp />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/thank-you' element={<ThankYou />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
