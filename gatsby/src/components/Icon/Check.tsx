import React from "react";

export default function Check({ size }: { size: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 6L9 17L4 12"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
