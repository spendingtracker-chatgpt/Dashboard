import React from "react";
import { FiMenu } from "react-icons/fi";
import { FaSearch, FaBell } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideNavbar from "../SideNavbar";

const ContentTop = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <button
                type="button"
                className="flex items-center mr-3"
                onClick={() => {}}
              >
                <FiMenu size={20} />
              </button>
              <Disclosure.Panel>
                <SideNavbar />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <h3 className="text-white text-lg font-semibold">Home</h3>
      </div>
      <div className="flex">
        <button type="button" className="search-btn ml-4">
          <FaSearch size={20} />
        </button>
        <button className="notification-btn ml-4">
          <FaBell size={20} />
          <span className="notification-btn-dot"></span>
        </button>
      </div>
    </div>
  );
};

export default ContentTop;
