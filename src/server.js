const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();


app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors({
  origin: 'http://localhost:3000', // change this to your front-end url
  credentials: true
}));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(bodyParser.json());

const serviceAccount = require('./key/les-locaux-du-reseau.json');

// Initialisez l'admin Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://les-locaux-du-reseau-default-rtdb.europe-west1.firebasedatabase.app"
});
const db = admin.firestore();

// Configurez SendGrid
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// app.post('/send-email', function (req, res) {
//   const data = req.body;
//   // Envoyer l'e-mail via SendGrid
//   sgMail
//     .send({
//       to: 'contact@leslocauxdureseau.com', // L'adresse e-mail du destinataire
//       // from: data.email, // Votre adresse e-mail
//       from: 'r-jacquemin@hotmail.fr', // Votre adresse e-mail
//       templateId: 'd-397c1b46f43542a0a3cc8cd50e4b1c5e',
//       dynamic_template_data: {
//         prenom: data.prenom,
//         nom: data.nom,
//         date: data.date,
//         entite: data.entite,
//         telephone: data.telephone,
//         plageHoraire: data.plageHoraire,
//         journeeComplete: data.journeeComplete ? "Oui" : "Non",
//         reservation_id: data.reservation_id,
//       },
//     })
//     .then((response) => {
//       console.log(data, 'data email');
//       console.log("E-mail envoyé avec succès", response);
//       res.json({message: 'E-mail envoyé avec succès'}); // Renvoyer un objet JSON
//     })
//     .catch((error) => {
//       console.error("Erreur lors de l'envoi de l'e-mail", error);
//       res.status(500).json({message: 'Erreur lors de l\'envoi de l\'e-mail'}); // Renvoyer un objet JSON
//     });
// });




app.get('/accept/:reservation_id', function (req, res) {
  console.log('Accepting reservation', req.params.reservation_id);
  const reservationId = req.params.reservation_id;
  // Mettre à jour le statut de la réservation dans votre base de données
  db.collection("reservations").doc(reservationId).update({
    status: "accepted",
  })
  .then(() => {
    console.log('Reservation accepted in Firestore');
    res.send('Réservation acceptée');
  })
  .catch((error) => {
    console.error("Error updating document: ", error);
  });
});

app.get('/reject/:reservation_id', function (req, res) {
  console.log('Rejecting reservation', req.params.reservation_id);
  const reservationId = req.params.reservation_id;
  // Mettre à jour le statut de la réservation dans votre base de données
  const docRef = db.collection("reservations").doc(reservationId);
  console.log('Document reference:', docRef);
  docRef.update({
    status: "rejected",
  })
  .then(() => {
    console.log('Reservation rejected in Firestore');
    res.send('Réservation refusée');
  })
  .catch((error) => {
    console.error("Error updating document: ", error);
  });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});

