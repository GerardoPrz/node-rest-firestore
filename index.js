const admin = require("firebase-admin");
const express = require("express");
const app = express();
const products = require("./routes/products")

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // You need to download this JSON from Firebase Console
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(express.json());

app.use("/products", products);

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(db));