const express = require("express");
const router = express.Router();

const {
  createApplication,
} = require("../controllers/applicationController");

const { validateCreateApplication } = require("../middleware/validate");

router.route("/").post(validateCreateApplication, createApplication);

module.exports = router;
