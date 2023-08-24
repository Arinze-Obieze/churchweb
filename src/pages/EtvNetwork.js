const EtvNetwork = () => {
    return (
        <div className="flex justify-around">
            <div className="hidden md:block mt-24 text-gray-600">
                <h1 className="text-2xl font-bold text-blue-600 mb-4 ">Media</h1>
                <div className="space-y-2 font-light text-sm">
                    <h2 className="text-black">THE ETV NETWORK</h2>
                    <h2>WORD AND SPIRIT</h2>
                    <h2>VIRAL REVIVAL</h2>
                    <h2>WORSHIP</h2>
                    <h2>PRESENCE AND POWER</h2>
                    <h2>SOAKING WORSHIP</h2>
                    <h2>LIVESTREAMS</h2>
                    <h2>ENCOUNTER PODCAST</h2>
                    <h2>RECLAIM MEDIA</h2>
                </div>


            </div>
            <div className="flex flex-col md:w-[800px]">

                <div >
                    <h1 className=" text-center mt-12 mb-6 text-2xl gray-900 font-light">The Encounter TV Network</h1>
                    <h2 className="italic text-center text-xl text-gray-800"> Encounter the Presence & Power of the Holy Spirit</h2>
                    <h3 className="p-8 md:text-xl">The Encounter TV network features the teaching and healing ministry
                        of David Diga Hernandez and the worship ministry of Steven Moctezuma.
                        The ETV Network receives millions of views globally and is currently
                        available on Social Media, YouTube, Vimeo, Apple TV, Roku, and the
                        David Hernandez Ministries app. Programs include Spirit Church,
                        Viral Revival, Impartation Live, Worship, and more.</h3>
                </div>
                <hr class="border-t border-gray-400 mt-4 mb-4 mx-auto w-[85%]" />

                <div>
                    <h1 className="text-center text-2xl  text-gray-700 md:mb-12 mb-8">Programs on the ETV Network</h1>

                    <div className="grid grid-cols-2 gap-3  md:gap-3 px-4 md:px-0 cursor-pointer ">
                        <img src="/assets/etv.jpg" alt="" className="m-0" />
                        <img src="/assets/etv1.jpg" alt="" className="m-0" />
                        <img src="/assets/etv3.jpg" alt="" className="m-0" />
                        <img src="/assets/etv4.jpg" alt="" className="m-0" />
                        <img src="/assets/etv5.jpg" alt="" className="m-0" />
                        <img src="/assets/etv6.jpg" alt="" className="m-0" />
                        <img src="/assets/etv7.jpg" alt="" className="m-0" />
                    </div>
                    <hr class="border-t border-gray-300 mt-4 mb-4 md:mt-12 mx-auto w-[85%]" />

                    <div className="mt-12 mb-12">
                        <h1 className="text-center text-xl font-semibold leading-7">WATCH ENCOUNTER TV ON THE DHM APP</h1>
                        <img src="/assets/etvlast.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EtvNetwork;