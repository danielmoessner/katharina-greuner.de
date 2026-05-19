import PropTypes from "prop-types";
import Link from "next/link";
import ChildrenData from "../types/ChildrenData";

function Button({
  // element
  element = "Link",
  // attrs
  href = "#",
  target = "_self",
  type = "submit",
  // style
  secondary = false,
  // size
  size = "px-8 py-2 text-sm",
  // color
  color = null,
  // ring
  ring = "focus:outline-none",
  ringOffset = "",
  // className
  className = null,
  // other
  children,
}) {
  let bColor = "";
  if (secondary) {
    bColor =
      color ||
      "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500";
  } else {
    bColor =
      color ||
      "text-kg-brown bg-transparent uppercase tracking-wide box-border hover:bg-[rgb(255,249,232)] hover:ring-1 hover:ring-kg-yellow focus:ring-offset-1";
  }

  const bClassName =
    className ||
    `transition whitespace-pre inline-flex items-center border-3 bg-white border-kg-yellow font-medium shadow-sm ${ring} ${ringOffset} ${size} ${bColor}`;

  return (
    <div>
      {element === "Link" ? (
        <Link href={href} className={bClassName}>
          {children}
        </Link>
      ) : element === "button" ? (
        <button
          className={bClassName}
          type={type as "button" | "reset" | "submit"}
        >
          <span className="w-full">{children}</span>
        </button>
      ) : element === "a" ? (
        <a className={bClassName} href={href} target={target}>
          <span className="w-full">{children}</span>
        </a>
      ) : (
        <span className={bClassName}>
          <span className="w-full">{children}</span>
        </span>
      )}
    </div>
  );
}

Button.propTypes = {
  // element
  element: PropTypes.oneOf(["a", "button", "Link"]),
  // attrs
  href: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  // style
  // style: PropTypes.oneOf(["primary", "secondary"]),
  secondary: PropTypes.bool,
  // size
  size: PropTypes.string,
  // color
  color: PropTypes.string,
  // ring
  ring: PropTypes.string,
  ringOffset: PropTypes.string,
  // classname
  className: PropTypes.string,
  // other
  children: ChildrenData.isRequired,
};

export default Button;
