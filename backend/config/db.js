const mongoose = require("mongoose");

/**
 * Connects to MongoDB using the URI defined in environment variables.
 * Logs connection status and exits the process on failure so the
 * application never runs in a half-connected state.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
