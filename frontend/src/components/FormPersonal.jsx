import { useState } from "react";

function PersonalInfoForm({ data, updateData, onNext }) {
  const [form, setForm] = useState({
    name: data.name || "",
    email: data.email || "",
    phone: data.phone || "",
    linkedin: data.linkedin || "",
    address: data.address || "",
    dateOfBirth: data.dateOfBirth || "",
    maritalStatus: data.maritalStatus || "",
    nationality: data.nationality || "",
    passport: {
      number: data.passport?.number || "",
      issueDate: data.passport?.issueDate || "",
      expiryDate: data.passport?.expiryDate || "",
      placeOfIssue: data.passport?.placeOfIssue || "",
    },
    objective: data.objective || "",
    languages: data.languages?.length > 0 ? data.languages : [""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("passport.")) {
      const field = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        passport: { ...prev.passport, [field]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLanguageChange = (index, value) => {
    const newLanguages = [...form.languages];
    newLanguages[index] = value;
    setForm((prev) => ({ ...prev, languages: newLanguages }));
  };

  const addLanguage = () => {
    setForm((prev) => ({ ...prev, languages: [...prev.languages, ""] }));
  };

  const removeLanguage = (index) => {
    setForm((prev) => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Name and Email are required.");
      return;
    }
    updateData({
      name: form.name,
      email: form.email,
      phone: form.phone,
      linkedin: form.linkedin,
      address: form.address,
      dateOfBirth: form.dateOfBirth,
      maritalStatus: form.maritalStatus,
      nationality: form.nationality,
      passport: form.passport,
      objective: form.objective,
      languages: form.languages.filter((lang) => lang.trim() !== ""),
    });
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="john.doe@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="123-456-7890"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            LinkedIn
          </label>
          <input
            type="url"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="linkedin.com/in/john-doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="123 Main St, City"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="text"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="MM/DD/YYYY"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Marital Status
          </label>
          <input
            type="text"
            name="maritalStatus"
            value={form.maritalStatus}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Single/Married"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nationality
          </label>
          <input
            type="text"
            name="nationality"
            value={form.nationality}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Citizen"
          />
        </div>
      </div>

      {/* <h3 className="text-xl font-semibold mt-6 mb-2">Passport Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Passport Number
          </label>
          <input
            type="text"
            name="passport.number"
            value={form.passport.number}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="X1234567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Issue Date
          </label>
          <input
            type="text"
            name="passport.issueDate"
            value={form.passport.issueDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="MM/DD/YYYY"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Expiry Date
          </label>
          <input
            type="text"
            name="passport.expiryDate"
            value={form.passport.expiryDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="MM/DD/YYYY"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Place of Issue
          </label>
          <input
            type="text"
            name="passport.placeOfIssue"
            value={form.passport.placeOfIssue}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="City"
          />
        </div>
      </div> */}

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Career Objective
        </label>
        <textarea
          name="objective"
          value={form.objective}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          rows="4"
          placeholder="Describe your career goals..."
        />
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Languages</h3>
        {form.languages.map((lang, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              value={lang}
              onChange={(e) => handleLanguageChange(index, e.target.value)}
              className="p-2 w-full border rounded-md"
              placeholder="e.g., English"
            />
            {form.languages.length > 1 && (
              <button
                type="button"
                onClick={() => removeLanguage(index)}
                className="bg-red-500 text-white rounded-md px-2 py-1"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addLanguage}
          className="mt-2 bg-blue-500 text-white rounded-md px-4 py-2"
        >
          Add Language
        </button>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default PersonalInfoForm;
