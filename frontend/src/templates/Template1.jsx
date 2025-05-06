// import React from "react";

// function Template1({ formData }) {
//   return (
//     <div className="flex min-h-[297mm] w-[210mm] shadow-lg">
//       {/* Sidebar */}
//       <div className="w-1/3 p-6 flex flex-col justify-between bg-[#163853] text-white">
//         <div>
//           <h2 className="text-xl font-bold mb-4">{formData.name}</h2>
//           {formData.phone ||
//           formData.email ||
//           formData.address ||
//           formData.linkedin ? (
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-2">Contact</h3>
//               {formData.phone && <p>{formData.phone}</p>}
//               {formData.email && <p>{formData.email}</p>}
//               {formData.address && <p>{formData.address}</p>}
//               {formData.linkedin && <p>{formData.linkedin}</p>}
//             </div>
//           ) : null}
//           {formData.dateOfBirth ||
//           formData.maritalStatus ||
//           formData.nationality ||
//           formData.passport?.number ? (
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
//               {formData.dateOfBirth && (
//                 <p>Date of Birth: {formData.dateOfBirth}</p>
//               )}
//               {formData.maritalStatus && (
//                 <p>Marital Status: {formData.maritalStatus}</p>
//               )}
//               {formData.nationality && (
//                 <p>Nationality: {formData.nationality}</p>
//               )}
//               {formData.passport?.number && (
//                 <>
//                   <p>Passport: {formData.passport.number}</p>
//                   {formData.passport.issueDate && (
//                     <p>Issue Date: {formData.passport.issueDate}</p>
//                   )}
//                   {formData.passport.expiryDate && (
//                     <p>Expiry Date: {formData.passport.expiryDate}</p>
//                   )}
//                   {formData.passport.placeOfIssue && (
//                     <p>Place of Issue: {formData.passport.placeOfIssue}</p>
//                   )}
//                 </>
//               )}
//             </div>
//           ) : null}
//           {formData.skills.length > 0 && (
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-2">Skills</h3>
//               <ul className="list-disc pl-5">
//                 {formData.skills.map((skill, index) => (
//                   <li key={index}>{skill}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {formData.languages.length > 0 && (
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Languages</h3>
//               <ul className="list-disc pl-5">
//                 {formData.languages.map((language, index) => (
//                   <li key={index}>{language}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//       {/* Main Content */}
//       <div className="w-2/3 p-6 bg-white">
//         {formData.objective && (
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-2">Objective</h3>
//             <p>{formData.objective}</p>
//           </div>
//         )}
//         {formData.experience.length > 0 && (
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
//             {formData.experience.map((exp, index) => (
//               <div key={index} className="mb-4">
//                 <p className="font-medium">{exp.company}</p>
//                 <p>{exp.role}</p>
//                 <p>{exp.duration}</p>
//                 <p>{exp.description}</p>
//               </div>
//             ))}
//           </div>
//         )}
//         {formData.projects.length > 0 && (
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-2">Projects</h3>
//             {formData.projects.map((project, index) => (
//               <div key={index} className="mb-4">
//                 <p className="font-medium">{project.name}</p>
//                 <p>Technologies: {project.technologies}</p>
//                 <p>Date: {project.date}</p>
//                 <p>{project.description}</p>
//               </div>
//             ))}
//           </div>
//         )}
//         {formData.education.length > 0 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Education</h3>
//             {formData.education.map((edu, index) => (
//               <div key={index} className="mb-4">
//                 <p className="font-medium">{edu.institution}</p>
//                 <p>{edu.degree}</p>
//                 <p>{edu.year}</p>
//                 <p>CGPA: {edu.cgpa}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Template1;

import React from "react";

function Template1({ formData }) {
  return (
    <div className="flex min-h-[297mm] w-[210mm] shadow-lg">
      {/* Sidebar */}
      <div className="w-1/3 p-6 flex flex-col justify-between bg-[#163853] text-white">
        <div>
          {formData.name && (
            <h2 className="text-xl font-bold mb-4">{formData.name}</h2>
          )}
          {(formData.phone ||
            formData.email ||
            formData.address ||
            formData.linkedin) && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              {formData.phone && <p>{formData.phone}</p>}
              {formData.email && <p>{formData.email}</p>}
              {formData.address && <p>{formData.address}</p>}
              {formData.linkedin && <p>{formData.linkedin}</p>}
            </div>
          )}
          {(formData.dateOfBirth ||
            formData.maritalStatus ||
            formData.nationality ||
            formData.passport?.number) && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
              {formData.dateOfBirth && (
                <p>Date of Birth: {formData.dateOfBirth}</p>
              )}
              {formData.maritalStatus && (
                <p>Marital Status: {formData.maritalStatus}</p>
              )}
              {formData.nationality && (
                <p>Nationality: {formData.nationality}</p>
              )}
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
          {formData.skills.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <ul className="list-disc pl-5">
                {formData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          {formData.languages.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Languages</h3>
              <ul className="list-disc pl-5">
                {formData.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Main Content */}
      <div className="w-2/3 p-6 bg-white">
        {formData.objective && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Objective</h3>
            <p>{formData.objective}</p>
          </div>
        )}
        {formData.experience.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
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
        {/* {formData.projects.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Projects</h3>
            {formData.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <p className="font-medium">{project.name}</p>
                <p>Technologies: {project.technologies}</p>
                <p>Date: {project.date}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )} */}
        {formData.projects && formData.projects.some((p) => p.name?.trim()) && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Projects</h3>
            {formData.projects.map(
              (project, index) =>
                project.name?.trim() && (
                  <div key={index} className="mb-4">
                    <p className="font-medium">{project.name}</p>
                    {project.technologies && (
                      <p>Technologies: {project.technologies}</p>
                    )}
                    {project.date && <p>Date: {project.date}</p>}
                    {project.description && <p>{project.description}</p>}
                  </div>
                )
            )}
          </div>
        )}

        {formData.education.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
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
      </div>
    </div>
  );
}

export default Template1;
