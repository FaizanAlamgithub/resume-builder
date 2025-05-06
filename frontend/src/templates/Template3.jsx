import React from "react";

function Template3({ formData }) {
  return (
    <div className="min-h-[297mm] w-[210mm] bg-white p-6 shadow-lg flex">
      <div className="w-1/2 pr-4 border-r border-gray-200">
        <h2 className="text-2xl font-bold mb-4">{formData.name}</h2>
        {(formData.email ||
          formData.phone ||
          formData.linkedin ||
          formData.address) && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            {formData.email && <p>{formData.email}</p>}
            {formData.phone && <p>{formData.phone}</p>}
            {formData.linkedin && <p>{formData.linkedin}</p>}
            {formData.address && <p>{formData.address}</p>}
          </div>
        )}
        {formData.skills.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <ul className="list-none">
              {formData.skills.map((skill, index) => (
                <li key={index} className="mb-1">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
        {formData.languages.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Languages</h3>
            <ul className="list-none">
              {formData.languages.map((language, index) => (
                <li key={index} className="mb-1">
                  {language}
                </li>
              ))}
            </ul>
          </div>
        )}
        {(formData.dateOfBirth ||
          formData.maritalStatus ||
          formData.nationality ||
          formData.passport?.number) && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
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
        )}
      </div>
      <div className="w-1/2 pl-4">
        {formData.objective && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Objective</h3>
            <p>{formData.objective}</p>
          </div>
        )}
        {formData.education.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            {formData.education.map((edu, index) => (
              <div key={index} className="mb-2">
                <p className="font-medium">{edu.institution}</p>
                <p>
                  {edu.degree}, {edu.year}
                </p>
                <p>CGPA: {edu.cgpa}</p>
              </div>
            ))}
          </div>
        )}
        {formData.experience.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
            {formData.experience.map((exp, index) => (
              <div key={index} className="mb-2">
                <p className="font-medium">{exp.company}</p>
                <p>
                  {exp.role}, {exp.duration}
                </p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        )}
        {formData.projects && formData.projects.some((p) => p.name?.trim()) && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Projects</h3>
            {formData.projects.map((project, index) => (
              <div key={index} className="mb-2">
                <p className="font-medium">{project.name}</p>
                <p>
                  {project.technologies}, {project.date}
                </p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Template3;
