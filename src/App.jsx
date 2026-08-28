import React, { useState } from "react";

import Navbar from "./assets/Components/Navbar/Navbar";
import Hero from "./assets/Components/Hero/Hero";
import Features from "./assets/Components/Features/Features";
import AboutUs from "./assets/Components/AboutUs/AboutUs";

import Programmes from "./assets/Components/Programmes/Programm";

import Schedule from "./assets/Components/Schedule/Schedule";
import TeensProgrammes from "./assets/Components/TeensProgrammes/TeensProgrammes";
import KidsProgrammes from "./assets/Components/KidsProgrammes/KidsProgrammes";
import ImageGallery from "./assets/Components/ImageGallery/ImageGallery";
import GlobalProgrammes from "./assets/Components/GlobalProgrammes/GlobalProgrammes";
import FAQ from "./assets/Components/FAQ/FAQ";
import Footer from "./assets/Components/Footer/Footer";

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="App">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
        {activeTab === 'home' && (
          <>
            <Hero />
            <Features />
            <ImageGallery />
            <GlobalProgrammes />
            <FAQ />
          </>
        )}
        {activeTab === 'about-us' && <AboutUs />}
        {activeTab === 'programmes' && <Programmes />}
        {activeTab === 'epg' && <Schedule />}
        {activeTab === 'teens-programs' && <TeensProgrammes />}
        {activeTab === 'kids-programs' && <KidsProgrammes />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
