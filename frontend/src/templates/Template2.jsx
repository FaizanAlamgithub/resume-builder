import React from "react";

function Template2({ formData }) {
  return (
    <div
      className="min-h-[297mm] w-[210mm] p-8 shadow-lg"
      style={{ backgroundColor: "white" }}
    >
      <div
        className="text-center pb-4 mb-6"
        style={{ borderBottom: "4px solid #2563EB" }}
      >
        <h2 className="text-3xl font-bold">{formData.name}</h2>
        {(formData.email ||
          formData.phone ||
          formData.linkedin ||
          formData.address) && (
          <p>
            {formData.email && `${formData.email} | `}
            {formData.phone && `${formData.phone} | `}
            {formData.linkedin && `${formData.linkedin}`}
            {formData.address && <br />}
            {formData.address}
          </p>
        )}
      </div>
      {formData.objective && (
        <div className="mb-6">
          <h3
            className="text-xl font-semibold mb-2 pl-2"
            style={{ borderLeft: "4px solid #2563EB" }}
          >
            Objective
          </h3>
          <p>{formData.objective}</p>
        </div>
      )}
      {formData.education.length > 0 && (
        <div className="mb-6">
          <h3
            className="text-xl font-semibold mb-2 pl-2"
            style={{ borderLeft: "4px solid #2563EB" }}
          >
            Education
          </h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium">{edu.institution}</p>
              <p>{edu.degree}</p>
              <p>{edu.year}</p>
              <p>CGPA: {edu.cgpa}</p>
            </div>
          ))}
        </div>
      )}
      {formData.experience.length > 0 && (
        <div className="mb-6">
          <h3
            className="text-xl font-semibold mb-2 pl-2"
            style={{ borderLeft: "4px solid #2563EB" }}
          >
            Work Experience
          </h3>
          {formData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium">{exp.company}</p>
              <p>{exp.role}</p>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      )}
      {formData.projects && formData.projects.some((p) => p.name?.trim()) && (
        <div className="mb-6">
          <h3
            className="text-xl font-semibold mb-2 pl-2"
            style={{ borderLeft: "4px solid #2563EB" }}
          >
            Projects
          </h3>
          {formData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium">{project.name}</p>
              <p>Technologies: {project.technologies}</p>
              <p>Date: {project.date}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}
      {(formData.skills.length > 0 || formData.languages.length > 0) && (
        <div className="flex justify-between">
          {formData.skills.length > 0 && (
            <div className="w-1/2 pr-4">
              <h3
                className="text-xl font-semibold mb-2 pl-2"
                style={{ borderLeft: "4px solid #2563EB" }}
              >
                Skills
              </h3>
              <ul className="list-disc pl-5">
                {formData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          {formData.languages.length > 0 && (
            <div className="w-1/2 pl-4">
              <h3
                className="text-xl font-semibold mb-2 pl-2"
                style={{ borderLeft: "4px solid #2563EB" }}
              >
                Languages
              </h3>
              <ul className="list-disc pl-5">
                {formData.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {(formData.dateOfBirth ||
        formData.maritalStatus ||
        formData.nationality ||
        formData.passport?.number) && (
        <div className="mt-6">
          <h3
            className="text-xl font-semibold mb-2 pl-2"
            style={{ borderLeft: "4px solid #2563EB" }}
          >
            Personal Details
          </h3>
          {formData.dateOfBirth && <p>Date of Birth: {formData.dateOfBirth}</p>}
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
  );
}

export default Template2;
