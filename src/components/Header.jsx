import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SideMenu from "./SideMenu";
import { Link } from "react-router-dom";
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
            <div className="">
                {/* Toggle button */}
                {!isMenuOpen ? (
                    <AiOutlineMenu color="white" size={25} onClick={handleMenuToggle} />
                ) : (
                    <AiOutlineClose
                        color="white"
                        size={25}
                        onClick={handleMenuToggle}
                        className=" text-white relative right-[185px] ml-4 z-10"
                    />
                )}

                <SideMenu isOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
            </div>
        );
    };
    const Big = () => {
        return (
            <div>

                <nav className="text-white flex space-x-8 mr-8 place-items-center">

                    <Link to={'/'} className="cursor-pointer ">HOME</Link>

                    <div className="group relative">
                        <h3 className="cursor-pointer">ABOUT</h3>
                        <ul className="absolute hidden mt-2 bg-gray-900 text-white shadow-lg group-hover:block">
                            <Link className="block px-4 py-2 text-white hover:bg-gray-200">David</Link>
                            <Link to={'/steven'} className="block px-4 py-2 text-white hover:bg-gray-200">STEVEN</Link>
                            <Link className="block px-4 py-2 text-white hover:bg-gray-200">BELIEF</Link>
                            <Link className="block px-4 py-2 text-white hover:bg-gray-200">MINISTRIES</Link>
                        </ul>
                    </div>

                    <h1 className="cursor-pointer ">MEDIA</h1>


                    <div className="relative group ">
                        <h3 className="cursor-pointer">THE ETV NETWORK</h3>

                        <ul className="absolute hidden mt-2 bg-gray-900 text-white shadow-lg group-hover:block">
                            <Link to={''} className="block px-4 py-2 text-white hover:bg-gray-200">WORD AND SPIRIT</Link>
                            <li className="block px-4 py-2 text-white hover:bg-gray-200">VIRAL REVIVAL</li>

                        </ul>
                    </div>

                    <Link to={'/blog'} className="cursor-pointer ">BLOG</Link>

                    <Link to={'/shop'} className="cursor-pointer ">SHOP</Link>

                    <Link to={'/ecourse'} className="cursor-pointer ">E-COURSES</Link>

                    <Link to={'/events'} className="cursor-pointer ">EVENTS</Link>

                    <Link to="/booking" className="border-2 border-blue-900 rounded-xl w-fit mx-auto  px-4 py-2 hover:bg-blue-900 transition duration-500 ">Booking</Link>

                </nav>

            </div>
        )
    }

    return (
        <div className="bg-gray-900 py-8 md:py-12 place-items-center  flex justify-between pl-2 pr-2 ">
            <img src="/assets/logo.svg" alt="" className="px-4" />

            <div>
                {screenWidth <= 768
                    ? <Small />
                    : <Big />}
            </div>


        </div>
    );
};

export default Header;
