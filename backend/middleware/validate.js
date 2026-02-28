const { body, param } = require("express-validator");
const { validationResult } = require("express-validator");

// ─── Reusable validation middleware runner ────────────────────────────
/**
 * Checks the result of preceding express-validator chains.
 * If validation errors exist, responds with 400 and a descriptive message.
 */
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const message = errors
      .array()
      .map((err) => err.msg)
      .join(", ");

    return res.status(400).json({ success: false, message });
  }

  next();
};

// ─── Job validation rules ────────────────────────────────────────────
const validateCreateJob = [
  body("title").notEmpty().withMessage("Title is required"),
  body("company").notEmpty().withMessage("Company is required"),
  body("location").notEmpty().withMessage("Location is required"),
  body("category").notEmpty().withMessage("Category is required"),
  body("description").notEmpty().withMessage("Description is required"),
  handleValidationErrors,
];

// ─── Application validation rules ────────────────────────────────────
const validateCreateApplication = [
  body("jobId").notEmpty().withMessage("Job ID is required"),
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("A valid email is required"),
  body("resumeLink")
    .notEmpty()
    .withMessage("Resume link is required")
    .isURL()
    .withMessage("Resume link must be a valid URL"),
  handleValidationErrors,
];

// ─── Param validators ────────────────────────────────────────────────
const validateObjectId = [
  param("id").isMongoId().withMessage("Invalid ID format"),
  handleValidationErrors,
];

module.exports = {
  validateCreateJob,
  validateCreateApplication,
  validateObjectId,
};
