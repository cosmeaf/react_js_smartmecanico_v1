import React from 'react';
import Header from '../../components/frontend/Header';
import Footer from '../../components/frontend/Footer';
import FrameSection from './FrameSection';
import CardSection from './CardSection';
import ProfessionalSection from './ProfessionalSection';
import DepoimentSection from './DepoimentSection';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="w-full h-600 overflow-hidden relative">
        <video
          src={require('../../images/videos/smartmecanico.mp4')}
          autoPlay
          loop
          muted
          className="w-full h-auto min-h-full object-cover brightness-75"
          style={{ maxHeight: '600px' }}
        />
      </section>
      <FrameSection/>
      <CardSection/>
      <ProfessionalSection/>
      <DepoimentSection  />
      <Footer />
    </div>
  );
}
