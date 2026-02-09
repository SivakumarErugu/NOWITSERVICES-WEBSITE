import React from "react";

export default function Highlight({ children, variant = "info" }) {
  const variants = {
    info: {
      border: "#2563EB",
      bg: "#EFF6FF",
      text: "#1E3A8A",
    },
    success: {
      border: "#16A34A",
      bg: "#ECFDF5",
      text: "#065F46",
    },
    warning: {
      border: "#D97706",
      bg: "#FFFBEB",
      text: "#92400E",
    },
    danger: {
      border: "#DC2626",
      bg: "#FEF2F2",
      text: "#7F1D1D",
    },
  };

  const style = variants[variant] || variants.info;

  return (
    <div
      className="my-6 px-4 py-3 rounded-lg"
      style={{
        // borderLeft: `4px solid ${style.border}`,
        backgroundColor: style.bg,
        color: style.text,
      }}
    >
      {children}
    </div>
  );
}
