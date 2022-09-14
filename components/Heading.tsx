import React from "react";
import PropTypes from "prop-types";
import ChildrenData from "../types/ChildrenData";

function Heading({ element, size, color, children, classes }) {
  const Tag = element;

  let allClasses = classes;
  if (size === "h1") {
    allClasses = `inline-block text-center text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl lg:pb-8 lg:px-8 ${classes} ${color}`;
  } else if (size === "h2") {
    allClasses = `text-3xl font-light tracking-tight sm:text-4xl ${classes} ${color}`;
  } else if (size === "h3") {
    allClasses = `text-2xl font-light ${color}`;
  }

  return (
    <Tag className={allClasses}>
      {children}
      {size === "h1" && (
        <div className="w-[33.3%] h-1 mx-auto mt-6 bg-kg-yellow"></div>
      )}
    </Tag>
  );
}

Heading.defaultProps = {
  element: "h2",
  size: "h2",
  color: "text-kg-brown",
  classes: "",
};

Heading.propTypes = {
  element: PropTypes.string,
  size: PropTypes.oneOf(["h1", "h2", "h3"]),
  color: PropTypes.string,
  classes: PropTypes.string,
  children: ChildrenData.isRequired,
};

export default Heading;
