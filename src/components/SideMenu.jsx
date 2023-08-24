import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlinePullRequest } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideMenu = ({ isOpen , handleMenuToggle }) => {
    const [aboutSubMenuOpen, setAboutSubMenuOpen] = useState(false);
    const [mediaSubMenuOpen, setMediaSubMenuOpen] = useState(false);
    const [donateSubMenuOpen, setDonateSubMenuOpen] = useState(false);
    const [contactSubMenuOpen, setContactSubMenuOpen] = useState(false);

    const handleSubMenuToggle = (submenu) => {
        switch (submenu) {
            case "about":
                setAboutSubMenuOpen(!aboutSubMenuOpen);
                break;
            case "media":
                setMediaSubMenuOpen(!mediaSubMenuOpen);
                break;
            case "donate":
                setDonateSubMenuOpen(!donateSubMenuOpen);
                break;
            case "contact":
                setContactSubMenuOpen(!contactSubMenuOpen);
                break;
            default:
                break;
        }
    };

    return (
        <>
        
        <div
            className={`fixed top-0 right-0 h-full w-[50%]   bg-gray-900 text-white transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-[100%]"
                }`}
        >
            <ul className="h-full text-lg flex flex-col  py-8  px-4">
                <Link to={'/'} >Home</Link>

                <div onClick={() => handleSubMenuToggle("about")}>
                    <span className="flex place-items-center">
                        {!aboutSubMenuOpen ? <AiOutlinePlus /> : <AiOutlineMinus />}
                        <h1>About</h1>
                    </span>

                    {aboutSubMenuOpen && (
                        <ul className="text-gray-300 ml-6 flex flex-col">
                            <Link to={'/david'}>DAVID</Link>
                            <Link to={'/steven'}>STEVEN</Link>
                            <Link to={'/beliefs'}>BELIEFS</Link>
                            <Link to={'/ministries'} >MINISTRIES</Link>
                        </ul>
                    )}

                </div>


                <div onClick={() => handleSubMenuToggle("media")}>
                    <span className="flex place-items-center mt-1 ">
                        {!mediaSubMenuOpen ? <AiOutlinePlus /> : <AiOutlineMinus />}
                        <h1>Media</h1>
                    </span>

                    {mediaSubMenuOpen && (
                        <ul className="text-gray-300 flex flex-col ml-6">
                            <Link to={'/etvnetwork'}>THE ETV NETWORK</Link>
                            <Link to={'/wordandspirit'}>WORD AND SPIRIT</Link>
                            <Link to={'/viralrevival'}>VIRAL REVIVAL</Link>
                            <Link to={'/worship'}>WORSHIP</Link>
                            <Link to={'/presenceandpower'}>PRESENCE AND POWER</Link>
                            <Link to={'/soakingworship'}>SOAKING WORSHI</Link>
                            <Link to={'/livestreams'}>LIVESTREAMS</Link>
                            <Link to={'/encounterpodcast'}>ENCOUNTER PODCAST</Link>
                            <Link to={'/reclaimmedia'}>RECLAIM MEDIA</Link>
                        </ul>


                    )}
                </div>



                <Link to={'blog'}>Blog</Link>

                <div onClick={() => handleSubMenuToggle("donate")}>
                    <span className="flex place-items-center mt-1">
                        {!donateSubMenuOpen ? <AiOutlinePlus /> : <AiOutlineMinus />}
                        <h1>Donate</h1>
                    </span>
                </div>
                {donateSubMenuOpen && (
                    <ul className="text-gray-300 flex flex-col ml-6">
                        <Link to={'/donate'}>Donate</Link>
                        <Link to={'/partner'}>PARTNER</Link>
                        <Link to={'mailingiving'}>MAIL-IN GIVING</Link>
                    </ul>
                )}

                <Link to={'/ecourse'} className="mt-1">E-Courses</Link>
                <Link to={'/events'} className="mt-1">Events</Link>

                <div onClick={() => handleSubMenuToggle("contact")}>
                    <span className="flex place-items-center mt-1">
                        {!contactSubMenuOpen ? <AiOutlinePlus /> : <AiOutlineMinus />}
                        <h1>CONTACT</h1>
                    </span>
                </div>
                {contactSubMenuOpen && (
                    <ul className="text-gray-300 flex flex-col ml-6">
                        <Link to={'/contact'} >CONTACT</Link>
                        <Link >CONNECT</Link>
                        <Link to={'/faq'}>FAQ</Link>
                    </ul>
                )}

                <Link to="booking" className="border-2 border-blue-900 rounded-xl w-fit mx-auto mt-6 px-4 py-2 hover:bg-blue-900 transition duration-500 ">Booking</Link>
            </ul>
        </div>
        </>
    );
};

export default SideMenu;
