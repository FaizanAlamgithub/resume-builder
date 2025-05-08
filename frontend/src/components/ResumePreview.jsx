// import { useRef, useState } from "react";
// import axios from "axios";
// import html2pdf from "html2pdf.js";

// import Template1 from "../templates/Template1";
// import Template2 from "../templates/Template2";
// import Template3 from "../templates/Template3";
// import Template4 from "../templates/Template4";
// import Template5 from "../templates/Template5";
// import Template6 from "../templates/Template6";
// import Template7 from "../templates/Template7";
// import Template8 from "../templates/Template8";
// import Template9 from "../templates/Template9";

// function ResumePreview({
//   formData,
//   resumeId,
//   setResumeId,
//   setFormData,
//   selectedTemplate,
//   onPrev,
// }) {
//   const resumeRef = useRef();
//   const [loadResumeId, setLoadResumeId] = useState("");

//   const templates = {
//     1: Template1,
//     2: Template2,
//     3: Template3,
//     4: Template4,
//     5: Template5,
//     6: Template6,
//     7: Template7,
//     8: Template8,
//     9: Template9,
//   };

//   const SelectedTemplate = templates[selectedTemplate] || Template1;

//   const downloadPDF = () => {
//     const element = document.querySelector(selectedTemplate);
//     html2pdf().set(opt).from(element).save();
//   };

//   const printResume = () => {
//     const resumeContent = resumeRef.current.innerHTML;
//     const printWindow = window.open("", "_blank");
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Print Resume</title>
//           <script src="https://cdn.tailwindcss.com"></script>
//           <style>
//             body { font-family: Arial, sans-serif; }
//             @page { size: A4; margin: 0; }
//             .no-print { display: none; }
//             .resume-container { width: 210mm; min-height: 297mm; margin: 0 auto; }
//           </style>
//         </head>
//         <body>
//           <div class="resume-container">
//             ${resumeContent}
//           </div>
//           <script>
//             window.onload = () => {
//               window.print();
//               window.onafterprint = () => window.close();
//             };
//           </script>
//         </body>
//       </html>
//     `);
//     printWindow.document.close();
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto px-4">
//       <div className="mb-4 no-print flex flex-wrap gap-2 justify-start md:justify-between items-center">
//         <button
//           className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
//           onClick={printResume}
//         >
//           Print Resume
//         </button>
//         <button
//           className="bg-purple-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
//           onClick={downloadPDF}
//         >
//           Download PDF
//         </button>

//         <button
//           type="button"
//           onClick={onPrev}
//           className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm md:text-base hover:bg-blue-700"
//         >
//           Prev
//         </button>
//       </div>

//       <div ref={resumeRef} className="w-full overflow-x-auto">
//         <SelectedTemplate formData={formData} />
//       </div>
//     </div>
//   );
// }

// export default ResumePreview;

import { useRef, useState, useEffect } from "react";
import html2pdf from "html2pdf.js";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";
import Template4 from "../templates/Template4";
import Template5 from "../templates/Template5";
import Template6 from "../templates/Template6";
import Template7 from "../templates/Template7";
import Template8 from "../templates/Template8";
import Template9 from "../templates/Template9";

function ResumePreview({
  formData,
  resumeId,
  setResumeId,
  setFormData,
  selectedTemplate: propSelectedTemplate,
  onPrev,
}) {
  const resumeRef = useRef();
  const [selectedTemplate, setSelectedTemplate] = useState(
    propSelectedTemplate || 1
  );

  const templates = {
    1: Template1,
    2: Template2,
    3: Template3,
    4: Template4,
    5: Template5,
    6: Template6,
    7: Template7,
    8: Template8,
    9: Template9,
  };

  // Load selectedTemplate from localStorage on mount
  useEffect(() => {
    const savedTemplate = localStorage.getItem("selectedTemplate");
    if (savedTemplate && templates[savedTemplate]) {
      setSelectedTemplate(Number(savedTemplate));
    } else if (propSelectedTemplate) {
      setSelectedTemplate(propSelectedTemplate);
    }
  }, [propSelectedTemplate]);

  // Save selectedTemplate to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("selectedTemplate", selectedTemplate);
  }, [selectedTemplate]);

  const SelectedTemplate = templates[selectedTemplate] || Template1;

  const downloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 0,
      filename: `resume-${resumeId || "preview"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: 794, // A4 width in pixels at 96 DPI (210mm)
        windowHeight: 1123, // A4 height in pixels at 96 DPI (297mm)
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true,
      },
    };

    // Clone the element to include Tailwind styles
    const clone = element.cloneNode(true);
    const style = document.createElement("style");
    style.textContent = `
      @page { size: A4; margin: 0; }
      body { margin: 0; font-family: Arial, sans-serif; }
      .resume-container { width: 210mm; min-height: 297mm; }
    `;
    clone.prepend(style);

    // Load Tailwind CSS dynamically to ensure styles are included
    const tailwindScript = document.createElement("script");
    tailwindScript.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(tailwindScript);

    html2pdf()
      .set(opt)
      .from(clone)
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        // Clean up Tailwind script
        document.head.removeChild(tailwindScript);
        pdf.save();
      });
  };

  const printResume = () => {
    const resumeContent = resumeRef.current.innerHTML;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Resume</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body { font-family: Arial, sans-serif; }
            @page { size: A4; margin: 0; }
            .no-print { display: none; }
            .resume-container { width: 210mm; min-height: 297mm; margin: 0 auto; }
          </style>
        </head>
        <body>
          <div class="resume-container">
            ${resumeContent}
          </div>
          <script>
            window.onload = () => {
              window.print();
              window.onafterprint = () => window.close();
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="mb-4 no-print flex flex-wrap gap-2 justify-start md:justify-between items-center">
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
          onClick={printResume}
        >
          Print Resume
        </button>
        <button
          className="bg-purple-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
        <button
          type="button"
          onClick={onPrev}
          className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm md:text-base hover:bg-blue-700"
        >
          Prev
        </button>
      </div>
      <div
        ref={resumeRef}
        className="resume-container w-[210mm] min-h-[297mm] mx-auto bg-white shadow-lg"
      >
        <SelectedTemplate formData={formData} />
      </div>
    </div>
  );
}

export default ResumePreview;
