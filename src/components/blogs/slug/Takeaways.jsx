import { HiArrowNarrowRight } from "react-icons/hi";

export default function Takeaways({ title = "Key Takeaways", items }) {
  return (
    <div
      className="my-10 rounded-xl p-6"
      style={{
        backgroundColor: "#F0FDF4",
        border: "1px solid #86EFAC",
      }}
    >
      <h4 className="text-sm font-semibold mb-4 text-[#0B0B0B]">
        {title}
      </h4>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <HiArrowNarrowRight
              className="mt-1 flex-shrink-0"
              style={{ color: "#22C55E" }}
            />
            <p className="text-sm leading-6 text-[#4B5563]">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
