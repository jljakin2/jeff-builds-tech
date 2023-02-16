import React from "react";

export default function Hamburger({ size }: { size: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 6H21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 18H21" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
