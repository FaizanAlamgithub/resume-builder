import React from "react";

function Template9({ formData }) {
  return (
    <div className="min-h-[297mm] w-[210mm] bg-white p-8 shadow-lg font-sans">
      {/* Header */}
      <div className="mb-8 border-b-2 border-navy-700 pb-4">
        {formData.name && (
          <h1 className="text-3xl font-bold text-navy-800">{formData.name}</h1>
        )}
        {(formData.email ||
          formData.phone ||
          formData.address ||
          formData.linkedin) && (
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
            {formData.email && <span>📧 {formData.email}</span>}
            {formData.phone && <span>📞 {formData.phone}</span>}
            {formData.address && <span>🏠 {formData.address}</span>}
            {formData.linkedin && (
              <span>
                🔗{" "}
                <a
                  href={formData.linkedin}
                  className="underline text-navy-600 hover:text-navy-800"
                >
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
          <h2 className="text-xl font-semibold text-navy-800 border-b border-navy-300 pb-1 mb-3">
            Profile Summary
          </h2>
          <p className="text-gray-700">{formData.objective}</p>
        </div>
      )}

      {/* Education */}
      {formData.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-navy-800 border-b border-navy-300 pb-1 mb-3">
            Education
          </h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium text-gray-800">{edu.institution}</p>
              <p className="text-gray-700">{edu.degree}</p>
              <p className="text-gray-600">{edu.year}</p>
              {edu.cgpa && <p className="text-gray-600">CGPA: {edu.cgpa}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Technical Skills */}
      {formData.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-navy-800 border-b border-navy-300 pb-1 mb-3">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {formData.skills.map((skill, index) => (
              <span key={index} className="text-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {formData.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-navy-800 border-b border-navy-300 pb-1 mb-3">
            Experience
          </h2>
          {formData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium text-gray-800">{exp.company}</p>
              <p className="text-gray-700">{exp.role}</p>
              <p className="text-gray-600">{exp.duration}</p>
              {exp.description && (
                <p className="text-gray-700">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {formData.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-navy-800 border-b border-navy-300 pb-1 mb-3">
            Projects
          </h2>
          {formData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium text-gray-800">{project.name}</p>
              {project.technologies && (
                <p className="text-gray-600">
                  Technologies: {project.technologies}
                </p>
              )}
              {project.date && (
                <p className="text-gray-600">Date: {project.date}</p>
              )}
              {project.description && (
                <p className="text-gray-700">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {formData.languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-navy-800 border-b border-navy-300 pb-1 mb-3">
            Languages
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {formData.languages.map((language, index) => (
              <span key={index} className="text-gray-700">
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
          <h2 className="text-xl font-semibold text-navy-800 border-b border-navy-300 pb-1 mb-3">
            Personal Details
          </h2>
          {formData.dateOfBirth && (
            <p className="text-gray-700">
              Date of Birth: {formData.dateOfBirth}
            </p>
          )}
          {formData.maritalStatus && (
            <p className="text-gray-700">
              Marital Status: {formData.maritalStatus}
            </p>
          )}
          {formData.nationality && (
            <p className="text-gray-700">Nationality: {formData.nationality}</p>
          )}
          {formData.passport?.number && (
            <>
              <p className="text-gray-700">
                Passport: {formData.passport.number}
              </p>
              {formData.passport.issueDate && (
                <p className="text-gray-700">
                  Issue Date: {formData.passport.issueDate}
                </p>
              )}
              {formData.passport.expiryDate && (
                <p className="text-gray-700">
                  Expiry Date: {formData.passport.expiryDate}
                </p>
              )}
              {formData.passport.placeOfIssue && (
                <p className="text-gray-700">
                  Place of Issue: {formData.passport.placeOfIssue}
                </p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Template9;
