const express = require("express");
const router = express.Router();
const { getFirestore } = require("firebase-admin/firestore");
const db = getFirestore();

router.get("/", async (req, res, next) => {
  const response = {
    mesagge: "Hello from home",
  };

  db.collection("users")
    .get()
    .then((snapshot) => {
      const response = {
        count: snapshot.size,
        docs: snapshot.map((doc) => {
          return {
            name: doc.first,
          };
        }),
      };
      return res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
