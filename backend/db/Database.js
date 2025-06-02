const mongoose = require("mongoose");

const connectDatabase = () => {
  const uri = process.env.DB_URI;
  if (!uri) {
    console.error("Error: MongoDB URI is missing in environment variables!");
    process.exit(1);
  }

  mongoose
    .connect(uri)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => {
      console.error("❌ MongoDB Connection Error:", err);
      process.exit(1);
    });
};

module.exports = connectDatabase;
