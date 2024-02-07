const admin = require("firebase-admin");
const express = require("express");
const app = express();
const products = require("./routes/products")

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // You need to download this JSON from Firebase Console
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());

app.use("/products", products);

const port = process.env.PORT || 9001;
app.listen(port);