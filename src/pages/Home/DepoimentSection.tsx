import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DepoimentSection = () => {
  const depoiments = [
    {
      author: 'John Doe',
      content: 'Excelente serviço e atendimento da SmartMecânico. Eles consertaram meu carro rapidamente e com um preço justo.',
      image: 'https://via.placeholder.com/150',
      stars: 5,
    },
    {
      author: 'Jane Smith',
      content: 'Estou muito satisfeita com o serviço da SmartMecânico. Eles foram muito profissionais e resolveram o problema do meu carro de forma eficiente.',
      image: 'https://via.placeholder.com/150',
      stars: 4,
    },
    {
      author: 'Bob Johnson',
      content: 'Recomendo a SmartMecânico a todos. O atendimento foi amigável e o serviço foi de alta qualidade. Voltarei novamente!',
      image: 'https://via.placeholder.com/150',
      stars: 5,
    },
  ];

  return (
    <section style={{ width: '100%', height: '500px', background: 'white' }}>
      <div className="h-full flex items-center justify-center">
        <div className="w-1/2 px-4 flex flex-col items-center">
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
            {depoiments.map((depoiment, index) => (
              <div key={index} className="h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-10">
                  <img src={depoiment.image} alt={`Profile ${index + 1}`} className="rounded-full w-full h-full" />
                </div>
                <p className="mb-4 text-center max-w-xs">{depoiment.content}</p>
                <p className="mb-4 font-bold text-primary">{depoiment.author}</p>
                <div className="flex mb-4">
                  {Array.from({ length: depoiment.stars }).map((_, i) => (
                    <i key={i} className="fas fa-star mb-11"></i>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="w-1/2 px-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl mb-10 text-primary">Pagamento fácil e seguro!</h2>
          <p className="text-center mb-10 max-w-xs">Aqui na Smart Mecânico, você pode optar por efetuar o pagamento no momento do agendamento ou após a realização do serviço, faça um PIX ou pague pelo cartão de crédito através do PagSeguro!</p>
          <button className="py-2 px-4 bg-blue-500 text-white rounded-3xl bg-primary">Saber Mais</button>
        </div>
      </div>
    </section>
  );
};

export default DepoimentSection;
