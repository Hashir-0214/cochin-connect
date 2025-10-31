import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';

const Projects = () => (
  <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-[Helvetica] poppins-semibold mb-4">Projects & Case Studies</h2>
      <p className="text-gray-700 mb-8">Our projects showcase successful implementations of growth strategies and digital transformations.</p>
    </div>
  </motion.section>
);

const Team = () => (
  <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-[Helvetica] poppins-semibold mb-8">Our Team</h2>
      <p className="text-gray-700">Meet our experts who bring ideas to life with innovation and experience.</p>
    </div>
  </motion.section>
);

export default function CochinConnectApp() {
  return (
    <Router>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}