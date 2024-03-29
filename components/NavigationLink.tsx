import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Component({ link }) {
  const router = useRouter();

  const activeClass =
    router.asPath == link.href || router.asPath + "/" == link.href
      ? "border-kg-yellow"
      : "border-transparent";

  return (
    <>
      <Link href={link.href}>
        <a
          className={`hidden px-4 py-3 text-base font-medium transition border-t-2 hover:border-kg-yellow text-kg-brown md:block focus:outline-none hover:bg-kg-yellow/5 ${activeClass}`}
        >
          {link.text}
        </a>
      </Link>
      <div className="md:hidden">
        <Link href={link.href}>
          <a className="text-base font-medium text-gray-900 hover:text-gray-700">
            {link.text}
          </a>
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
