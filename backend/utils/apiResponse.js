/**
 * Standardized API response helpers.
 * Ensures every endpoint returns a consistent JSON shape:
 * { success: boolean, message?: string, data?: any }
 */

const sendSuccess = (res, statusCode, message, data) => {
  const response = { success: true };

  if (message) response.message = message;
  if (data !== undefined) response.data = data;

  return res.status(statusCode).json(response);
};

const sendError = (res, statusCode, message) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = { sendSuccess, sendError };
