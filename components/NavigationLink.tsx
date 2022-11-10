import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "gatsby";
import Link from "next/link";
import { useRouter } from "next/router";
// import { Transition } from '@headlessui/react';

function Component({ link }) {
  const router = useRouter();

  // const activeClass =
  //   router.asPath == link.url || router.asPath + "/" == link.url
  //     ? "border-kg-yellow"
  //     : "border-transparent";
  const activeClass = "todo";

  return (
    <>
      <Link href={link.url}>
        <a
          className={`hidden px-4 py-3 text-base font-medium transition border-t-2 hover:border-kg-yellow text-kg-brown md:block focus:outline-none hover:bg-kg-yellow/5 ${activeClass}`}
        >
          {link.text}
        </a>
      </Link>
      <div className="md:hidden">
        <Link href={link.url}>
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
