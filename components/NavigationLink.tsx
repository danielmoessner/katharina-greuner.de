import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "gatsby";
import Link from "next/link";
// import { Transition } from '@headlessui/react';

function Component({ link }) {
  return (
    <>
      <Link href={link.url}>
        <a className="hidden px-3 py-1 text-base font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 md:block focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-200">
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
