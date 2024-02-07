const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

router.get("/", async (req, res, next) => {
  admin
    .firestore()
    .collection("users")
    .get()
    .then((snapshot) => {
      const response = {
        docs: snapshot.forEach((doc) => {
          return  doc.data;
        }),
      };
      return res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
