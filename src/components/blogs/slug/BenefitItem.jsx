import { HiCheckCircle } from "react-icons/hi";

export default function BenefitItem({ title, children }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <HiCheckCircle
        className="mt-1 flex-shrink-0"
        style={{ color: "#22C55E", fontSize: "18px" }}
      />

      <div>
        {/* Title is safe as <p> because it's plain text */}
        <p className="text-sm font-semibold text-[#0B0B0B]">
          {title}
        </p>

        {/* MUST be div, not p */}
        <div className="text-sm leading-6 text-[#4B5563] mt-1">
          {children}
        </div>
      </div>
    </div>
  );
}
