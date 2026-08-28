import React, { useState } from "react";

import Navbar from "./assets/Components/Navbar/Navbar";
import Hero from "./assets/Components/Hero/Hero";
import Features from "./assets/Components/Features/Features";
import AboutUs from "./assets/Components/AboutUs/AboutUs";

import Programmes from "./assets/Components/Programmes/Programm";

import Schedule from "./assets/Components/Schedule/Schedule";
import Services from "./assets/Components/Services/Services";
import TeensProgrammes from "./assets/Components/TeensProgrammes/TeensProgrammes";
import KidsProgrammes from "./assets/Components/KidsProgrammes/KidsProgrammes";
import ImageGallery from "./assets/Components/ImageGallery/ImageGallery";
import GlobalProgrammes from "./assets/Components/GlobalProgrammes/GlobalProgrammes";
import JoinOurMission from "./assets/Components/JoinOurMission/JoinOurMission";
import OneTimeGift from "./assets/Components/OneTimeGift/OneTimeGift";
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
        {activeTab === 'services' && <Services />}
        {activeTab === 'teens-programs' && <TeensProgrammes />}
        {activeTab === 'kids-programs' && <KidsProgrammes />}
        {activeTab === 'join-our-mission' && <JoinOurMission />}
        {activeTab === 'one-time-gift' && <OneTimeGift />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
