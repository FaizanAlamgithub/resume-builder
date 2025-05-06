import { useState } from "react";

function SkillsForm({ data, updateData, onNext, onPrev }) {
  const [skills, setSkills] = useState(
    data.skills?.length > 0 ? data.skills : [""]
  );
  const [projects, setProjects] = useState(
    data.projects?.length > 0 ? data.projects : []
  );

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { name: "", technologies: "", date: "", description: "" },
    ]);
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData({
      skills: skills.filter((skill) => skill.trim() !== ""),
      projects: projects.filter((proj) => proj.name.trim() !== ""),
    });
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Skills & Projects</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              className="p-2 w-full border rounded-md"
              placeholder="e.g., JavaScript"
            />
            {skills.length > 1 && (
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="bg-red-500 text-white rounded-md px-2 py-1"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addSkill}
          className="mt-2 bg-blue-500 text-white rounded-md px-4 py-2"
        >
          Add Skill
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Projects (Optional)</h3>
        {projects.length === 0 ? (
          <p className="text-gray-600 mb-4">
            No projects added. Click below to add one.
          </p>
        ) : (
          projects.map((proj, index) => (
            <div key={index} className="mb-6 border-b pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={proj.name}
                    onChange={(e) =>
                      handleProjectChange(index, "name", e.target.value)
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Project X"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Technologies
                  </label>
                  <input
                    type="text"
                    value={proj.technologies}
                    onChange={(e) =>
                      handleProjectChange(index, "technologies", e.target.value)
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="React, Node.js"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="text"
                    value={proj.date}
                    onChange={(e) =>
                      handleProjectChange(index, "date", e.target.value)
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="MM/YYYY"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={proj.description}
                    onChange={(e) =>
                      handleProjectChange(index, "description", e.target.value)
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    rows="3"
                    placeholder="Describe the project..."
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeProject(index)}
                className="mt-4 bg-red-500 text-white rounded-md px-2 py-1"
              >
                Remove
              </button>
            </div>
          ))
        )}
        <button
          type="button"
          onClick={addProject}
          className="mt-2 bg-blue-500 text-white rounded-md px-4 py-2"
        >
          Add Project
        </button>
      </div>
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={onPrev}
          className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
        >
          Prev
        </button>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default SkillsForm;
