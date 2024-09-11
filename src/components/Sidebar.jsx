import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isMediaMenuOpen, setIsMediaMenuOpen] = useState(false);

  const handleAboutMenuToggle = () => {
    setIsAboutMenuOpen(!isAboutMenuOpen);
  };
  const handleMediaMenuToggle = () => {
    setIsMediaMenuOpen(!isMediaMenuOpen);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-10 lg:hidden">
        <div
          className="fixed inset-0 z-10 bg-[#000033] opacity-90"
          onClick={onClose}
        ></div>
        <div className="fixed inset-0 z-20 flex flex-col bg-[#000033] text-white px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">VRealm</span>
              <img
                className="h-10 rounded-md w-auto"
                src="/logo.jpg"
                alt="Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={onClose}
            >
              <span className="sr-only">Close menu</span>
              <IoClose className="text-3xl" />
            </button>
          </div>
          <div className="mt-6 overflow-y-auto">
            <div className="space-y-6">
              <a
                href="/"
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7
                 text-white hover:bg-gray-50 hover:text-[#000033]"
              >
                HOME
              </a>

              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg 
                  py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white 
                  hover:bg-gray-50 hover:text-[#000033]"
                  onClick={handleAboutMenuToggle}
                >
                  ABOUT
                  <FaAngleDown />
                </button>
                {isAboutMenuOpen && (
                  <div className="mt-2 space-y-2">
                    <a
                      href="/about-me"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold
                       leading-7 text-white hover:bg-gray-50 hover:text-[#000033]"
                    >
                      ABOUT ME
                    </a>
                    <a
                      href="/beliefs"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold
                       leading-7 text-white hover:bg-gray-50 hover:text-[#000033]"
                    >
                      BELIEFS
                    </a>
                    <a
                      href="/ministries"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold
                       leading-7 text-white hover:bg-gray-50 hover:text-[#000033]"
                    >
                      MINISTRIES
                    </a>
                  </div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base 
                  font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#000033]"
                  onClick={handleMediaMenuToggle}
                >
                  MEDIA
                  <FaAngleDown />
                </button>
                {isMediaMenuOpen && (
                  <div className="mt-2 space-y-2">
                    <a
                      href="/rrtv-network"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold
       leading-7 text-white hover:bg-gray-50 hover:text-[#000033]"
                    >
                      RRTV NETWORK
                    </a>
                    <a
                      href="/gallery"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold
       leading-7 text-white hover:bg-gray-50 hover:text-[#000033]"
                    >
                      GALLERY
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/events"
                className="block rounded-lg px-3 py-2 text-base font-semibold 
                leading-7 text-white hover:bg-gray-50 hover:text-[#000033]"
              >
                EVENTS
              </a>
              <a
                href="/partner"
                className="block rounded-lg px-3 py-2 text-base font-semibold
                 leading-7 text-white hover:bg-gray-50
                 hover:text-[#000033]"
              >
                PARTNER
              </a>
              <a
                href="/contact"
                className="block rounded-lg px-3 py-2 text-base font-semibold 
                leading-7 text-white hover:bg-gray-50 hover:text-[#000033]"
              >
                CONTACT ME
              </a>
            </div>
            <div className="pt-6">
              <a
                href="/book-me"
                className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7
                 text-white hover:bg-gray-50 hover:text-[#000033]"
              >
                BOOK ME
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
