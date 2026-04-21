const admin = require('firebase-admin');

if (!admin.apps.length) {
  // Para ambiente local, use GOOGLE_APPLICATION_CREDENTIALS
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

const db = admin.firestore();

module.exports = { admin, db };
