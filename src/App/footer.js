import React from 'react';

import '../styles/index.scss';

export default function Footer() {


  const handleOpen = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal--open');
  }

  const handleClose = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal--close');
  }
  return (
    <div className='App__footer'>
      <div className="App__footer__contact">
        CONTACT:
        <a href="mailto:contact@leslocauxdureseau.com">contact@leslocauxdureseau.com</a>
        <p>Tél: 06.17.79.85.04 </p>
        <a href="www.leslocauxdureseaux.com">www.leslocauxdureseaux.com</a>
      </div>

      <div className="App__footer__content">
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
