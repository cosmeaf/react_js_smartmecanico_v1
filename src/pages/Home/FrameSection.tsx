import React, { useRef } from 'react';
import './Home.css';

const FrameSection = () => {

  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.volume = parseFloat(event.target.value);
    }
  };
  return (
    <section className="section">
      <div className="section-content">
        <h1>Conheça a Smart Mecânico!</h1>
        <div className="section-row">
          <div className="section-col">
            <video ref={videoRef} src={require('../../images/videos/smartmecanico.mp4')}></video>
            <div className="video-controls">
              <button onClick={handlePlay}>Play</button>
              <button onClick={handlePause}>Pause</button>
              <button onClick={handleStop}>Stop</button>
              <input type="range" min="0" max="1" step="0.1" defaultValue="1" onChange={handleVolumeChange} />
            </div>
          </div>
          <div className="section-col">
            <p>Descubra uma nova maneira de cuidar do seu veículo com a Smart Mecânico!</p>
            <p>Imagine um mundo onde as idas à oficina mecânica não são mais sinônimo de incômodo e perda de tempo. Com a Smart Mecânico, essa realidade extraordinária se torna possível.</p>
            <p>Nossa empresa revolucionária oferece um serviço exclusivo de agendamento de serviços mecânicos em sua própria casa. Sim, você leu corretamente: nossos profissionais altamente qualificados vêm até você, proporcionando conveniência e praticidade sem precedentes.</p>
            <p>Diga adeus às longas esperas em oficinas abarrotadas e desfrute da comodidade de ter um mecânico especializado diretamente na sua garagem. Nosso objetivo é simplificar a manutenção do seu veículo, proporcionando uma experiência excepcional e personalizada.</p>
            <button className="custom-button">Saber Mais</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrameSection;
