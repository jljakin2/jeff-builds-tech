import { Link } from "gatsby";
import React from "react";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">Logo</Link>
      </li>
      <li>
        <Link to="/">FAQ</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}
