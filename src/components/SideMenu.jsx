import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideMenu = ({ toggleMenu, isMenuOpen }) => {
    const [aboutSubMenu, setAboutSubMenu] = useState(false);
    const [mediaSubMenu, setMediaSubMenu] = useState(false);

    const toggleAboutMenuSubMenu = () => {
        setAboutSubMenu(!aboutSubMenu)
    }
    const toggleMediaMenuSubMenu = () => {
        setMediaSubMenu(!mediaSubMenu)
    }
    return (
        <div>

            {!isMenuOpen ?
                <AiOutlineMenu size={25} onClick={toggleMenu} />
                :

                <div className="absolute right-0 top-2 w-[50%] h-full z-10 ">

                    <div className="pt-8 pl-3">
                        <AiOutlineClose size={25} onClick={toggleMenu} />
                    </div>
                    <div className="bg-[#000033] py-14 px-6 space-y-6 text-xl  font-serif   h-full flex flex-col ">
                        <span>   <Link to={''}>Home</Link>

                        </span>

                        <span >
                            <span onClick={toggleAboutMenuSubMenu} className="flex  place-items-center">
                                {!aboutSubMenu ?
                                    <AiOutlinePlus />
                                    :
                                    <AiOutlineMinus />
                                }

                                <h1>ABOUT</h1>
                            </span>
                            {aboutSubMenu
                                ?
                                <div className='flex flex-col space-y-2 pl-6 mt-1'>
                                    <Link to={'/pastor'}>Pastor NNJ</Link>
                                    <Link to={'/beliefs'}>BELIEFS</Link>
                                    <Link to={'/ministries'} >MINISTRIES</Link>
                                </div>
                                :
                                ''
                            }

                        </span>

                        <span className="flex flex-col">
                            <span onClick={toggleMediaMenuSubMenu} className="flex place-items-center">
                                {!aboutSubMenu ?
                                    <AiOutlinePlus />
                                    :
                                    <AiOutlineMinus />
                                }
                                <h1> MEDIA</h1>
                            </span>
                            {mediaSubMenu
                                ?
                                <div className='flex flex-col space-y-2 pl-6 mt-1'>
                                    <Link to={'/rrvnetwork'}>THE RR TV Network</Link>
                                    <Link to={'/livestreams'}>LIVESTREAMS</Link>
                                </div>
                                :
                                ''
                            }
                        </span>



                        <Link to={'/events'} className="mt-1">Events</Link>

                        <Link to={'/partner'}>PARTNER</Link>

                        <Link to={'/contact'} >CONTACT</Link>


                        <Link to="booking" className="border-2 border-blue-900 rounded-xl w-fit mx-auto mt-6 px-4 py-2 hover:bg-blue-900 transition duration-500 ">Booking</Link>

                    </div>

                </div>
            }

        </div>
    );
}

export default SideMenu;