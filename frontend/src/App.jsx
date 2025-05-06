import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import PersonalInfoForm from "./components/FormPersonal";
import EducationForm from "./components/FormEducation";
import ExperienceForm from "./components/FormExperience";
import SkillsForm from "./components/FormSkills";
import ResumePreview from "./components/ResumePreview";
import TemplatePreview from "./components/TemplatePreview";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    address: "",
    dateOfBirth: "",
    maritalStatus: "",
    nationality: "",
    passport: {
      number: "",
      issueDate: "",
      expiryDate: "",
      placeOfIssue: "",
    },
    objective: "",
    education: [{ institution: "", degree: "", year: "", cgpa: "" }],
    experience: [{ company: "", role: "", duration: "", description: "" }],
    skills: [""],
    projects: [{ name: "", technologies: "", date: "", description: "" }],
    languages: [""],
  });
  const [resumeId, setResumeId] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("1");
  const navigate = useNavigate();

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-2xl font-bold">Resume Builder</h1>
          <div className="space-x-4 flex flex-wrap">
            <NavLink
              to="/personal"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Personal Info
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Education
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/templates"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Templates
            </NavLink>
            <NavLink
              to="/preview"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Preview
            </NavLink>
          </div>
        </div>
      </nav> */}

      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/personal"
            element={
              <PersonalInfoForm
                data={{
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone,
                  linkedin: formData.linkedin,
                  address: formData.address,
                  dateOfBirth: formData.dateOfBirth,
                  maritalStatus: formData.maritalStatus,
                  nationality: formData.nationality,
                  passport: formData.passport,
                  objective: formData.objective,
                  languages: formData.languages,
                }}
                updateData={(data) => updateFormData(data)}
                onNext={() => navigate("/education")}
              />
            }
          />
          <Route
            path="/education"
            element={
              <EducationForm
                data={formData.education}
                updateData={(data) => updateFormData({ education: data })}
                onNext={() => navigate("/experience")}
                onPrev={() => navigate("/personal")}
              />
            }
          />
          <Route
            path="/experience"
            element={
              <ExperienceForm
                data={formData.experience}
                updateData={(data) => updateFormData({ experience: data })}
                onNext={() => navigate("/skills")}
                onPrev={() => navigate("/education")}
              />
            }
          />
          <Route
            path="/skills"
            element={
              <SkillsForm
                data={{ skills: formData.skills, projects: formData.projects }}
                updateData={(data) => updateFormData(data)}
                onNext={() => navigate("/templates")}
                onPrev={() => navigate("/experience")}
              />
            }
          />
          <Route
            path="/templates"
            element={
              <TemplatePreview
                setSelectedTemplate={setSelectedTemplate}
                navigate={navigate}
                onPrev={() => navigate("/skills")}
              />
            }
          />
          <Route
            path="/preview"
            element={
              <ResumePreview
                formData={formData}
                resumeId={resumeId}
                setResumeId={setResumeId}
                setFormData={setFormData}
                selectedTemplate={selectedTemplate}
                onPrev={() => navigate("/templates")}
              />
            }
          />
          <Route
            path="/"
            element={
              <PersonalInfoForm
                data={{
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone,
                  linkedin: formData.linkedin,
                  address: formData.address,
                  dateOfBirth: formData.dateOfBirth,
                  maritalStatus: formData.maritalStatus,
                  nationality: formData.nationality,
                  passport: formData.passport,
                  objective: formData.objective,
                  languages: formData.languages,
                }}
                updateData={(data) => updateFormData(data)}
                onNext={() => navigate("/education")}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
