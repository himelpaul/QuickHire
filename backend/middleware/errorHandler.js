/**
 * Centralized error-handling middleware.
 *
 * - Uses the error's statusCode if set, otherwise defaults to 500.
 * - In development mode the full stack trace is included.
 * - In production only the message is returned.
 */
const errorHandler = (err, req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  const response = {
    success: false,
    message,
  };

  // Attach stack trace only in development for easier debugging
  if (process.env.NODE_ENV !== "production") {
    response.stack = err.stack;
  }

  console.error(`[Error] ${statusCode} — ${message}`);
  res.status(statusCode).json(response);
};

module.exports = errorHandler;
