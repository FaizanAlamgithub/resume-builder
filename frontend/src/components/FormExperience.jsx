import { useState } from "react";

function ExperienceForm({ data, updateData, onNext, onPrev }) {
  const [experience, setExperience] = useState(
    data.length > 0
      ? data
      : [{ company: "", role: "", duration: "", description: "" }]
  );

  const handleChange = (index, field, value) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      { company: "", role: "", duration: "", description: "" },
    ]);
  };

  const removeExperience = (index) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(experience.filter((exp) => exp.company.trim() !== ""));
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Institute/Company/Organisation
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleChange(index, "company", e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Tech Corp"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <input
                type="text"
                value={exp.role}
                onChange={(e) => handleChange(index, "role", e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Software Developer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Duration
              </label>
              <input
                type="text"
                value={exp.duration}
                onChange={(e) =>
                  handleChange(index, "duration", e.target.value)
                }
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="2016-2020"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={exp.description}
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
                className="mt-1 p-2 w-full border rounded-md"
                rows="3"
                placeholder="Describe your responsibilities..."
              />
            </div>
          </div>
          {experience.length > 1 && (
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="mt-4 bg-red-500 text-white rounded-md px-2 py-1"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="mb-4 bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Add Experience
      </button>
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

export default ExperienceForm;
