// import React from "react";

// function Template5({ formData }) {
//   return (
//     <div className="min-h-[297mm] w-[210mm] bg-white flex shadow-lg font-sans">
//       {/* Sidebar */}
//       <div className="w-1/3 bg-gray-100 p-6">
//         {formData.name && (
//           <h1 className="text-2xl font-bold mb-4">{formData.name}</h1>
//         )}
//         {(formData.email ||
//           formData.phone ||
//           formData.address ||
//           formData.linkedin) && (
//           <div className="mb-6">
//             <h2 className="text-lg font-semibold mb-2">Contact</h2>
//             {formData.email && <p>{formData.email}</p>}
//             {formData.phone && <p>{formData.phone}</p>}
//             {formData.address && <p>{formData.address}</p>}
//             {formData.linkedin && (
//               <p>
//                 <a href={formData.linkedin} className="underline">
//                   LinkedIn
//                 </a>
//               </p>
//             )}
//           </div>
//         )}
//         {formData.skills.length > 0 && (
//           <div className="mb-6">
//             <h2 className="text-lg font-semibold mb-2">Technical Skills</h2>
//             <ul className="list-none">
//               {formData.skills.map((skill, index) => (
//                 <li key={index} className="mb-1">
//                   {skill}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {formData.languages.length > 0 && (
//           <div>
//             <h2 className="text-lg font-semibold mb-2">Languages</h2>
//             <ul className="list-none">
//               {formData.languages.map((language, index) => (
//                 <li key={index} className="mb-1">
//                   {language}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//       {/* Main Content */}
//       <div className="w-2/3 p-6">
//         {formData.objective && (
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold border-b-2 border-gray-800 pb-1 mb-2">
//               Profile Summary
//             </h2>
//             <p>{formData.objective}</p>
//           </div>
//         )}
//         {formData.education.length > 0 && (
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold border-b-2 border-gray-800 pb-1 mb-2">
//               Education
//             </h2>
//             {formData.education.map((edu, index) => (
//               <div key={index} className="mb-4">
//                 <p className="font-medium">{edu.institution}</p>
//                 <p>{edu.degree}</p>
//                 <p>{edu.year}</p>
//                 {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
//               </div>
//             ))}
//           </div>
//         )}
//         {formData.experience.length > 0 && (
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold border-b-2 border-gray-800 pb-1 mb-2">
//               Experience
//             </h2>
//             {formData.experience.map((exp, index) => (
//               <div key={index} className="mb-4">
//                 <p className="font-medium">{exp.company}</p>
//                 <p>{exp.role}</p>
//                 <p>{exp.duration}</p>
//                 {exp.description && <p>{exp.description}</p>}
//               </div>
//             ))}
//           </div>
//         )}
//         {formData.projects.length > 0 && (
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold border-b-2 border-gray-800 pb-1 mb-2">
//               Projects
//             </h2>
//             {formData.projects.map((project, index) => (
//               <div key={index} className="mb-4">
//                 <p className="font-medium">{project.name}</p>
//                 {project.technologies && (
//                   <p>Technologies: {project.technologies}</p>
//                 )}
//                 {project.date && <p>Date: {project.date}</p>}
//                 {project.description && <p>{project.description}</p>}
//               </div>
//             ))}
//           </div>
//         )}
//         {(formData.dateOfBirth ||
//           formData.maritalStatus ||
//           formData.nationality ||
//           formData.passport?.number) && (
//           <div>
//             <h2 className="text-xl font-semibold border-b-2 border-gray-800 pb-1 mb-2">
//               Personal Details
//             </h2>
//             {formData.dateOfBirth && (
//               <p>Date of Birth: {formData.dateOfBirth}</p>
//             )}
//             {formData.maritalStatus && (
//               <p>Marital Status: {formData.maritalStatus}</p>
//             )}
//             {formData.nationality && <p>Nationality: {formData.nationality}</p>}
//             {formData.passport?.number && (
//               <>
//                 <p>Passport: {formData.passport.number}</p>
//                 {formData.passport.issueDate && (
//                   <p>Issue Date: {formData.passport.issueDate}</p>
//                 )}
//                 {formData.passport.expiryDate && (
//                   <p>Expiry Date: {formData.passport.expiryDate}</p>
//                 )}
//                 {formData.passport.placeOfIssue && (
//                   <p>Place of Issue: {formData.passport.placeOfIssue}</p>
//                 )}
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Template5;

import React from "react";

