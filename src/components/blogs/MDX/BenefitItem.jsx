import { HiCheckCircle } from "react-icons/hi";

export default function BenefitItem({ title, children }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <HiCheckCircle
        className="mt-1 flex-shrink-0"
        style={{ color: "#22C55E", fontSize: "18px" }}
      />

      <div>
        <p className="text-sm font-semibold text-[#0B0B0B]">
          {title}
        </p>
        <p className="text-sm leading-6 text-[#4B5563] mt-1">
          {children}
        </p>
      </div>
    </div>
  );
}
