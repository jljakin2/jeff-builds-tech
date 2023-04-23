import * as React from "react";
import Github from "./Github";
import Hamburger from "./Hamburger";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";
import Check from "./Check";
import Calendar from "./Calendar";
import Clock from "./Clock";
import Search from "./Search";
import Live from "./Live";
import Copy from "./Copy";

interface IconProps {
  name:
    | "LinkedIn"
    | "Github"
    | "Twitter"
    | "Hamburger"
    | "Check"
    | "Calendar"
    | "Clock"
    | "Search"
    | "Live"
    | "Copy";
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
    case "Hamburger":
      return <Hamburger size={size} />;
    case "Check":
      return <Check size={size} />;
    case "Calendar":
      return <Calendar size={size} />;
    case "Clock":
      return <Clock size={size} />;
    case "Search":
      return <Search size={size} />;
    case "Live":
      return <Live size={size} />;
    case "Copy":
      return <Copy size={size} />;
    default:
      return <p>default</p>;
  }
}
