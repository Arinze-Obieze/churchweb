import React from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ onMobileMenuToggle }) => {
  return (
    <nav
      className="mx-auto flex bg-[#000033]  items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link to="#" className="-m-1.5 p-1.5 ">
          <span className="sr-only">VRealm</span>
          <img className="h-10 w-auto rounded-xl" src="/logo.jpg" alt="Logo" />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex text-white items-center justify-center rounded-md p-2.5 "
          onClick={onMobileMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <IoMenu className="text-3xl" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="/" className="text-sm font-semibold leading-6 text-white">
          HOME
        </a>
        <a
          href="/about-me"
          className="text-sm font-semibold leading-6 text-white"
        >
          ABOUT ME
        </a>
        <a
          href="/beliefs"
          className="text-sm font-semibold leading-6 text-white"
        >
          BELIEFS
        </a>
        <a
          href="/ministries"
          className="text-sm font-semibold leading-6 text-white"
        >
          MINISTRIES
        </a>
        <a
          href="rrtv-network"
          className="text-sm font-semibold leading-6 text-white"
        >
          THE RRTV NETWORK
        </a>
        <a
          href="/livestreams"
          className="text-sm font-semibold leading-6 text-white"
        >
          LIVESTREAMS
        </a>
        <a
          href="/events"
          className="text-sm font-semibold leading-6 text-white"
        >
          EVENTS
        </a>
        <a
          href="/partner"
          className="text-sm font-semibold leading-6 text-white"
        >
          PARTNER
        </a>
        <a
          href="/contact"
          className="text-sm font-semibold leading-6 text-white"
        >
          CONTACT ME
        </a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="/book-me"
          className="text-sm font-semibold leading-6 text-white"
        >
          BOOK ME <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
