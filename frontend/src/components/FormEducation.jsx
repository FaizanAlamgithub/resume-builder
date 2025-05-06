import { useState } from "react";

function EducationForm({ data, updateData, onNext, onPrev }) {
  const [education, setEducation] = useState(
    data.length > 0
      ? data
      : [{ institution: "", degree: "", year: "", cgpa: "" }]
  );

  const handleChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      { institution: "", degree: "", year: "", cgpa: "" },
    ]);
  };

  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(education.filter((edu) => edu.institution.trim() !== ""));
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Institution
              </label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) =>
                  handleChange(index, "institution", e.target.value)
                }
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="University Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Degree
              </label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleChange(index, "degree", e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="B.Sc. Computer Science"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Year
              </label>
              <input
                type="text"
                value={edu.year}
                onChange={(e) => handleChange(index, "year", e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="2012-2016"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CGPA
              </label>
              <input
                type="text"
                value={edu.cgpa}
                onChange={(e) => handleChange(index, "cgpa", e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="3.8"
              />
            </div>
          </div>
          {education.length > 1 && (
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="mt-4 bg-red-500 text-white rounded-md px-2 py-1"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="mb-4 bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Add Education
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

export default EducationForm;
