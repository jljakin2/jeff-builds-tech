import React from "react";
import { Link as GatsbyLink } from "gatsby";

const SmoothScrollLink = ({ to, children, ...props }: any) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    const target = document.getElementById("contact-me");

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    } else {
      window.location.href = to;
    }
  };

  return (
    <GatsbyLink to={to} onClick={handleClick} {...props}>
      {children}
    </GatsbyLink>
  );
};

export default SmoothScrollLink;
