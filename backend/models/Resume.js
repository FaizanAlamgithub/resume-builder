import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: { type: String, trim: true },
  phone: { type: String, trim: true },
  linkedin: { type: String, trim: true },
  address: { type: String, trim: true },
  dateOfBirth: { type: String, trim: true },
  maritalStatus: { type: String, trim: true },
  nationality: { type: String, trim: true },
  passport: {
    number: { type: String, trim: true },
    issueDate: { type: String, trim: true },
    expiryDate: { type: String, trim: true },
    placeOfIssue: { type: String, trim: true },
  },
  objective: { type: String, trim: true },
  education: [
    {
      institution: { type: String, trim: true },
      degree: { type: String, trim: true },
      year: { type: String, trim: true },
      cgpa: { type: String, trim: true },
    },
  ],
  experience: [
    {
      company: { type: String, trim: true },
      role: { type: String, trim: true },
      duration: { type: String, trim: true },
      description: { type: String, trim: true },
    },
  ],
  skills: [{ type: String, trim: true }],
  projects: [
    {
      name: { type: String, trim: true },
      technologies: { type: String, trim: true },
      date: { type: String, trim: true },
      description: { type: String, trim: true },
    },
  ],
  languages: [{ type: String, trim: true }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Resume", resumeSchema);
