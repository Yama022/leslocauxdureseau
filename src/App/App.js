import React, { useState, useEffect } from "react";
// import { useList } from "react-firebase-hooks/database";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../data/firebase";
import 'firebase/firestore';
import emailjs from "emailjs-com";
import Calendar from "react-calendar";
import Footer from "./footer";
import logo from "./logo.png";
import sab from "../images/sab.png";
import jade from "../images/jade.png";
import formation from "../images/formation3.jpeg";
import jadeVideo from "../images/jadeVideo.mp4";

import "../styles/index.scss";

import "react-calendar/dist/Calendar.css";

const db = firebase.firestore();

function App() {
  // const [snapshots, loadingReservations, errorReservations] = useList(
  //   firebase.database().ref("reservations")
  // );
  const [user, loadingAuth, errorAuth] = useAuthState(firebase.auth());
  const [isConnected, setIsConnected] = useState(false);

  const [showConnectedMessage, setShowConnectedMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [reservedDates, setReservedDates] = useState([]);

  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    nom: "",
    prenom: "",
    societe: "",
    telephone: "",
    email: "",
    plageHoraire: "",
    journeeComplete: false,
  });

  useEffect(() => {
    let timeout;

    if (user) {
      setShowConnectedMessage(true);
      setIsConnected(true);
      timeout = setTimeout(() => {
        setShowConnectedMessage(false);
        setShowGreeting(true);
      }, 5000);
    }

    if (showErrorMessage) {
      setShowErrorMessage(true);

      timeout = setTimeout(() => {
        setShowErrorMessage(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [user, showConnectedMessage, showErrorMessage, errorAuth, isConnected]);



  useEffect(() => {
    const unsubscribe = db.collection("reservations")
      .onSnapshot((snapshot) => {
        const newReservations = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setReservedDates(newReservations);
      });
  
    // Nettoyer l'écouteur lorsque le composant est démonté
    return () => {
      console.log('Unsubscribing from Firestore');
      unsubscribe();
    };
  }, []);
  

  


  const handleLogin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then((userCredential) => {
        // L'utilisateur est connecté
        setIsConnected(true); // Connecte l'utilisateur pour l'affichage du formulaire
        setShowConnectedMessage(true);
        setShowErrorMessage(false); // Réinitialiser le message d'erreur
        console.log("User is logged in");
      })
      .catch((error) => {
        // Une erreur s'est produite
        setShowConnectedMessage(false); // Réinitialiser le message de connexion
        setShowErrorMessage(true); // Afficher le message d'erreur
        console.error("Error logging in", error);
      });
  };

  // Affiche un chargement au refresh de la page si l'utilisateur est connecté
  // if (loadingAuth) {
  //   return <p>CHARGEMENT...</p>;
  // }

  const handleLogout = (e) => {
    e.preventDefault();
  
    firebase
      .auth()
      .signOut()
      .then(() => {
        // L'utilisateur est déconnecté
        setShowConnectedMessage(false);
        setIsConnected(false); // Déconnecte l'utilisateur pour l'affichage du formulaire
        setShowGreeting(false); // Réinitialiser l'affichage du bonjour
        setFormData({ email: "", password: "" }); // Réinitialiser les valeurs des champs du formulaire
        console.log("User is logged out");
      })
      .catch((error) => {
        // Une erreur s'est produite
        console.error("Error logging out", error);
      });
  };
  

  const handleClickDay = (date) => {
    setSelectedDate(date);
    setIsFormOpen(true);
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // sendEmailJS(formData);
    console.log("Envoyer l'e-mail", formData);
    setSelectedDate(null);
    setIsFormOpen(false);
    setReservedDates([...reservedDates, selectedDate]); // Ajouter la date sélectionnée aux dates réservées
  
    // Sauvegarder la réservation dans Firestore
    db.collection("reservations").add({
      date: firebase.firestore.Timestamp.fromDate(selectedDate),
      nom: formData.nom,
      prenom: formData.prenom,
      entite: formData.entite,
      telephone: formData.telephone,
      email: formData.email,
      plageHoraire: formData.plageHoraire,
      journeeComplete: formData.journeeComplete,
    })
    
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  
    setFormData({
      date: "",
      nom: "",
      prenom: "",
      societe: "",
      telephone: "",
      email: "",
      plageHoraire: "",
      journeeComplete: false,
    });
  };
  

  const sendEmailJS = (data) => {
    // Configurer les informations nécessaires pour l'envoi de l'e-mail via EmailJS
    const serviceId = "service_2ckt7yw";
    const templateId = "template_tlllxlj";
    const userId = "Z482up6vmvIEfsSmV";

    // Remplacer les valeurs ci-dessus par les informations de ton compte EmailJS

    // Préparer les données à envoyer dans l'e-mail
    const templateParams = {
      date: selectedDate.toLocaleDateString("fr-FR"),
      nom: data.nom,
      prenom: data.prenom,
      societe: data.societe,
      telephone: data.telephone,
      email: data.email,
      plageHoraire: data.plageHoraire,
      journeeComplete: data.journeeComplete ? "Oui" : "Non",
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log(
          "E-mail envoyé avec succès",
          response.status,
          response.text
        );
        // Réinitialiser le formulaire ou faire d'autres actions si nécessaire
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'e-mail", error);
      });
  };

  const updateCalendarColor = (date) => {
    // Code pour mettre à jour la couleur du jour réservé dans le calendrier React
    console.log("Mettre à jour la couleur pour la date", date);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="App">
      <div className="App__header">
        <div className="App__header__title">
          <a href="/">
            <img src={logo} alt="logo" />
            <h1>
              Les locaux <span>du réseau</span>
            </h1>
          </a>
        </div>
        <div className="App__header__login">
          {showConnectedMessage && user && !showGreeting && (
            <p className="App__header__login__text">Vous êtes connecté</p>
          )}
          {showErrorMessage && (
            <p className="App__header__login__text App__header__login__text--error">
              Au moins un des identifiants est incorrect
            </p>
          )}
          {showGreeting && user && (
            <div className="App__header__login__greeting">
              <p className="App__header__login__greeting__text">
                Bonjour {user.email}
              </p>
              <button
                className="App__header__login__greeting__button"
                type="button"
                onClick={handleLogout}
              >
                Déconnexion
              </button>
            </div>
          )}
          {!showGreeting && !user && (
            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                required
              />
              <button type="submit">Connexion</button>
            </form>
          )}
        </div>
      </div>

      <div className="App__main">
        <div className="App__main__content">
          <div className="App__main__content__subtitle">
            <h2>RÉSERVEZ VOTRE ESPACE DE TRAVAIL SELON VOTRE TEMPS</h2>
            <div className="App__main__content__subtitle__desc">
              <p>A la journée ou demi-journée.</p>
              <p>Le nombre de jour que vous voulez</p>
              <p>Et le tout, sans engagement !</p>
              <p>A votre disposition :</p>
              <p>Bureau, chaises, Table de massage, ...</p>
              <p>Possibilité de poser vos cadres (diplôme ou autre)</p>
              <h3>
                Les locaux du réseau vous propose des espaces de travail liés
                aux activités de santé, sécurité et bien être
              </h3>
            </div>
          </div>

          <div className="App__main__content__description">
            <p>
              Dans « <span>les locaux du réseau</span> », vous trouverez :
            </p>

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
                      <p>
                        Spécialisé dans le domaine de la formation Santé et
                        sécurité au travail, venez-vous former aux secourisme, à
                        l’incendie, etc… Toutes nos formations sont consultables
                        sur notre site internet.
                      </p>

                      <h5>Retrouvez-nous sur :</h5>
                      <a
                        href="https://www.fire-formations.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        fire-formations.com
                      </a>
                      <h5>Ou au : 06</h5>
                    </div>
                  </div>

                  <div className="App__main__content__description__list__item-1__right">
                    <img src={formation} alt="logo" />
                  </div>
                </div>

                <div className="App__main__content__description__list__item-2">
                  <div className="App__main__content__description__list__item-2__left">
                    <div className="App__main__content__description__list__item-2__left__title">
                      <h3>Une Maquilleuse Professionnelle</h3>
                      <h4>Scorpius mua</h4>
                      <img src={jade} alt="profil" />
                    </div>
                    <div className="App__main__content__description__list__item-2__left__desc">
                      <p>
                        Maquilleuse artistique professionnelle diplômée. Pour
                        colorer vos projets, souligner vos idées, ou sublimer
                        vos inspirations, contactez moi !
                      </p>
                      <a
                        href="https://scorpiusmua.wixsite.com/jademuapro"
                        rel="noreferrer"
                        target="_blank"
                      >
                        scorpiusmua.wixsite.com
                      </a>
                    </div>
                  </div>

                  <div className="App__main__content__description__list__item-2__right">
                    <video
                      src={jadeVideo}
                      type="video/mp4"
                      // preload="auto"
                      muted
                      autoplay="false"
                      controls
                    ></video>
                  </div>
                </div>

                <div className="App__main__content__description__list__item-3">
                  <div className="App__main__content__description__list__item-3__left">
                    <div className="App__main__content__description__list__item-3__left__title">
                      <h3>Un Centre de formation</h3>
                      <h4>F.I.R.E Formations</h4>
                      <img src={sab} alt="profil" />
                    </div>
                    <div className="App__main__content__description__list__item-3__left__desc">
                      <p>
                        Spécialisé dans le domaine de la formation Santé et
                        sécurité au travail, venez-vous former aux secourisme, à
                        l’incendie, etc… Toutes nos formations sont consultables
                        sur notre site internet.
                      </p>
                      <a
                        href="https://www.fire-formations.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        fire-formations.com
                      </a>
                    </div>
                  </div>

                  <div className="App__main__content__description__list__item-3__right">
                    <img src={formation} alt="logo" />
                  </div>
                </div>

                <div className="App__main__content__description__list__item-4">
                  <div className="App__main__content__description__list__item-4__left">
                    <div className="App__main__content__description__list__item-4__left__title">
                      <h3>Un Centre de formation</h3>
                      <h4>F.I.R.E Formations</h4>
                      <img src={sab} alt="profil" />
                    </div>
                    <div className="App__main__content__description__list__item-4__left__desc">
                      <p>
                        Spécialisé dans le domaine de la formation Santé et
                        sécurité au travail, venez-vous former aux secourisme, à
                        l’incendie, etc… Toutes nos formations sont consultables
                        sur notre site internet.
                      </p>
                      <a
                        href="https://www.fire-formations.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        fire-formations.com
                      </a>
                    </div>
                  </div>

                  <div className="App__main__content__description__list__item-4__right">
                    <img src={formation} alt="logo" />
                  </div>
                </div>

              </div>
            </div>

            <div className="App__main__content__description__reservation">
              <h3>
                N’hésitez pas à suivre les entrepreneurs via leur page internet
                ou réseau(x) puis à les contacter en direct si vous souhaitez un
                rendez-vous.
              </h3>

              <h4>
                Les entrepreneurs du réseau, ajouter vos réservations ici,
                premier arrivé, premier servi :
              </h4>

              <div className="App__main__content__description__reservation__calendar">
                <Calendar
                  onChange={onChange}
                  value={value}
                  onClickDay={handleClickDay}
                  locale="fr-FR"
                  // style={{ width: "120%", margin: "0 auto" }}
                  // className="react-calendar"
                  activeStartDate={new Date()}

                  // tileClassName={({ date, view }) => {
                  //   // console.log('reservedDates', reservedDates);
                  
                  //   const dateString = date.toISOString().slice(0, 10);
                  //   const morningReservation = reservedDates.find(reservation => {
                  //     if (reservation.date && reservation.plageHoraire === '10-13') {
                  //       const reservedDate = reservation.date.toDate();
                  //       // console.log('morningReservation date', reservedDate.toISOString().slice(0, 10));
                  //       return reservedDate.toISOString().slice(0, 10) === dateString;
                  //     }
                  //     return false;
                  //   });
                  //   const afternoonReservation = reservedDates.find(reservation => {
                  //     if (reservation.date && reservation.plageHoraire === '14-19') {
                  //       const reservedDate = reservation.date.toDate();
                  //       // console.log('afternoonReservation date', reservedDate.toISOString().slice(0, 10));
                  //       return reservedDate.toISOString().slice(0, 10) === dateString;
                  //     }
                  //     return false;
                  //   });
                  
                  //   // console.log('morningReservation', morningReservation);
                  //   // console.log('afternoonReservation', afternoonReservation);
                  
                  //   if (view === "month") {
                  //     if (morningReservation && afternoonReservation) {
                  //       // Ajouter une classe CSS en fonction des entités qui ont réservé la matinée et l'après-midi
                  //       return `react-calendar reserved-day-${morningReservation.entite}-${afternoonReservation.entite}`;
                  //     } else if (morningReservation) {
                  //       // Ajouter une classe CSS en fonction de l'entité qui a réservé la matinée
                  //       return `react-calendar reserved-day-${morningReservation.entite}`;
                  //     } else if (afternoonReservation) {
                  //       // Ajouter une classe CSS en fonction de l'entité qui a réservé l'après-midi
                  //       return `react-calendar reserved-day-${afternoonReservation.entite}`;
                  //     }
                  //   }
                  // }}
                  tileClassName={({ date, view }) => {
                    if (view === "month") {
                      const dateString = date.toISOString().slice(0, 10);
                      const morningReservation = reservedDates.find(reservation => {
                        if (reservation.date && reservation.plageHoraire === '10-13') {
                          const reservedDate = reservation.date.toDate();
                          return reservedDate.toISOString().slice(0, 10) === dateString;
                        }
                        return false;
                      });
                      const afternoonReservation = reservedDates.find(reservation => {
                        if (reservation.date && reservation.plageHoraire === '14-19') {
                          const reservedDate = reservation.date.toDate();
                          return reservedDate.toISOString().slice(0, 10) === dateString;
                        }
                        return false;
                      });
                      const fullDayReservation = reservedDates.find(reservation => {
                        if (reservation.date && reservation.journeeComplete === true) {
                          const reservedDate = reservation.date.toDate();
                          return reservedDate.toISOString().slice(0, 10) === dateString;
                        }
                        return false;
                      });
                  
                      let classes = ['day-tile'];
                      if (fullDayReservation) {
                        classes.push(`reserved-day-${fullDayReservation.entite}`);
                      } else {
                        if (morningReservation) {
                          // console.log('Morning reservation found:', morningReservation);
                          classes.push(`reserved-day-${morningReservation.entite}-morning`);
                        }
                        if (afternoonReservation) {
                          // console.log('Afternoon reservation found:', afternoonReservation);
                          classes.push(`reserved-day-${afternoonReservation.entite}-afternoon`);
                        }
                      }
                      return classes.join(' ');
                    }
                  }}
                  
                  
                  
                  
                  
                  
                  
                />
              </div>

              {isConnected ?
               selectedDate && (
                <div className="form-overlay">
                  <form onSubmit={handleSubmit}>
                    <h3>
                      Réservation pour le{" "}
                      {selectedDate.toLocaleDateString("fr-FR")}
                    </h3>

                    <label htmlFor="date">Date</label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      value={selectedDate.toLocaleDateString("fr-FR")}
                      readOnly
                    />

                    <label htmlFor="nom">Nom</label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="prenom">Prénom</label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                    />

                    {/* <label htmlFor="societe">Société</label>
                    <input
                      type="text"
                      id="societe"
                      name="societe"
                      value={formData.societe}
                      onChange={handleChange}
                      required
                    /> */}

                    <label htmlFor="entite">Entité</label>
                    <select
                      id="entite"
                      name="entite"
                      value={formData.entite}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Sélectionnez une entité --</option>
                      <option value="fire">Fire</option>
                      <option value="makeup">Makeup</option>
                      <option value="massage">Massage</option>
                      <option value="hypno">Hypno</option>
                    </select>

                    <label htmlFor="telephone">Téléphone</label>
                    <input
                      type="text"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="plageHoraire">Plage horaire</label>
                    <select
                      id="plageHoraire"
                      name="plageHoraire"
                      value={formData.plageHoraire}
                      onChange={handleChange}
                      required
                      disabled={formData.journeeComplete}
                    >
                      <option value="">
                        -- Sélectionnez une plage horaire --
                      </option>
                      <option value="10-13">10h - 13h</option>
                      <option value="14-19">14h - 19h</option>
                    </select>

                    <label htmlFor="journeeComplete">Journée complète</label>
                    <input
                      type="checkbox"
                      id="journeeComplete"
                      name="journeeComplete"
                      className="day"
                      checked={formData.journeeComplete}
                      onChange={handleChange}
                    />

                    <button type="submit">Réserver</button>
                    <button type="button" onClick={() => setSelectedDate(null)}>
                      Fermer
                    </button>
                  </form>
                  </div>
              ) : (
                null) 

              }
              
              
              
                  
        </div>
      </div>
    </div>
  </div>

      <Footer />
    </div>
  );
}

export default App;
