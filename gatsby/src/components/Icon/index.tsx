import * as React from "react";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";

interface IconProps {
  name: "LinkedIn" | "Github" | "Twitter";
  size:
    | "12"
    | "14"
    | "16"
    | "18"
    | "20"
    | "24"
    | "28"
    | "36"
    | "40"
    | "48"
    | "60"
    | "72"
    | "80";
}

export default function Icon(props: IconProps) {
  const { name, size } = props;

  switch (name) {
    case "LinkedIn":
      return <LinkedIn size={size} />;
    case "Github":
      return <Github size={size} />;
    case "Twitter":
      return <Twitter size={size} />;
    default:
      return <p>default</p>;
  }
}
