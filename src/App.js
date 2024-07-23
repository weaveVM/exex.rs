import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [exexes, setExexes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetch('/exexes.json')
      .then(response => response.json())
      .then(data => setExexes(data.reverse()));
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900`}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <HeroSection />
      <CardGrid exexes={exexes} />
      <Footer />
    </div>
  );
}

export default App;
