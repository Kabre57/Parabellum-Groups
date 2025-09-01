import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Projects from './pages/Projects';
import Structures from './pages/Structures';
import StructureDetail from './pages/StructureDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/histoire" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/structures" element={<Structures />} />
            <Route path="/structures/:id" element={<StructureDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;