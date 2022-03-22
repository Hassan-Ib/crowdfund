import React from "react";

type Props = {
  className: string;
};

type Link = {
  name: string;
  to: string;
};

const links: Array<Link> = [
  {
    name: "about",
    to: "/",
  },
  {
    name: "Discover",
    to: "/",
  },
  {
    name: "Get Started",
    to: "/",
  },
];

const Navlinks = ({ className }: Props) => {
  return (
    <ul aria-label="page navigation links list" className={className}>
      {links.map((link, index) => (
        <li key={index}>
          {" "}
          <a href={link.to}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;
