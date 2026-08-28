import React, { useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import AboutUs from "./Components/AboutUs/AboutUs";
import Programmes from "./Components/Programmes/Programmes";
import EPG from "./Components/EPG/EPG";
import TeensPrograms from "./Components/TeensPrograms/TeensPrograms";
import KidsPrograms from "./Components/KidsPrograms/KidsPrograms";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import GlobalPrograms from "./Components/GlobalPrograms/GlobalPrograms";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";

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
            <GlobalPrograms />
            <FAQ />
          </>
        )}
        {activeTab === 'about-us' && <AboutUs />}
        {activeTab === 'programmes' && <Programmes />}
        {activeTab === 'epg' && <EPG />}
        {activeTab === 'teens-programs' && <TeensPrograms />}
        {activeTab === 'kids-programs' && <KidsPrograms />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
