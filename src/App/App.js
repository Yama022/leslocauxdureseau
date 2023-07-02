import logo from './logo.png';
import '../styles/index.scss';

function App() {


  const handleOpen = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal--open');
  }

  const handleClose = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal--close');
  }

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
            </div>

          </div>
          <div className="App__main__content__description">
            <p>Les locaux du réseau vous propose des espaces de travail liés aux activités de santé, sécurité et bien être</p>
            <div className="App__main__content__description__list">
              <div className="App__main__content__description__list--1">
                <h2>Un Centre de formation - F.I.R.E Formations</h2>
                <div className="App__main__content__description__list--1__activity">
                  <p>
                  Spécialisé dans le domaine de la formation Santé et sécurité au travail, venez-vous former aux secourisme, à l’incendie, etc…
                  Toutes nos formations sont consultables sur notre site internet.
                  <a href="www.fire-formations.com">www.fire-formations.com</a>
                  </p>
                  <img src={logo} alt="logo" />
                </div>
              </div>
              <div className="App__main__content__description__list--2">
                <h2>Un Centre de formation - F.I.R.E Formations</h2>
                <div className="App__main__content__description__list--2__activity">
                  <p>
                    maquilleuse artistique professionnelle diplômée basée a Paris.
                    Pour colorer vos projets, souligner vos idées, ou sublimer vos inspirations, contactez moi !
                    <a href="www.fire-formations.com">www.fire-formations.com</a>
                  </p>
                  <img src={logo} alt="logo" />
                </div>
              </div>
              <div className="App__main__content__description__list--3">
                <h2>Un Centre de formation - F.I.R.E Formations</h2>
                <div className="App__main__content__description__list--3__activity">
                  <p>
                    maquilleuse artistique professionnelle diplômée basée a Paris.
                    Pour colorer vos projets, souligner vos idées, ou sublimer vos inspirations, contactez moi !
                    <a href="www.fire-formations.com">www.fire-formations.com</a>
                  </p>
                  <img src={logo} alt="logo" />
                </div>
              </div>
              <div className="App__main__content__description__list--4">
                <h2>Un Centre de formation - F.I.R.E Formations</h2>
                <div className="App__main__content__description__list--4__activity">
                  <p>
                    maquilleuse artistique professionnelle diplômée basée a Paris.
                    Pour colorer vos projets, souligner vos idées, ou sublimer vos inspirations, contactez moi !
                    <a href="www.fire-formations.com">www.fire-formations.com</a>
                  </p>
                  <img src={logo} alt="logo" />
                </div>
              </div>
              <div className="App__main__content__description__list--5">
                <h2>Un Centre de formation - F.I.R.E Formations</h2>
                <div className="App__main__content__description__list--5__activity">
                  <p>
                    maquilleuse artistique professionnelle diplômée basée a Paris.
                    Pour colorer vos projets, souligner vos idées, ou sublimer vos inspirations, contactez moi !
                    <a href="www.fire-formations.com">www.fire-formations.com</a>
                  </p>
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      <div className="App__contact">
        CONTACT:
        <p>contact@leslocauxdureseau.com</p>
        <p>Tél: 06.17.79.85.04 </p>
        <a href="www.leslocauxdureseaux.com">www.leslocauxdureseaux.com</a>
      </div>

      <div className="App__footer">
        <p>
          © 2023 Les locaux du réseau
        </p>
        <button onClick={handleOpen}>Mentions légales</button>
        <div className="modal">
          <div className="modal__content">
            <div className="modal__content__header">
              <h2>Mentions légales</h2>
              <button className="modal__content__header__close" onClick={handleClose}>X</button>
              <p>Conformément aux dispositions de l'article 6 III 1° de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, nous vous informons que :

Le présent site est un support de communication officiel de F.I.R.E FORMATIONS INCENDIE RÉSEAU ENTREPRENEURS, société par actions simplifiées à associé unique (SASU) au capital de 500 euros, immatriculée au registre du commerce et des sociétés (RCS) de Créteil sous le numéro 825 365 398 et dont le siège social est situé au 14 rue de l'Espérance - 94800 Villejuif (téléphone : 06 01 94 44 08, email : contact@fire-formations.com) ;
La directrice de la publication du site est Sabrina Jacquemin-Gautier en qualité de Présidente ;
Le prestataire assurant l'hébergement est EPIXELIC, société à responsabilité limitée (SARL) au capital de 175.000 euros, immatriculée au registre du commerce et des sociétés (RCS) de Créteil sous le numéro 453 836 694 et dont le siège social est situé 31 cours des Juilliottes - 94700 Maisons-Alfort (téléphone : 01 48 93 4000, site Internet : www.epixelic.com, email : contact@epixelic.com).
Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, nous vous informons que :

Les informations recueillies sur le formulaire de contact de ce site Internet sont enregistrées dans un fichier informatisé par notre prestataire informatique, la société EPIXELIC, pour la gestion commerciale de nos prospects et de nos clients ;
Elles sont conservées pendant 3 ans et sont destinées à notre service commercial établi en France ;
Vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant Sabrina Gautier (téléphone : 06 01 94 44 08, email : contact@fire-formations.com).
Ce site Internet utilise Google Analytics pour mesurer son audience grâce aux cookies. Vous avez la possibilité d'interdire l'utilisation des cookies dans les paramétrages de votre navigateur Internet.

Conformément aux articles L.616-1 et R.616-1 du code de la consommation, notre société a mis en place un dispositif de médiation de la consommation. L'entité de médiation retenue est : SAS CNPM - Médiation- Consommation. En cas de litige, le consommateur pourra déposer sa réclamation sur le site : cnpm-mediation-consommation.eu ou par voie postale en écrivant à CNPM - Médiation - Consommation - 27 avenue de la Libération – 42400 Saint-Chamond.

L'ensemble des contenus de ce site Internet est protégé par des droits de propriété intellectuelle. La reproduction, totale ou partielle, est strictement interdite sans autorisation préalable.

Crédits photo : ©ambrozinio - stock.adobe.com, ©Threephet - stock.adobe.com, ©zhu difeng - stock.adobe.com, ©Picture-Factory - stock.adobe.com, Dimenshteyn, ©showcake - stock.adobe.com, ©lordn - stock.adobe.com, ©jayzynism - stock.adobe.com, ©wellphoto - stock.adobe.com</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
