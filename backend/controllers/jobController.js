const Job = require("../models/Job");
const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendError } = require("../utils/apiResponse");

// ─── GET /api/jobs ───────────────────────────────────────────────────
// Supports optional query params: ?search, ?category, ?location
const getJobs = asyncHandler(async (req, res) => {
  const { search, category, location } = req.query;
  const filter = {};

  if (search) {
    const searchRegex = new RegExp(search, "i");
    filter.$or = [{ title: searchRegex }, { company: searchRegex }];
  }

  if (category) {
    filter.category = category;
  }

  if (location) {
    filter.location = location;
  }

  const jobs = await Job.find(filter).sort({ createdAt: -1 });

  sendSuccess(res, 200, "Jobs retrieved successfully", jobs);
});

// ─── GET /api/jobs/:id ───────────────────────────────────────────────
const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return sendError(res, 404, "Job not found");
  }

  sendSuccess(res, 200, "Job retrieved successfully", job);
});

// ─── POST /api/jobs ──────────────────────────────────────────────────
const createJob = asyncHandler(async (req, res) => {
  const { title, company, location, category, description, type } = req.body;

  const job = await Job.create({
    title,
    company,
    location,
    category,
    description,
    type,
  });

  sendSuccess(res, 201, "Job created successfully", job);
});

// ─── DELETE /api/jobs/:id ────────────────────────────────────────────
const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return sendError(res, 404, "Job not found");
  }

  await job.deleteOne();

  sendSuccess(res, 200, "Job deleted successfully");
});

module.exports = { getJobs, getJobById, createJob, deleteJob };
