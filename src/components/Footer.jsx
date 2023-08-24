import { AiFillHeart, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { IoMdMusicalNotes } from "react-icons/io"
import { BiLogoFacebook } from "react-icons/bi"
const Footer = () => {
    return (
        <div >
            <div className="flex  bg-gray-600 py-8 mt-6 justify-center space-x-3">

                <div className="bg-white rounded-full p-5 hover:bg-gray-800 hover:text-white transition duration-500 ease-in">
                    <IoMdMusicalNotes size={22} color='black' />
                </div>
                <div className="bg-white rounded-full p-5 hover:bg-gray-800 hover:text-white transition duration-500 ease-in">
                    <AiFillYoutube size={22} color='black' />
                </div>
                <div className="bg-white rounded-full p-5 hover:bg-gray-800 hover:text-white transition duration-500 ease-in">
                    <BiLogoFacebook size={22} color='black' />
                </div>
                <div className="bg-white rounded-full p-5 hover:bg-gray-800 hover:text-white transition duration-500 ease-in">
                    <AiOutlineTwitter size={22} color='black' />
                </div>
                <div className="bg-white rounded-full p-5 hover:bg-gray-800 hover:text-white transition duration-500 ease-in  ">

                    <AiOutlineInstagram size={22} color='black' className="text-white" />
                </div>

            </div>


            <div className="text-center bg-gray-800 text-white pb-40">
                <h1 className="ml-2 mr-2 pt-6 mb-6">DAVID HERNANDEZ MINISTRIES, PO BOX 39670, DOWNEY CA 90239, UNITED STATES
                    888.740.1110
                </h1>
                <a href="#" className="">EMAIL</a>
            </div>

            <a href="#" className="flex text-white  place-items-center bg-blue-600 w-fit py-1 px-3 rounded-md fixed"><AiFillHeart /> <h1>Donate</h1></a>

        </div>
    );
}

export default Footer;