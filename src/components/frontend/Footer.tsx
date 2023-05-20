import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="font-bold">LOGO</div>
            <div>
              Contate-nos
              <br />
              Whatsapp: +55 31 99122-7777
              <br />
              Email: contato@smartmecanico.com.br
              <br />
              SEGUNDA-SEXTA: 08:00 às 18:00
            </div>
            <div className="mt-4">
              <span className="mr-4">Social media:</span>
              <Link to="#" className="mr-2">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="#" className="mr-2">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#" className="mr-2">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="mr-2">
                <i className="fab fa-whatsapp"></i>
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <div className="font-bold">Titulo</div>
            <ul className="mt-4">
              <li>
                <Link to="/pagina1">Link de página 1</Link>
              </li>
              <li>
                <Link to="/pagina2">Link de página 2</Link>
              </li>
              <li>
                <Link to="/pagina3">Link de página 3</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <div className="font-bold">Titulo</div>
            <ul className="mt-4">
              <li>
                <Link to="/lgpd1">Link LGPD 1</Link>
              </li>
              <li>
                <Link to="/lgpd2">Link LGPD 2</Link>
              </li>
              <li>
                <Link to="/lgpd3">Link LGPD 3</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <div className="font-bold">Pequeno formulário</div>
            <form className="mt-4">
              <input type="text" placeholder="Nome" className="w-full mb-2 p-2" />
              <input type="text" placeholder="Telefone" className="w-full mb-2 p-2" />
              <input type="email" placeholder="Email" className="w-full mb-2 p-2" />
              <textarea placeholder="Mensagem" className="w-full mb-2 p-2"></textarea>
              <button type="submit"  className="w-full cursor-pointer rounded-2xl border border-primary bg-primary p-1 text-white transition hover:bg-opacity-90">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
