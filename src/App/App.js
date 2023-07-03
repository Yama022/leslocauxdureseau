import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Footer from './footer';
import logo from './logo.png';
import sab from '../images/sab.png';
import jade from '../images/jade.png';
import formation from '../images/formation3.jpeg';
import jadeVideo from '../images/jadeVideo.mp4';
import '../styles/index.scss';

import 'react-calendar/dist/Calendar.css';



function App() {

  const [value, onChange] = useState(new Date());

  // const slides = [
  //   { url: "./images/hall.jpeg", title: "beach" },
  //   { url: "./images/hall1.jpeg", title: "boat" },
  //   { url: "./images/entree.jpeg", title: "forest" },
  //   { url: "./images/entree1.jpeg", title: "city" },
  // ];

  const handleClickDay = () => {
    
    console.log(value, 'click')
  }

  console.log(value, 'value');
  return (
    <div className="App">
      <div className="App__header">
        <div className="App__header__title">
          <img src={logo} alt="logo" />
          <h1>
            Les locaux <span>du réseau</span>
          </h1>

        </div>
      </div>

      <div className='App__main'>
        <div className='App__main__content'>
          <div className="App__main__content__subtitle">
            <h2>RÉSERVEZ VOTRE ESPACE DE TRAVAIL SELON VOTRE TEMPS</h2>
            <div className="App__main__content__subtitle__desc">
              <p>A la journée ou demi-journée.</p>
              <p>Le nombre de jour que vous voulez</p>
              <p>Et le tout, sans engagement !</p>
              <p>A votre disposition :</p>
              <p>Bureau, chaises, Table de massage, ...</p>
              <p>Possibilité de poser vos cadres (diplôme ou autre)</p>
              <h3>Les locaux du réseau vous propose des espaces de travail liés aux activités de santé, sécurité et bien être</h3>
            </div>

          </div>

          <div className="App__main__content__description">

            <p>Dans « <span>les locaux du réseau</span> », vous trouverez :</p>

            {/* <Slider slides={slides} /> */}
            <div className="App__main__content__description__list">
              <div className="App__main__content__description__list__item">

                <div className="App__main__content__description__list__item-1">

                  <div className="App__main__content__description__list__item-1__left">
                    <div className="App__main__content__description__list__item-1__left__title">
                      <h3>Un Centre de formation</h3>
                      <h4>F.I.R.E Formations</h4>
                      <img src={sab} alt="profil" />
                    </div>
                    <div className="App__main__content__description__list__item-1__left__desc">
                      <p>Spécialisé dans le domaine de la formation Santé et sécurité au travail, venez-vous former aux secourisme, à l’incendie, etc…
                        Toutes nos formations sont consultables sur notre site internet.
                      </p>
                      <a href="https://www.fire-formations.com" rel="noreferrer" target='_blank'>fire-formations.com</a>
                    </div>
                  </div>

                  <div className="App__main__content__description__list__item-1__right">
                    <img src={formation} alt="logo" />
                  </div>
                </div>

                <div className="App__main__content__description__list__item-2">

                  <div className="App__main__content__description__list__item-1__left">
                    <div className="App__main__content__description__list__item-1__left__title">
                      <h3>Une Maquilleuse Professionnelle</h3>
                      <h4>Jade</h4>
                      <img src={jade} alt="profil" />
                    </div>
                    <div className="App__main__content__description__list__item-1__left__desc">
                      <p>Maquilleuse artistique professionnelle diplômée. Pour colorer vos projets, souligner vos idées, ou sublimer vos inspirations, contactez moi !
                      </p>
                      <a href="https://www.fire-formations.com" rel="noreferrer" target='_blank'>fire-formations.com</a>
                    </div>
                  </div>

                  <div className="App__main__content__description__list__item-1__right">
                    <video src={jadeVideo} type="video/mp4" preload='auto' controls="controls" autoplay="false"></video>
                  </div>
                </div>

              </div>

            </div>

            <div className="App__main__content__description__reservation">
              <h3>N’hésitez pas à suivre les entrepreneurs via leur page internet ou réseau(x) puis à les contacter en direct si vous souhaitez un rendez-vous.</h3>

              <h4>Les entrepreneurs du réseau, ajouter vos réservations ici, premier arrivé, premier servi  :</h4>

              <div className="App__main__content__description__reservation__calendar">
                <Calendar
                  onChange={onChange}
                  value={value}
                  onClickDay={handleClickDay}
                  locale='fr-FR'
                  style={{ width: '100%', margin: '0 auto' }}
                  className='react-calendar'
                  />

              </div>

            </div>
          </div>

          
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
