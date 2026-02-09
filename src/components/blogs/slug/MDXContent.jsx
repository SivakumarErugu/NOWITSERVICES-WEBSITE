import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import Callout from "./Callout";
import BenefitItem from "./BenefitItem";
import Takeaways from "./Takeaways";
import Highlight from "./Highlight";

const components = {
  h1: (props) => (
    <h1 className="text-4xl font-bold mt-6 mb-4" style={{ color: "#0B0B0B" }} {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: "#1F2937" }} {...props} />
  ),
  h3: (props) => (
    <h3 className="text-lg font-semibold mt-6 mb-3" style={{ color: "#1F2937" }} {...props} />
  ),
  p: (props) => (
    <p className="text-base leading-7 mb-4" style={{ color: "#4B5563" }} {...props} />
  ),
  strong: (props) => (
    <strong className="font-semibold" style={{ color: "#0B0B0B" }} {...props} />
  ),
  hr: () => (
    <hr className="my-10" style={{ borderTop: "1px solid #E5E7EB" }} />
  ),
  ul: (props) => (
    <ul className="pl-6 space-y-2" style={{ color: "#4B5563" }} {...props} />
  ),
  li: (props) => (
    <li className="leading-relaxed list-disc" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-8 px-4 py-4"
      style={{
        borderLeft: "4px solid #2563EB",
        backgroundColor: "#EFF6FF",
        color: "#374151",
      }}
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="px-1.5 py-0.5 rounded text-sm"
      style={{ backgroundColor: "#F3F4F6", color: "#BE185D" }}
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="p-4 rounded-lg overflow-x-auto my-6 text-sm"
      style={{ backgroundColor: "#111827", color: "#F9FAFB" }}
      {...props}
    />
  ),

  // ADD THESE
  Callout,
  BenefitItem,
  Takeaways,
  Highlight,

};

export default function MDXContent({ source }) {
  return (
    <div className="max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
