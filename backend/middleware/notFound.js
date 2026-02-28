/**
 * 404 handler for undefined routes.
 * Placed after all registered routes so any unmatched request
 * receives a clear "not found" response instead of a generic error.
 */
const notFound = (req, res, next) => {
  const error = new Error(`Not Found — ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

module.exports = notFound;
