"use client";

export default function ProgressBar({ step = 1, total = 2 }) {
  const progressPercent = ((step - 1) / (total - 1)) * 100;

  return (
    <div className="w-full flex items-center justify-center mb-4">
      <div className="relative w-[140px] flex items-center">
        {/* Background line */}
        <div className="absolute left-0 right-0 h-[3px] bg-gray-300 rounded-full" />

        {/* Active line */}
        <div
          className="absolute left-0 h-[3px] bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />

        {/* Step 1 */}
        <div className="relative z-10 w-5 h-5 rounded-full bg-blue-600" />

        {/* Spacer */}
        <div className="flex-1" />

        {/* Step 2 */}
        <div
          className={`relative z-10 w-5 h-5 rounded-full transition-all duration-300 ${
            step === 2
              ? "bg-blue-600"
              : "bg-white border-2 border-blue-600"
          }`}
        />
      </div>
    </div>
  );
}
