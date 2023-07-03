import Footer from './footer';
import logo from './logo.png';
import sab from '../images/sab.png';
import formation from '../images/formation3.jpeg';
import '../styles/index.scss';



function App() {

  // const slides = [
  //   { url: "./images/hall.jpeg", title: "beach" },
  //   { url: "./images/hall1.jpeg", title: "boat" },
  //   { url: "./images/entree.jpeg", title: "forest" },
  //   { url: "./images/entree1.jpeg", title: "city" },
  // ];

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

            <p>Dans « les locaux du réseau », vous trouverez :</p>

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
