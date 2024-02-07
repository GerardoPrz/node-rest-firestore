const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

router.get("/", (req, res, next) => {
  admin
    .firestore()
    .collection("users")
    .get()
    .then((snapshot) => {
      const response = {
        docs: snapshot.docs.map((doc) => {
          return doc.data();
        }),
      };
      console.log(response);
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
