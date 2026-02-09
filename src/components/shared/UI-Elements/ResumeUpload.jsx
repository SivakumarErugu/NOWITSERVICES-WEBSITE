import React, { useRef } from "react";
import { ErrorMessage } from "formik";
import { TiCloudStorage } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

export default function ResumeUpload({ setFieldValue, value }) {
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    setFieldValue("resume", file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setFieldValue("resume", null);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => inputRef.current.click()}
      className={`
        cursor-pointer
        border-2 border-dashed
        rounded-lg
        px-10 py-5 h-35
        flex flex-col justify-center 
        text-center
        transition
        ${value ? "border-green-500 bg-green-50" : "border-gray-300 hover:border-green-500"}
      `}
    >
      {/* Hidden input */}
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      {/* ================= FILE SELECTED ================= */}
      {value ? (
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-full border border-green-500 text-green-600">
              <TiCloudStorage size={22} />
            </div>

            <div className="text-left">
              <p className="font-medium text-gray-800 truncate max-w-[250px]">
                {value.name}
              </p>
              <p className="text-sm text-gray-500">
                {(value.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={removeFile}
            className="text-gray-400 hover:text-red-500 hover:bg-red-100 rounded-full p-1 transition"
          >
            <IoCloseSharp size={18} />
          </button>
        </div>
      ) : (
        /* ================= EMPTY STATE ================= */
        <>
          <div className="flex justify-center mb-2">
            <div className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 text-black">
              <TiCloudStorage size={32} />
            </div>
          </div>

          <p className="text-sm md:font-medium text-gray-800">
            Drag your resume here or{" "}
            <span className="text-green-600 font-semibold">
              click to upload
            </span>
          </p>

          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Acceptable file types: PDF, DOCX (5MB max)
          </p>
        </>
      )}

      <ErrorMessage
        name="resume"
        component="p"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
}
