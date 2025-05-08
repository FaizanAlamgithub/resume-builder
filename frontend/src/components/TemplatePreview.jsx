import React from "react";

function TemplatePreview({ setSelectedTemplate, navigate, onPrev }) {
  const templates = [
    { id: 1, name: "Template 1", image: "/images/template1.jpg" },
    { id: 2, name: "Template 2", image: "/images/template2.jpg" },
    { id: 3, name: "Template 3", image: "/images/template3.jpg" },
    { id: 4, name: "Template 4", image: "/images/template4.jpg" },
    { id: 5, name: "Template 5", image: "/images/template5.jpg" },
    { id: 6, name: "Template 6", image: "/images/template6.jpg" },
    { id: 7, name: "Template 7", image: "/images/template7.jpg" },
    { id: 8, name: "Template 8", image: "/images/template8.jpg" },
    { id: 9, name: "Template 9", image: "/images/template9.jpg" },
  ];

  const handleSelect = (templateId) => {
    setSelectedTemplate(templateId);
    localStorage.setItem("selectedTemplate", templateId);
    navigate("/preview");
  };

  return (
    <div className="py-8 px-4">
      <div className="flex justify-end mb-4">
        <button
          type="button"
          onClick={onPrev}
          className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
        >
          Prev
        </button>
      </div>
      <h2 className="text-3xl font-bold mb-6 text-center">
        Choose a Resume Template
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {templates.map((template) => (
          <div
            key={template.id}
            className="template-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow w-[237px] h-[350px]"
            onClick={() => handleSelect(template.id)}
          >
            <img
              src={template.image}
              alt={`${template.name} preview`}
              className=" object-cover w-[237px] h-[350px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplatePreview;

// import React from "react";

// function TemplatePreview({ setSelectedTemplate, navigate, onPrev }) {
//   const templates = [
//     {
//       id: "1",
//       image: "./images/template1.jpg",
//     },
//     {
//       id: "2",
//       image: "./images/template2.jpg",
//     },
//     {
//       id: "3",
//       image: "./images/template3.jpg",
//     },
//   ];

//   const handleSelect = (templateId) => {
//     setSelectedTemplate(templateId);
//     navigate("/preview");
//   };

//   return (
//     <div className="py-8 px-4">
//       {/* Right-aligned small button */}
//       <div className="flex justify-end mb-4">
//         <button
//           type="button"
//           onClick={onPrev}
//           className="w-50 bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
//         >
//           Prev
//         </button>
//       </div>

//       {/* Centered templates on mobile */}
//       <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
//         {templates.map((template) => (
//           <div
//             key={template.id}
//             className="template-card rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow w-[237px] h-[350px]"
//             onClick={() => handleSelect(template.id)}
//           >
//             <img
//               src={template.image}
//               alt={`Template ${template.id} preview`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TemplatePreview;
