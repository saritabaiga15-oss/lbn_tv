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
import AirtimeOnLBN from "./assets/Components/AirtimeOnLBN/AirtimeOnLBN";
import AnchorcrestFoundation from "./assets/Components/AnchorcrestFoundation/AnchorcrestFoundation";
import LiveTv from "./assets/Components/LiveTv/LiveTv";
import FAQ from "./assets/Components/FAQ/FAQ";
import Footer from "./assets/Components/Footer/Footer";
// import ChatWidget from "./assets/Components/Chatbot/Chatbot";

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleNavigate = (tab, hash = null) => {
    if (tab && activeTab !== tab) {
      setActiveTab(tab);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleChatNavigate = handleNavigate;

  return (
    <div className="App">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="app-main">
        {activeTab === 'home' && (
          <>
            <Hero />
            <Features />
            <ImageGallery onNavigateProgrammes={() => { setActiveTab('programmes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
            <GlobalProgrammes />
            <FAQ />
          </>
        )}
        {activeTab === 'about-us' && <AboutUs />}
        {activeTab === 'programmes' && <Programmes />}
        {activeTab === 'epg' && <Schedule />}
        {activeTab === 'services' && <Services />}
        {activeTab === 'live' && <LiveTv onNavigate={handleNavigate} />}
        {activeTab === 'teens-programs' && <TeensProgrammes />}
        {activeTab === 'kids-programs' && <KidsProgrammes />}
        {activeTab === 'join-our-mission' && <JoinOurMission />}
        {activeTab === 'one-time-gift' && <OneTimeGift />}
        {activeTab === 'airtime-on-lbn' && <AirtimeOnLBN />}
        {activeTab === 'anchorcrest-foundation' && <AnchorcrestFoundation />}
      </main>
      <Footer onNavigate={handleNavigate} />
      {/* <ChatWidget onNavigate={handleChatNavigate} /> */}
    </div>
  );
}

export default App;
