import express from "express";
import Resume from "../models/Resume.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Validation middleware for POST and PUT
const validateResume = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("education").isArray().withMessage("Education must be an array"),
];

// Create a new resume
router.post("/", validateResume, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Validation error", errors: errors.array() });
    }
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      res.status(400).json({ message: "Error saving resume", error: error.message });
    }
  }
});

// Get a resume by ID
router.get("/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving resume", error: error.message });
  }
});

// Update a resume by ID
router.put("/:id", validateResume, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Validation error", errors: errors.array() });
    }
    const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    res.json(resume);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      res.status(400).json({ message: "Error updating resume", error: error.message });
    }
  }
});

// Delete a resume by ID
router.delete("/:id", async (req, res) => {
  try {
    const resume = await Resume.findByIdAndDelete(req.params.id);
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    res.json({ message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting resume", error: error.message });
  }
});

export default router;