const SoakingWorship = () => {
    return (
        <div className="md:flex  md:justify-center  md:space-x-24">

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


            <div className="md:w-[500px]">
                <h1 className="mt-12 mb-6 text-2xl text-center text-gray-700">Soaking Worship</h1>
                <h3 className="text-center text-xl font-light mb-3 px-6">Instrumental worship music made specifically for prayer, worship,
                    and meditation on the Word.</h3>
                <hr className="border-t border-gray-300 mt-4 mx-auto w-[85%] mb-6" />

                <div className=" px-6">
                    <div className=" mx-auto md:w-[600px] mt-3">
                        <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/A6hf33n2Ibc" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div>
                        <h3 className="text-[20px]  text-gray-700 leading-7  font-light mt-4 mb-12 ">Be calmed by the presence of the Holy Spirit as you receive His peace.
                            Use this 3 hour worship instrumental for seeking God in prayer and study
                            of the Word.</h3>
                    </div>
                </div>
                <hr className="border-t border-gray-300 mt-4 mb-4 mx-auto w-[85%]" />
                <div className="text-center">
                    <button className="bg-blue-600 text-white px-6 py-3 mt-6 font-bold mx-auto ">WATCH MORE</button>
                </div>
                <div >
                    <h1 className="text-center font-bold text-xl  text-gray-800 mt-12">WATCH NOW ON THE DHM APP</h1>
                    <img src="/assets/etvlast.jpg" alt="" />
                </div>

            </div>

        </div>
    );
}

export default SoakingWorship;