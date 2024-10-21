import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/about.module.css';
import { FaRocket, FaShieldAlt, FaTrademark } from 'react-icons/fa'; // Importa los íconos que necesites

const About = () => {
  return (
    <div className={`container-fluid mb-2 ${styles.aboutContainer}`}>
      <Carousel controls={false} indicators={true} interval={3000} pause="hover">
        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.carouselImage}`}
            src="/carousel-image1.png" // Reemplaza con la ruta de tu imagen
            alt="Primera imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.carouselImage}`}
            src="/carousel-image2.png" // Reemplaza con la ruta de tu imagen
            alt="Segunda imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.carouselImage}`}
            src="/carousel-image3.png" // Reemplaza con la ruta de tu imagen
            alt="Tercera imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.carouselImage}`}
            src="/carousel-image4.png" // Reemplaza con la ruta de tu imagen
            alt="Cuarta imagen"
          />
        </Carousel.Item>
      </Carousel>
      <div className="text-center mt-5 my-4">
        <h1 className='font-weight-bold mb-5'>Marcas</h1>
        <div className={`d-flex justify-content-around ${styles.brandLogos}`}>
          <img src="/hp.svg" alt="Marca 1" className={styles.brandLogo} />
          <img src="/maxell.svg" alt="Marca 2" className={styles.brandLogo} />
          <img src="/dell.svg" alt="Marca 3" className={styles.brandLogo} />
          <img src="/kodak.svg" alt="Marca 4" className={styles.brandLogo} />
          <img src="/sony.svg" alt="Marca 5" className={styles.brandLogo} />    
        </div>
          </div>
          <div className={`text-center top-2 mt-5 py-5 ${styles.offerSection}`}>
              <h2 className="font-weight-bold mt-5 mb-5">¡No te pierdas nuestras ofertas!</h2>
             {/* <h2 className="mb-5">¡No te pierdas nuestras ofertas!</h2> */}
            <a 
                href="https://wa.me/584141521511" // Reemplaza con tu número de WhatsApp
                className="btn btn-primary py-2 px-4 mb-5 font-weight-bold "
                target="_blank"
                rel="noopener noreferrer"
            >
                Contáctanos
              </a>
        </div>
      {/* Espacio adicional entre secciones */}
          <div className="text-center mt-5 my-5" >
           {/* Aumenta el margen superior aquí */}
        <h1 className='font-weight-bold mb-5'>Servicios</h1>
        <div className={`d-flex justify-content-around flex-wrap ${styles.cardContainer}`}>
          <div className={`card ${styles.card} m-2`}>
            <FaRocket className={styles.icon} />
            <h3 className="mt-2">Innovación en Tecnología</h3>
            <p>Ofrecemos los mejores equipos tecnológicos del mercado.</p>
          </div>
          <div className={`card ${styles.card} m-2`}>
            <FaShieldAlt className={styles.icon} />
            <h3 className="mt-2">Calidad Garantizada</h3>
            <p>Todos nuestros productos son de alta calidad y rendimiento.</p>
          </div>
          <div className={`card ${styles.card} m-2`}>
            <FaTrademark className={styles.icon} />
            <h3 className="mt-2">Marcas Reconocidas</h3>
            <p>Trabajamos con las mejores marcas del sector tecnológico.</p>
          </div>
        </div>
      </div>
    {/* Footer agregado */}
      <footer className={`d-flex justify-content-between align-items-center p-4 ${styles.footer}`}>
        <div className="d-flex align-items-center">
          <img src="/sharing.png" alt="Logo" className={styles.footerLogo} /> {/* Reemplaza con la ruta de tu logo */}
          <span className={`ms-2 font-weight-bold ${styles.companyName}`}>DLCA Tecnology</span>
        </div>
        <div>
          <a href="/home" className="me-3">Inicio</a>
          <a href="/" className="me-3">Sobre Nosotros</a>
          {/* <a href="/services" className="me-3">Servicios</a>
          <a href="/contact" className="me-3">Contacto</a> */}
        </div>
      </footer>
    </div>
  );
};

export default About;