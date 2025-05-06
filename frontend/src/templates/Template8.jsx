import React from "react";

function Template8({ formData }) {
  return (
    <div className="min-h-[297mm] w-[210mm] bg-white p-8 shadow-lg font-sans">
      {/* Header */}
      <div className="mb-6">
        {formData.name && (
          <h1 className="text-3xl font-bold text-gray-800">{formData.name}</h1>
        )}
        {(formData.email ||
          formData.phone ||
          formData.address ||
          formData.linkedin) && (
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-2">
            {formData.email && <span>📧 {formData.email}</span>}
            {formData.phone && <span>📞 {formData.phone}</span>}
            {formData.address && <span>🏠 {formData.address}</span>}
            {formData.linkedin && (
              <span>
                🔗{" "}
                <a href={formData.linkedin} className="underline">
                  LinkedIn
                </a>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Profile Summary */}
      {formData.objective && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <span>📝</span> Profile Summary
          </h2>
          <p className="mt-2">{formData.objective}</p>
        </div>
      )}

      {/* Education */}
      {formData.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <span>🎓</span> Education
          </h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4 mt-2">
              <p className="font-medium">{edu.institution}</p>
              <p>{edu.degree}</p>
              <p>{edu.year}</p>
              {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Technical Skills */}
      {formData.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <span>💻</span> Technical Skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {formData.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <span>💼</span> Experience
          </h2>
          {formData.experience.map((exp, index) => (
            <div key={index} className="mb-4 mt-2">
              <p className="font-medium">{exp.company}</p>
              <p>{exp.role}</p>
              <p>{exp.duration}</p>
              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {formData.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <span>🚀</span> Projects
          </h2>
          {formData.projects.map((project, index) => (
            <div key={index} className="mb-4 mt-2">
              <p className="font-medium">{project.name}</p>
              {project.technologies && (
                <p>Technologies: {project.technologies}</p>
              )}
              {project.date && <p>Date: {project.date}</p>}
              {project.description && <p>{project.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {formData.languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <span>🌐</span> Languages
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.languages.map((language, index) => (
              <span key={index} className="bg-gray-200 px-2 py-1 rounded">
                {language}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Personal Details */}
      {(formData.dateOfBirth ||
        formData.maritalStatus ||
        formData.nationality ||
        formData.passport?.number) && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <span>🧑</span> Personal Details
          </h2>
          <div className="mt-2">
            {formData.dateOfBirth && (
              <p>Date of Birth: {formData.dateOfBirth}</p>
            )}
            {formData.maritalStatus && (
              <p>Marital Status: {formData.maritalStatus}</p>
            )}
            {formData.nationality && <p>Nationality: {formData.nationality}</p>}
            {formData.passport?.number && (
              <>
                <p>Passport: {formData.passport.number}</p>
                {formData.passport.issueDate && (
                  <p>Issue Date: {formData.passport.issueDate}</p>
                )}
                {formData.passport.expiryDate && (
                  <p>Expiry Date: {formData.passport.expiryDate}</p>
                )}
                {formData.passport.placeOfIssue && (
                  <p>Place of Issue: {formData.passport.placeOfIssue}</p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Template8;
