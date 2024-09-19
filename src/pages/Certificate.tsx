import React, { useRef } from "react";
import { certificateImg } from "@/utils";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";

const Certificate = () => {
  const certificateRef = useRef(null);

  const downloadPdf = async () => {
    // Hide the download button while capturing the screenshot
    const downloadButton = document.getElementById("downloadButton");
    downloadButton.style.display = "none";

    // Capture the certificate as an image
    const canvas = await html2canvas(certificateRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Create a new jsPDF instance with landscape orientation
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    // Add the captured image to the PDF
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

    // Save the PDF
    pdf.save("certificate.pdf");

    // Show the download button again after the PDF is saved
    downloadButton.style.display = "block";
  };

  return (
    <div className="flex items-center justify-center flex-col">
      {/* Certificate content */}
      <div
        ref={certificateRef}
        className="relative flex justify-center items-center"
        style={{ width: "842px", height: "595px" }} // A4 size in pixels at 72dpi
      >
        <img
          src={certificateImg}
          alt="certificate img"
          className="w-full h-full object-contain"
        />

        <div className="absolute w-full h-full flex flex-col items-center justify-center">
          {/* Certificate details */}
          <Link
            to="/"
            className="certify_style text-base italic uppercase absolute top-3 right-44"
          >
            Act-1702
          </Link>

          <div className="flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center w-screen">
              <h3 className="namestyle text-6xl text-[#05347e]">
                Sufiyan Shiakh
              </h3>
            </div>

            <div className="absolute flex items-center justify-center bottom-[295px]">
              <p className="certify_style text-2xl font-bold italic">
                Python Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Download button */}
      <button
        id="downloadButton"
        onClick={downloadPdf}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Download PDF
      </button>
    </div>
  );
};

export default Certificate;
