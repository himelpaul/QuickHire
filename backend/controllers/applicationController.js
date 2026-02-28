const Application = require("../models/Application");
const Job = require("../models/Job");
const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendError } = require("../utils/apiResponse");

// ─── POST /api/applications ─────────────────────────────────────────
const createApplication = asyncHandler(async (req, res) => {
  const { jobId, name, email, resumeLink, coverNote } = req.body;

  // Verify the referenced job actually exists
  const jobExists = await Job.findById(jobId);

  if (!jobExists) {
    return sendError(res, 404, "Job not found — cannot apply to a non-existent job");
  }

  const application = await Application.create({
    jobId,
    name,
    email,
    resumeLink,
    coverNote,
  });

  sendSuccess(res, 201, "Application submitted successfully", application);
});

module.exports = { createApplication };
