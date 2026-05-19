import React from "react";
import PropTypes from "prop-types";
import ChildrenData from "../types/ChildrenData";

interface ComponentProps {
  element?: any;
  children: React.ReactNode;
  color?: string;
}

function Component({ element: Tag = "div", children, color = "text-gray-700" }: ComponentProps) {
  return (
    <Tag
      className={`text-base font-semibold tracking-wider uppercase ${color}`}
    >
      {children}
    </Tag>
  );
}

Component.propTypes = {
  element: PropTypes.string,
  color: PropTypes.string,
  children: ChildrenData.isRequired,
};

export default Component;
