import logo from './logo.svg';
import river from './images/river.png'
import mercantilandina from './images/mercantil.jpg'
import './App.css';
import React, { useEffect, useRef } from 'react';

function App() {

  const sliderRef = useRef(null);
  const sliderUlRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const sliderUl = sliderUlRef.current;
    const slides = sliderUl.children;
    const slideCount = slides.length;
    const slideWidth = slides[0].offsetWidth;
    const slideHeight = slides[0].offsetHeight;
    const sliderUlWidth = slideCount * slideWidth;

    slider.style.width = `${slideWidth}px`;
    slider.style.height = `${slideHeight}px`;

    sliderUl.style.width = `${sliderUlWidth}px`;
    sliderUl.style.marginLeft = `-${slideWidth}px`;

    sliderUl.insertBefore(slides[slideCount - 1], slides[0]);

    function moveLeft() {
      sliderUl.style.transition = 'left 0.2s';
      sliderUl.style.left = `${slideWidth}px`;

      setTimeout(() => {
        sliderUl.insertBefore(sliderUl.lastElementChild, sliderUl.firstElementChild);
        sliderUl.style.transition = 'none';
        sliderUl.style.left = '0';
      }, 200);
    }

    function moveRight() {
      sliderUl.style.transition = 'left 0.2s';
      sliderUl.style.left = `-${slideWidth}px`;

      setTimeout(() => {
        sliderUl.appendChild(sliderUl.firstElementChild);
        sliderUl.style.transition = 'none';
        sliderUl.style.left = '0';
      }, 200);
    }

    const controlPrev = document.querySelector('a.control_prev');
    const controlNext = document.querySelector('a.control_next');

    controlPrev.addEventListener('click', (e) => {
      e.preventDefault();
      moveLeft();
    });

    controlNext.addEventListener('click', (e) => {
      e.preventDefault();
      moveRight();
    });

    return () => {
      controlPrev.removeEventListener('click', moveLeft);
      controlNext.removeEventListener('click', moveRight);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="" />
        <a href="#contacto">Contactanos</a>
        <a href="">
          <img className='App-logo' src={logo} alt="" />
        </a>
      </header>
      <section className="about">
        <dir>
          <h1>Sobre Nosotros</h1>
          <ul>
            <div>
              <h3>GARANTIZADO</h3>
              <p>Nosotros solo ganamos si vos ganas. Esa es la base para una buena colaboración. <br /> <br />No vas a asumir todo el riesgo, lo vamos a compartir.</p>
            </div>
            <div>
              <h3>RESULTADOS</h3>
              <p>Nuestra prioridad es que tengas resultados. <br /> <br /> Menos charla, más accion.</p>
            </div>
            <div>
              <h3>LOCAL</h3>
              <p>No estamos escondidos en algún callcenter. <br /> <br /> Somos una empresa local, así que nos podes contactar cuando necesites.</p>
            </div>
            <div>
              <h3>ESPECIALIZADO</h3>
              <p>El que mucho abarca, poco aprieta... La especialización funciona. <br /> <br /> Por eso trabajamos con industrias que conocemos, para poder garantizar resultados.</p>
            </div>
          </ul>
        </dir>
      </section>


      <div className="main" id="work">
      <h1>Nuestros Trabajos</h1>
      <section>
        <div id="slider" ref={sliderRef}>
          <a href="#" className="control_next">→</a>
          <a href="#" className="control_prev">←</a>
          <ul ref={sliderUlRef}>
            <li><a href="https://carpsada.com.ar/"><img src={river} alt="" /></a></li>
            <li><a href="https://mercantilandina.nettype.ar/"><img src={mercantilandina} alt="" /></a></li>
            <li><a href="https://planetfitness.nettype.ar/Ejercicios"><img src="https://picsum.photos/200" alt="" /></a></li>
            <li><a href="https://recetasdecampo.nettype.ar/"><img src="https://picsum.photos/200" alt="" /></a></li>
          </ul>
        </div>
      </section>
    </div>


      <div class="main" id="contact">
    <h1>CONTACTANOS</h1>
    <form action="">
      <label for="name" class="input">Nombre</label>
      <input type="text" name="name" id="name" />
      <label for="mail" class="input">Mail</label>
      <input type="email" name="mail" id="mail" />
      <label for="message" class="input">¿Como te podemos ayudar?</label>
      <textarea name="message" id="msg" cols="30" rows="10"></textarea>
      <div class="container"></div>
      <button type="button" id="button">Enviar</button>
    </form>
  </div>

    </div>
  );
}

export default App;
