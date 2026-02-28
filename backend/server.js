const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

// ─── Load environment variables ──────────────────────────────────────
dotenv.config();

// ─── Initialise Express ──────────────────────────────────────────────
const app = express();

// ─── Global middleware ───────────────────────────────────────────────
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());

// ─── API routes ──────────────────────────────────────────────────────
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

// ─── Error-handling middleware (must be registered last) ─────────────
app.use(notFound);
app.use(errorHandler);

// ─── Start server ────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
