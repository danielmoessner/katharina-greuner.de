import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Component({ link }) {
  const router = useRouter();

  const normalizePath = (path: string) => {
    const cleanPath = path.split("?")[0].split("#")[0] || "/";
    if (cleanPath === "/") return "/";

    return cleanPath.endsWith("/") ? cleanPath.slice(0, -1) : cleanPath;
  };

  const isActive = normalizePath(router.asPath) === normalizePath(link.href);

  const activeClass =
    isActive ? "border-kg-yellow bg-kg-yellow/5" : "border-transparent";

  return (
    <>
      <Link
        href={link.href}
        className={`hidden px-4 py-3 text-base font-medium transition border-t-2 hover:border-kg-yellow text-kg-brown md:block focus:outline-none hover:bg-kg-yellow/5 ${activeClass}`}
      >
        {link.text}
      </Link>
      <div className="md:hidden">
        <Link
          href={link.href}
          className="text-base font-medium text-gray-900 hover:text-gray-700"
        >
          {link.text}
        </Link>
      </div>
    </>
  );
}

// Component.defaultProps = {};

// Component.propTypes = {
//   link: PropTypes.shape({
//     url: PropTypes.string,
//     text: PropTypes.string,
//   }).isRequired,
// };

export default Component;