function Template5({ formData }) {
  return (
    <div className="min-h-[297mm] w-[210mm] bg-white flex shadow-lg font-sans">
      {/* Sidebar */}
      <div className="w-1/3 p-6" style={{ backgroundColor: "#f3f4f6" }}>
        {formData.name && (
          <h1 className="text-2xl font-bold mb-4" style={{ color: "#1f2937" }}>
            {formData.name}
          </h1>
        )}
        {(formData.email ||
          formData.phone ||
          formData.address ||
          formData.linkedin) && (
          <div className="mb-6">
            <h2
              className="text-lg font-semibold mb-2"
              style={{ color: "#1f2937" }}
            >
              Contact
            </h2>
            {formData.email && (
              <p style={{ color: "#374151" }}>{formData.email}</p>
            )}
            {formData.phone && (
              <p style={{ color: "#374151" }}>{formData.phone}</p>
            )}
            {formData.address && (
              <p style={{ color: "#374151" }}>{formData.address}</p>
            )}
            {formData.linkedin && (
              <p>
                <a
                  href={formData.linkedin}
                  className="underline"
                  style={{ color: "#2563eb" }}
                >
                  LinkedIn
                </a>
              </p>
            )}
          </div>
        )}
        {formData.skills.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-lg font-semibold mb-2"
              style={{ color: "#1f2937" }}
            >
              Technical Skills
            </h2>
            <ul className="list-none">
              {formData.skills.map((skill, index) => (
                <li key={index} className="mb-1" style={{ color: "#374151" }}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
        {formData.languages.length > 0 && (
          <div>
            <h2
              className="text-lg font-semibold mb-2"
              style={{ color: "#1f2937" }}
            >
              Languages
            </h2>
            <ul className="list-none">
              {formData.languages.map((language, index) => (
                <li key={index} className="mb-1" style={{ color: "#374151" }}>
                  {language}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Main Content */}
      <div className="w-2/3 p-6">
        {formData.objective && (
          <div className="mb-6">
            <h2
              className="text-xl font-semibold border-b-2 pb-1 mb-2"
              style={{ color: "#1f2937", borderColor: "#1f2937" }}
            >
              Profile Summary
            </h2>
            <p style={{ color: "#374151" }}>{formData.objective}</p>
          </div>
        )}
        {formData.education.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-xl font-semibold border-b-2 pb-1 mb-2"
              style={{ color: "#1f2937", borderColor: "#1f2937" }}
            >
              Education
            </h2>
            {formData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <p className="font-medium" style={{ color: "#374151" }}>
                  {edu.institution}
                </p>
                <p style={{ color: "#4b5563" }}>{edu.degree}</p>
                <p style={{ color: "#4b5563" }}>{edu.year}</p>
                {edu.cgpa && (
                  <p style={{ color: "#4b5563" }}>CGPA: {edu.cgpa}</p>
                )}
              </div>
            ))}
          </div>
        )}
        {formData.experience.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-xl font-semibold border-b-2 pb-1 mb-2"
              style={{ color: "#1f2937", borderColor: "#1f2937" }}
            >
              Experience
            </h2>
            {formData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <p className="font-medium" style={{ color: "#374151" }}>
                  {exp.company}
                </p>
                <p style={{ color: "#4b5563" }}>{exp.role}</p>
                <p style={{ color: "#4b5563" }}>{exp.duration}</p>
                {exp.description && (
                  <p style={{ color: "#4b5563" }}>{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
        {formData.projects.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-xl font-semibold border-b-2 pb-1 mb-2"
              style={{ color: "#1f2937", borderColor: "#1f2937" }}
            >
              Projects
            </h2>
            {formData.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <p className="font-medium" style={{ color: "#374151" }}>
                  {project.name}
                </p>
                {project.technologies && (
                  <p style={{ color: "#4b5563" }}>
                    Technologies: {project.technologies}
                  </p>
                )}
                {project.date && (
                  <p style={{ color: "#4b5563" }}>Date: {project.date}</p>
                )}
                {project.description && (
                  <p style={{ color: "#4b5563" }}>{project.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
        {(formData.dateOfBirth ||
          formData.maritalStatus ||
          formData.nationality ||
          formData.passport?.number) && (
          <div>
            <h2
              className="text-xl font-semibold border-b-2 pb-1 mb-2"
              style={{ color: "#1f2937", borderColor: "#1f2937" }}
            >
              Personal Details
            </h2>
            {formData.dateOfBirth && (
              <p style={{ color: "#4b5563" }}>
                Date of Birth: {formData.dateOfBirth}
              </p>
            )}
            {formData.maritalStatus && (
              <p style={{ color: "#4b5563" }}>
                Marital Status: {formData.maritalStatus}
              </p>
            )}
            {formData.nationality && (
              <p style={{ color: "#4b5563" }}>
                Nationality: {formData.nationality}
              </p>
            )}
            {formData.passport?.number && (
              <>
                <p style={{ color: "#4b5563" }}>
                  Passport: {formData.passport.number}
                </p>
                {formData.passport.issueDate && (
                  <p style={{ color: "#4b5563" }}>
                    Issue Date: {formData.passport.issueDate}
                  </p>
                )}
                {formData.passport.expiryDate && (
                  <p style={{ color: "#4b5563" }}>
                    Expiry Date: {formData.passport.expiryDate}
                  </p>
                )}
                {formData.passport.placeOfIssue && (
                  <p style={{ color: "#4b5563" }}>
                    Place of Issue: {formData.passport.placeOfIssue}
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Template5;
