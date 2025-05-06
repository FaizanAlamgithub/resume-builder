// import { useRef, useState } from "react";
// import axios from "axios";
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

//   const saveResume = async () => {
//     try {
//       const response = await axios.post("/api/resumes", formData);
//       setResumeId(response.data._id);
//       alert("Resume saved successfully! Resume ID: " + response.data._id);
//     } catch (error) {
//       console.error("Error saving resume:", error);
//       alert("Failed to save resume.");
//     }
//   };

//   const loadResume = async () => {
//     if (!loadResumeId) {
//       alert("Please enter a Resume ID.");
//       return;
//     }
//     try {
//       const response = await axios.get(`/api/resumes/${loadResumeId}`);
//       setFormData(response.data);
//       setResumeId(loadResumeId);
//       alert("Resume loaded successfully!");
//     } catch (error) {
//       console.error("Error loading resume:", error);
//       alert("Failed to load resume.");
//     }
//   };

//   const updateResume = async () => {
//     if (!resumeId) {
//       alert("Please save or load a resume first.");
//       return;
//     }
//     try {
//       const response = await axios.put(`/api/resumes/${resumeId}`, formData);
//       setFormData(response.data);
//       alert("Resume updated successfully!");
//     } catch (error) {
//       console.error("Error updating resume:", error);
//       alert("Failed to update resume.");
//     }
//   };

//   const deleteResume = async () => {
//     if (!resumeId) {
//       alert("Please save or load a resume first.");
//       return;
//     }
//     if (window.confirm("Are you sure you want to delete this resume?")) {
//       try {
//         await axios.delete(`/api/resumes/${resumeId}`);
//         setResumeId(null);
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           linkedin: "",
//           address: "",
//           dateOfBirth: "",
//           maritalStatus: "",
//           nationality: "",
//           passport: {
//             number: "",
//             issueDate: "",
//             expiryDate: "",
//             placeOfIssue: "",
//           },
//           objective: "",
//           education: [{ institution: "", degree: "", year: "", cgpa: "" }],
//           experience: [
//             { company: "", role: "", duration: "", description: "" },
//           ],
//           skills: [""],
//           projects: [{ name: "", technologies: "", date: "", description: "" }],
//           languages: [""],
//         });
//         alert("Resume deleted successfully!");
//       } catch (error) {
//         console.error("Error deleting resume:", error);
//         alert("Failed to delete resume.");
//       }
//     }
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
//         {/* <input
//           type="text"
//           placeholder="Enter Resume ID to Load"
//           className="border rounded-md p-2 text-sm"
//           value={loadResumeId}
//           onChange={(e) => setLoadResumeId(e.target.value)}
//         />
//         <button
//           className="bg-green-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
//           onClick={loadResume}
//         >
//           Load Resume
//         </button>
//         <button
//           className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
//           onClick={saveResume}
//         >
//           Save Resume
//         </button>
//         <button
//           className="bg-yellow-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
//           onClick={updateResume}
//         >
//           Update Resume
//         </button>
//         <button
//           className="bg-red-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
//           onClick={deleteResume}
//         >
//           Delete Resume
//         </button> */}
//         <button
//           className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
//           onClick={printResume}
//         >
//           Print Resume
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


