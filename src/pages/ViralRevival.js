import { Link } from "react-router-dom";

const ViralRevival = () => {
    return (
        <div>
            <div className="px-6">
                <img src="/assets/viralrevival.jpg" alt="" className="mt-20 " />
                <h1 className="text-center mt-6  mb-6 font-light leading-6 text-xl text-gray-700">Viral Revival is an interactive livestream that
                    features the Word, prayer, and Q&A.
                </h1>
            </div>
            <hr className="border-t border-gray-300 mt-4 mb-4 mx-auto w-[85%]" />

            <h1 className="text-2xl font-bold  text-gray-700 text-center">Want live alerts via text? Fill out this form.</h1>

            <div className="border-2 border-gray-300 m-8 py-3 px-6 ">
                <h1 className="text-gray-700">Receive livestream alerts via text.</h1>
                <h3 className="font-bold text-gray-700 mt-3 mb-1">PHONE NUMBER*</h3>
                <input type="text" className="h-[36px] w-[90%] border-2 mb-2 " />
                <div className="flex space-x-3 text-gray-700" >
                    <input type="checkbox" />
                    <h4>Yes! I want to receive text messages</h4>
                </div>
                <h5 className="text-gray-700 text-[13px] text-left w-[250px] leading-4">Message and data rates may apply.
                    Recurring messages subscription.
                    Click to view Terms & Privacy.
                    Available in USA and Canada.
                    Powered by <big className="text-black text-[13px]">EZ Texting</big></h5>
            </div>

            <div>
                <h1 className="text-center font-light text-xl text-gray-700 ">
                    Click <Link className="text-blue-300">here</Link> to read our privacy policy.</h1>
                <h2 className="text-center  text-xl text-gray-700 ">Text <span className="font-bold text-gray-700">STOP</span> to stop receiving messages for ETV livestreams.</h2>
            </div>
            <hr className="border-t border-gray-300 mt-4 mb-4 mx-auto w-[85%]" />

            <div>
            <div className="px-6 mx-auto md:w-[600px]">
                    <iframe width="100%" height="315"
                        src="https://www.youtube.com/embed/A6hf33n2Ibc" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="px-6">
                    <h2 className="text-xl  text-gray-800 font-light my-6 ">If you feel that there’s a technical issue, text
                        714.864.1564.</h2>
                    <h3 className="text-xl  text-gray-800 font-light my-6">To receive notifications when we go live and to participate
                        in the chat, be sure to subscribe to us on YouTube.</h3>
                </div>
                <div className="flex justify-center items-center">
                    <button className="py-3 mb-12 mt-4 px-6 text-white bg-blue-500">WATCH LIVE ON YOUTUBE</button>
                </div>            </div>
            <hr className="border-t border-gray-300 mt-4 mb-4 mx-auto w-[85%]" />

            <div>
                <div>
                    <h1 className="text-3xl font-bold text-center mt-12 text-gray-800">Donate</h1>
                </div>

            </div>

            <div className="mt-6 p-8">
                <h1 className="text-center font-bold mb-6">GET NOTIFICATIONS WHEN WE GO LIVE</h1>
                <h3 className="text-gray-800 text-xl mb-3 font-light text-center leading-8">Download the DHM app and enable notifications to get alerts
                    when David and Steven go live</h3>
                <img src="/assets/etvlast.jpg" alt="" />

                <div className="flex justify-center items-center">
                    <button className="py-3 px-6 text-white bg-blue-500">DOWNLOAD THE APP</button>
                </div>

            </div>
        </div>
    );
}

export default ViralRevival;