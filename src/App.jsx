import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

const Projects = () => (
  <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-[Helvetica] font-semibold mb-4">Projects & Case Studies</h2>
      <p className="text-gray-700 mb-8">Our projects showcase successful implementations of growth strategies and digital transformations.</p>
    </div>
  </motion.section>
);

const Team = () => (
  <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-[Helvetica] font-semibold mb-8">Our Team</h2>
      <p className="text-gray-700">Meet our experts who bring ideas to life with innovation and experience.</p>
    </div>
  </motion.section>
);

const Contact = () => (
  <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-[Helvetica] font-semibold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">Reach us at info@cochinconnect.in or call +91 99999 99999</p>
      <form className="max-w-md mx-auto text-left space-y-4">
        <input className="w-full p-3 rounded border" placeholder="Your name" />
        <input className="w-full p-3 rounded border" placeholder="Your email" />
        <textarea className="w-full p-3 rounded border" placeholder="Message" rows={5} />
        <button type="submit" className="bg-[#673AB7] text-white px-6 py-3 rounded">Send Message</button>
      </form>
    </div>
  </motion.section>
);

export default function CochinConnectApp() {
  return (
    <Router>
      <Header />
      <main className="pt-28">
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