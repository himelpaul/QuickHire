const express = require("express");
const router = express.Router();

const {
  getJobs,
  getJobById,
  createJob,
  deleteJob,
} = require("../controllers/jobController");

const {
  validateCreateJob,
  validateObjectId,
} = require("../middleware/validate");

router.route("/").get(getJobs).post(validateCreateJob, createJob);

router.route("/:id").get(validateObjectId, getJobById).delete(validateObjectId, deleteJob);

module.exports = router;
