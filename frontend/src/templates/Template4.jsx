// import React from "react";

// function Template4({ formData }) {
//   return (
//     <div
//       className="min-h-[297mm] w-[210mm] p-8 shadow-lg font-sans"
//       style={{ background: "white" }}
//     >
//       {/* Header */}
//       <div className="bg-blue-800 text-white p-6 mb-6">
//         {formData.name && (
//           <h1 className="text-3xl font-bold">{formData.name}</h1>
//         )}
//         {(formData.email ||
//           formData.phone ||
//           formData.address ||
//           formData.linkedin) && (
//           <div className="flex flex-wrap gap-2 text-sm mt-2">
//             {formData.email && <span>{formData.email}</span>}
//             {formData.phone && <span>| {formData.phone}</span>}
//             {formData.address && <span>| {formData.address}</span>}
//             {formData.linkedin && (
//               <span>
//                 |{" "}
//                 <a href={formData.linkedin} className="underline">
//                   LinkedIn
//                 </a>
//               </span>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Profile Summary */}
//       {formData.objective && (
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold border-b-2 border-blue-800 pb-1 mb-2">
//             Profile Summary
//           </h2>
//           <p>{formData.objective}</p>
//         </div>
//       )}

//       {/* Education */}
//       {formData.education.length > 0 && (
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold border-b-2 border-blue-800 pb-1 mb-2">
//             Education
//           </h2>
//           {formData.education.map((edu, index) => (
//             <div key={index} className="mb-4">
//               <p className="font-medium">{edu.institution}</p>
//               <p>{edu.degree}</p>
//               <p>{edu.year}</p>
//               {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Technical Skills */}
//       {formData.skills.length > 0 && (
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold border-b-2 border-blue-800 pb-1 mb-2">
//             Technical Skills
//           </h2>
//           <ul className="list-disc pl-5">
//             {formData.skills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Experience */}
//       {formData.experience.length > 0 && (
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold border-b-2 border-blue-800 pb-1 mb-2">
//             Experience
//           </h2>
//           {formData.experience.map((exp, index) => (
//             <div key={index} className="mb-4">
//               <p className="font-medium">{exp.company}</p>
//               <p>{exp.role}</p>
//               <p>{exp.duration}</p>
//               {exp.description && <p>{exp.description}</p>}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Projects */}
//       {formData.projects.length > 0 && (
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold border-b-2 border-blue-800 pb-1 mb-2">
//             Projects
//           </h2>
//           {formData.projects.map((project, index) => (
//             <div key={index} className="mb-4">
//               <p className="font-medium">{project.name}</p>
//               {project.technologies && (
//                 <p>Technologies: {project.technologies}</p>
//               )}
//               {project.date && <p>Date: {project.date}</p>}
//               {project.description && <p>{project.description}</p>}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Languages */}
//       {formData.languages.length > 0 && (
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold border-b-2 border-blue-800 pb-1 mb-2">
//             Languages
//           </h2>
//           <ul className="list-disc pl-5">
//             {formData.languages.map((language, index) => (
//               <li key={index}>{language}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Personal Details */}
//       {(formData.dateOfBirth ||
//         formData.maritalStatus ||
//         formData.nationality ||
//         formData.passport?.number) && (
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold border-b-2 border-blue-800 pb-1 mb-2">
//             Personal Details
//           </h2>
//           {formData.dateOfBirth && <p>Date of Birth: {formData.dateOfBirth}</p>}
//           {formData.maritalStatus && (
//             <p>Marital Status: {formData.maritalStatus}</p>
//           )}
//           {formData.nationality && <p>Nationality: {formData.nationality}</p>}
//           {formData.passport?.number && (
//             <>
//               <p>Passport: {formData.passport.number}</p>
//               {formData.passport.issueDate && (
//                 <p>Issue Date: {formData.passport.issueDate}</p>
//               )}
//               {formData.passport.expiryDate && (
//                 <p>Expiry Date: {formData.passport.expiryDate}</p>
//               )}
//               {formData.passport.placeOfIssue && (
//                 <p>Place of Issue: {formData.passport.placeOfIssue}</p>
//               )}
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Template4;

import React from "react";

function Template4({ formData }) {
  return (
    <div
      className="min-h-[297mm] w-[210mm] p-8 shadow-lg font-sans"
      style={{ background: "white" }}
    >
      {/* Header */}
      <div
        className="p-6 mb-6"
        style={{ backgroundColor: "#1E3A8A", color: "white" }}
      >
        {formData.name && (
          <h1 className="text-3xl font-bold">{formData.name}</h1>
        )}
        {(formData.email ||
          formData.phone ||
          formData.address ||
          formData.linkedin) && (
          <div className="flex flex-wrap gap-2 text-sm mt-2">
            {formData.email && <span>{formData.email}</span>}
            {formData.phone && <span>| {formData.phone}</span>}
            {formData.address && <span>| {formData.address}</span>}
            {formData.linkedin && (
              <span>
                |{" "}
                <a
                  href={formData.linkedin}
                  className="underline"
                  style={{ color: "white" }}
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
          <h2
            className="text-xl font-semibold border-b-2 pb-1 mb-2"
            style={{ borderColor: "#1E3A8A" }}
          >
            Profile Summary
          </h2>
          <p>{formData.objective}</p>
        </div>
      )}

      {/* Education */}
      {formData.education.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-xl font-semibold border-b-2 pb-1 mb-2"
            style={{ borderColor: "#1E3A8A" }}
          >
            Education
          </h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4">
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
          <h2
            className="text-xl font-semibold border-b-2 pb-1 mb-2"
            style={{ borderColor: "#1E3A8A" }}
          >
            Technical Skills
          </h2>
          <ul className="list-disc pl-5">
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Experience */}
      {formData.experience.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-xl font-semibold border-b-2 pb-1 mb-2"
            style={{ borderColor: "#1E3A8A" }}
          >
            Experience
          </h2>
          {formData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
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
          <h2
            className="text-xl font-semibold border-b-2 pb-1 mb-2"
            style={{ borderColor: "#1E3A8A" }}
          >
            Projects
          </h2>
          {formData.projects.map((project, index) => (
            <div key={index} className="mb-4">
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
          <h2
            className="text-xl font-semibold border-b-2 pb-1 mb-2"
            style={{ borderColor: "#1E3A8A" }}
          >
            Languages
          </h2>
          <ul className="list-disc pl-5">
            {formData.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Personal Details */}
      {(formData.dateOfBirth ||
        formData.maritalStatus ||
        formData.nationality ||
        formData.passport?.number) && (
        <div className="mb-6">
          <h2
            className="text-xl font-semibold border-b-2 pb-1 mb-2"
            style={{ borderColor: "#1E3A8A" }}
          >
            Personal Details
          </h2>
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

export default Template4;
