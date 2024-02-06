const admin = require("firebase-admin");
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const express = require("express");
const app = express();
const products = require("./routes/products")

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // You need to download this JSON from Firebase Console
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

const docRef = db.collection('users').doc('alovelace');

docRef.set({
  first: 'Ada',
  last: 'Loavelace',
  born: 1815
});

app.use(express.json());

app.use("/products", products);

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(db));