import { useRef, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
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
  selectedTemplate,
  onPrev,
}) {
  const resumeRef = useRef();
  const [loadResumeId, setLoadResumeId] = useState("");

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

  const SelectedTemplate = templates[selectedTemplate] || Template1;

  const saveResume = async () => {
    try {
      const response = await axios.post("/api/resumes", formData);
      setResumeId(response.data._id);
      alert("Resume saved successfully! Resume ID: " + response.data._id);
    } catch (error) {
      console.error("Error saving resume:", error);
      alert("Failed to save resume.");
    }
  };

  const loadResume = async () => {
    if (!loadResumeId) {
      alert("Please enter a Resume ID.");
      return;
    }
    try {
      const response = await axios.get(`/api/resumes/${loadResumeId}`);
      setFormData(response.data);
      setResumeId(loadResumeId);
      alert("Resume loaded successfully!");
    } catch (error) {
      console.error("Error loading resume:", error);
      alert("Failed to load resume.");
    }
  };

  const updateResume = async () => {
    if (!resumeId) {
      alert("Please save or load a resume first.");
      return;
    }
    try {
      const response = await axios.put(`/api/resumes/${resumeId}`, formData);
      setFormData(response.data);
      alert("Resume updated successfully!");
    } catch (error) {
      console.error("Error updating resume:", error);
      alert("Failed to update resume.");
    }
  };

  const deleteResume = async () => {
    if (!resumeId) {
      alert("Please save or load a resume first.");
      return;
    }
    if (window.confirm("Are you sure you want to delete this resume?")) {
      try {
        await axios.delete(`/api/resumes/${resumeId}`);
        setResumeId(null);
        setFormData({
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          address: "",
          dateOfBirth: "",
          maritalStatus: "",
          nationality: "",
          passport: {
            number: "",
            issueDate: "",
            expiryDate: "",
            placeOfIssue: "",
          },
          objective: "",
          education: [{ institution: "", degree: "", year: "", cgpa: "" }],
          experience: [{ company: "", role: "", duration: "", description: "" }],
          skills: [""],
          projects: [],
          languages: [""],
        });
        alert("Resume deleted successfully!");
      } catch (error) {
        console.error("Error deleting resume:", error);
        alert("Failed to delete resume.");
      }
    }
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

  const downloadPDF = () => {
    const input = resumeRef.current;

    // Apply temporary styles to ensure A4 sizing without margins or padding
    const originalStyle = input.style.cssText;
    input.style.cssText = `
      ${originalStyle}
      width: 210mm;
      min-height: 297mm;
      padding: 0;
      margin: 0;
      font-family: Arial, sans-serif;
      background: white;
      box-sizing: border-box;
    `;

    // Optimize scale for mobile and desktop
    const scale = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 2 : 3;

    html2canvas(input, {
      scale: scale,
      useCORS: true,
      windowWidth: 794, // Approximate A4 width in pixels at 96 DPI
      windowHeight: 1123, // Approximate A4 height in pixels at 96 DPI
      scrollX: 0,
      scrollY: 0,
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        const pageWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgWidth = pageWidth; // Full width, no margins
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        // Add first page without margins
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add additional pages if needed
        while (heightLeft >= 0) {
          pdf.addPage();
          position = heightLeft - imgHeight;
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // Set font to match template
        pdf.setFont("helvetica", "normal");

        const fileName = formData.name
          ? `${formData.name.replace(/\s+/g, "_")}_Resume.pdf`
          : "resume.pdf";

        // Handle mobile download (iOS Safari fallback)
        if (/iPhone|iPad/i.test(navigator.userAgent)) {
          const pdfBlob = pdf.output("blob");
          const url = URL.createObjectURL(pdfBlob);
          const link = document.createElement("a");
          link.href = url;
          link.download = fileName;
          link.click();
          setTimeout(() => URL.revokeObjectURL(url), 100);
        } else {
          pdf.save(fileName);
        }

        // Restore original styles
        input.style.cssText = originalStyle;
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
        alert("Failed to generate PDF.");
        // Restore original styles in case of error
        input.style.cssText = originalStyle;
      });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="mb-4 no-print flex flex-wrap gap-2 justify-start md:justify-between items-center">
        {/* <input
          type="text"
          placeholder="Enter Resume ID to Load"
          className="border rounded-md p-2 text-sm"
          value={loadResumeId}
          onChange={(e) => setLoadResumeId(e.target.value)}
        />
        <button
          className="bg-green-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
          onClick={loadResume}
        >
          Load Resume
        </button>
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
          onClick={saveResume}
        >
          Save Resume
        </button>
        <button
          className="bg-yellow-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
          onClick={updateResume}
        >
          Update Resume
        </button>
        <button
          className="bg-red-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
          onClick={deleteResume}
        >
          Delete Resume
        </button> */}
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm md:text-base"
          onClick={printResume}
        >
          Print Resume
        </button>
        <button
          className="bg-green-600 text-white rounded-md px-4 py-2 text-sm md:text-base hover:bg-green-700"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
        <button
          type="button"
          onClick={onPrev}
          className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm md:text-base hover:bg-green-700"
        >
          Prev
        </button>
      </div>

      <div ref={resumeRef} className="w-full overflow-x-auto">
        <SelectedTemplate formData={formData} />
      </div>
    </div>
  );
}

export default ResumePreview;