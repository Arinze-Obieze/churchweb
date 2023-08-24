const PresenceAndPower = () => {
    return (
        <div className="flex justify-center  md:space-x-24">
            <div className="hidden md:block">
                <h1 className="text-2xl font-bold text-blue-600 mt-24 mb-4 ">Media</h1>
                <div className="space-y-2 font-light text-sm">
                    <h2 >THE ETV NETWORK</h2>
                    <h2 className="text-black">WORD AND SPIRIT</h2>
                    <h2>VIRAL REVIVAL</h2>
                    <h2 >WORSHIP</h2>
                    <h2>PRESENCE AND POWER</h2>
                    <h2>SOAKING WORSHIP</h2>
                    <h2>LIVESTREAMS</h2>
                    <h2>ENCOUNTER PODCAST</h2>
                    <h2>RECLAIM MEDIA</h2>
                </div>
            </div>


            <div className="p-6 md:w-[500px]">
                <h1 className="text-center text-2xl text-gray-700 mt-12 mb-6">Presence and Power</h1>
                <h3 className="text-center text-xl font-light text-gray-800 mb-3">Clips and excerpts featuring miracle healing testimonies,
                    live healings and people being touched by the power of the
                    Holy Spirit.</h3>

                <hr className="border-t border-gray-300 mt-4 mb-4 mx-auto w-[85%]" />


                <div>
                    <div className=" mx-auto md:w-[600px] mt-3">
                        <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/A6hf33n2Ibc" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div>
                        <h1 className="font-light text-[18px] my-3  mb-3
                         ">Watch and experience this beautiful outpouring
                            of the Holy Spirit’s presence. A single moment in His
                            glory changes everything.</h1>
                    </div>

                    <hr className="border-t border-gray-300 mt-4 mb-4 mx-auto w-[85%]" />

                    <div >
                        <h1 className="text-center font-bold text-xl  text-gray-800 mt-12">WATCH NOW ON THE DHM APP</h1>
                        <img src="/assets/etvlast.jpg" alt="" />
                    </div>
                    <div className="text-center">
                        <button className="bg-blue-600 text-white px-6 py-3 font-bold mx-auto ">DOWNLOAD THE APP</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PresenceAndPower;