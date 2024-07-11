const mongoose = require("mongoose");
require("dotenv").config();

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 20 giây
      socketTimeoutMS: 30000, // 20 giây
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};
