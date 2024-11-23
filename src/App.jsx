import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>
      {/* Header will appear on all pages */}
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      
      {/* Footer will appear on all pages */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
