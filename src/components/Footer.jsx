import { AiFillYoutube, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div >
            <div className="flex bg-gray-600 py-8 mt-6 justify-center space-x-6">

                <Link to={'https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B2347062129563%26data%3DARBEbCAGnyNoida70z3p-I3_boWW1zHHVO5BB5cI-IWjd_Nxe3vYhbvjzn3caFSU67CjLY6Th8PN7-WfDncSAFJwcoMZLx76DVXtCsFO_ZV1ZkSJxFmfWfCCCusl4UeFgJnG7RiioaUxEQXsW6iN2cElKQ%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR2LBv4pizpfW1Q3Kftu6Gfwq_A-qZFVOWh9L2zuoD0C_FiD-lVEp3u996w&h=AT12GPsFWq414Oc18jCRh3Jk3ITNnrcaLbnR0YM6m0ZwtIFGHZjBO2eOrvnwebWyOax7S6CV7JhSXu8uDF5InD2QmIJBJFqOv0bR6gQTQ3whcP2u1QOjyRqRTOXMPA'} className="bg-white rounded-full p-5 hover:bg-gray-800 hover:text-white transition duration-500 ease-in">
                    <AiOutlineWhatsApp size={22} color='black' />
                </Link>
                {/* 
                <div className="bg-white rounded-full p-5 hover:bg-gray-800 hover:text-white transition duration-500 ease-in">
                    <AiFillYoutube size={22} color='black' />
                </div> */}
                <Link to={'https://web.facebook.com/profile.php?id=100077265491515'} className="bg-white rounded-full p-5 hover:bg-gray-800 hover:text-white transition duration-500 ease-in">
                    <BiLogoFacebook size={22} color='black' />
                </Link>
                {/* <div className="bg-white rounded-full p-5 hover:bg-gray-800 hover:text-white transition duration-500 ease-in">
                    <AiOutlineTwitter size={22} color='black' />
                </div> */}
            </div>

            <div className="text-center bg-[#000033] text-white pb-24 pt-4">
                <h1 className="ml-2 mr-2 pt-6 mb-6">Victory Resounding Revival Ministries <br />  ONITSHA, NIGERIA

                </h1>
                <div>
                    EMAIL
                    <span className="ml-1"> vresounding@gmail.com</span>
                </div>
            </div>

        </div>
    );
}

export default Footer;