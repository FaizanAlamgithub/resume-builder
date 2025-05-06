// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import resumeRoutes from "./routes/resumeRoutes.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 4000;

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// app.use("/api/resumes", resumeRoutes);

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error("Server error:", err.stack);
//   res.status(500).json({ message: "Internal server error" });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import resumeRoutes from './routes/resumeRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit on connection failure
  });

// Routes
app.use('/api/resumes', resumeRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start Server
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
  console.log(`Server running on port ${PORT}`);
});