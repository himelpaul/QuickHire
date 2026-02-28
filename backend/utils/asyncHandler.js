/**
 * Wraps an async route handler to automatically catch errors
 * and forward them to Express error-handling middleware.
 *
 * Eliminates repetitive try/catch blocks in every controller.
 *
 * @param {Function} fn - Async Express route handler
 * @returns {Function} Express middleware
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
