import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SideMenu from "./SideMenu";

const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Initialize with current width

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const Small = () => {
        return (
            <div>
                {/* Toggle button */}
                {!isMenuOpen ? (
                    <AiOutlineMenu color="white" size={25} onClick={handleMenuToggle} />
                ) : (
                    <AiOutlineClose
                        color="white"
                        size={25}
                        onClick={handleMenuToggle}
                        className="absolute right-[90px]"
                    />
                )}

                <SideMenu isOpen={isMenuOpen} />
            </div>
        );
    };
    const Big = () => {
        return (
            <div>
                <nav className="text-white flex justify-between">
                    <h1 className="cursor-pointer ">HOME</h1>

                    <div>                    <h1 className="cursor-pointer ">ABOUT</h1>
                    </div>

                    <div className="relative group ">
                        <h3 className="cursor-pointer">DAVID</h3>
                        <ul className="absolute hidden mt-2 bg-black shadow-lg group-hover:block">
                            <li><a href="#" className="block px-4 py-2 text-white">STEVEN</a></li>
                            <li><a href="#" className="block px-4 py-2 text-white">BELIEFS</a></li>
                            <li><a href="#" className="block px-4 py-2 text-white">MINISTRIES</a></li>
                        </ul>
                    </div>

                    <div><h1 className="cursor-pointer ">MEDIA</h1></div>

                    <div className="relative group">
                        <h3 className="cursor-pointer">THE ETV NETWORK</h3>
                        <ul className="absolute hidden mt-2 bg-white shadow-lg group-hover:block">
                            <li><a href="#" className="block px-4 py-2 text-white">WORD AND SPIRIT</a></li>
                            <li><a href="#" className="block px-4 py-2 text-white">VIRAL REVIVAL</a></li>
                        </ul>
                    </div>

                    <h1 className="cursor-pointer ">BLOG</h1>

                    <h1 className="cursor-pointer ">EXPAND</h1>

                    <h1 className="cursor-pointer ">SHOP</h1>

                    <h1 className="cursor-pointer ">E-COURSES</h1>

                    <h1 className="cursor-pointer">EVENTS</h1>
                </nav>

            </div>
        )
    }

    return (
        <div className="bg-gray-900 py-8 flex justify-between pl-2 pr-2">
            <img src="/assets/logo.svg" alt="" />

            <div>
                {screenWidth < 768
                    ? <Small />
                    : <Big />}
            </div>
        </div>
    );

};

export default Header;
