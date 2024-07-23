import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';

function App() {
  const [exexes, setExexes] = useState([]);

  useEffect(() => {
    fetch('/exexes.json')
      .then(response => response.json())
      .then(data => setExexes(data.reverse()));
  }, []);

  return (
    <div>
      <HeroSection />
      <CardGrid exexes={exexes} />
      <Footer />
    </div>
  );
}

export default App;
