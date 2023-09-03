// pages/index.js (or your desired page)
import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Sidebar from '../components/SideMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [aboutSubMenu, setAboutSubMenu] = useState(false);
    const [mediaSubMenu, setMediaSubMenu] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleAboutMenuSubMenu = () => {
        setAboutSubMenu(!aboutSubMenu)
    }

    const toggleMediaMenuSubMenu = () => {
        setMediaSubMenu(!mediaSubMenu)
    }

    return (
        <div className='bg-[#000033] md:py-4 flex  justify-between place-items-center text-white'>


            <div className='flex justify-stretch space-x-[20%] w-full place-items-center' >
                <img src="/logo.jpg" alt="" className='w-[75px]' />

                <div className='text-xl space-x-16 hidden md:flex' >
                    <Link to={'/'} className="cursor-pointer  pt-2">HOME</Link>

                    <div className="group relative pt-2">
                        <span className='flex place-items-center space-x-1 ' onClick={toggleAboutMenuSubMenu}>
                            <h1 className="cursor-pointer" >ABOUT</h1>
                            {!aboutSubMenu
                                ? <AiOutlineDown size={18} />
                                :
                                <AiOutlineUp size={18} />
                            }
                        </span>
                        {aboutSubMenu
                            ?
                            <ul className="absolute  mt-2 bg-[#000033] text-white shadow-lg group-hover:block">
                                <Link to={'/pastor'} className="block px-4 py-2 text-white hover:bg-gray-600 font-semibold">Pastor NNJ</Link>
                                <Link to={'/beliefs'} className="block px-4 py-2 text-white hover:bg-gray-600 font-semibold">BELIEF</Link>
                                <Link to={'/ministries'} className="block px-4 py-2 text-white hover:bg-gray-600 font-semibold">MINISTRIES</Link>
                            </ul> :
                            ''
                        }
                    </div>


                    <div className="group relative pt-2">
                        <span className='flex place-items-center space-x-1 ' onClick={toggleMediaMenuSubMenu}>
                            <h1 className="cursor-pointer" >MEDIA</h1>
                            {!mediaSubMenu
                                ? <AiOutlineDown size={18} />
                                :
                                <AiOutlineUp size={18} />
                            }
                        </span>
                        {mediaSubMenu
                            ?
                            <ul className="absolute  mt-2 bg-[#000033] text-white shadow-lg group-hover:block">
                                <Link to={'/rrvnetwork'} className="block px-4 py-2 text-white hover:bg-gray-600 font-semibold">RRV Network</Link>
                                <Link to={'/livestreams'} className="block px-4 py-2 text-white hover:bg-gray-600 font-semibold">LIVESTREAMS</Link>
                            </ul> :
                            ''
                        }
                    </div>

                    <Link to={'/partner'} className='pt-2'>PARTNER</Link>

                    <Link to={'/events'} className='pt-2' >Events</Link>

                    <Link to={'/contact'} className='pt-2' >CONTACT</Link>

                    <Link to="/booking" className="border-2 border-blue-900 
                    rounded-xl w-fit  hover:bg-blue-900   px-4  pt-2
                    transition duration-500 ">Booking</Link>

                </div>
            </div>


            <div className='md:hidden'>
                <Sidebar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            </div>




        </div>
    );
};

export default Header;
