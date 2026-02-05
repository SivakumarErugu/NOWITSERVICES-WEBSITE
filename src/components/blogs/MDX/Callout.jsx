import { HiInformationCircle } from "react-icons/hi";

export default function Callout({ children }) {
  return (
    <div
      className="relative flex gap-4 rounded-xl border p-0"
      style={{
        backgroundColor: "#EFF6FF",
        borderColor: "#DBEAFE",
        color: "#374151",
      }}
    >
      {/* Vertical blue line (REAL element, not absolute span) */}
      <div
        className="shrink-0 rounded-full"
        style={{
          width: "4px",
          backgroundColor: "#2563EB",
        }}
      />

      {/* Icon */}
      <HiInformationCircle
        className="mt-0.5 shrink-0 text-lg"
        style={{ color: "#2563EB" }}
      />

      {/* Content */}
      <div className="text-sm leading-snug [&>*]:m-0 p-2">
        {children}
      </div>
    </div>
  );
}
