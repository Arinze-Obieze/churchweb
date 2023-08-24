const WordAndSpirit = () => {
    return (
        <div className="flex justify-around">
            <div className="hidden md:block mt-24 text-gray-600">
            <h1 className="text-2xl font-bold text-blue-600 mb-4 ">Media</h1>
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


            <div className="flex flex-col w-[600px]">
                <div className="p-8">
                    <h1 className="text-center text-2xl font-semibold text-gray-700 mt-12 mb-6">Word and Spirit</h1>
                    <h3 className="text-gray-800 text-xl font-light text-center">Word and Spirit features the sermons of David Diga
                        Hernandez. David’s messages are Spirit-filled, Biblically
                        balanced, and simple. Draw closer to God by Word and
                        Spirit.
                    </h3>
                </div>

                <hr class="border-t border-gray-400 mt-4 mb-4 mx-auto w-[85%]" />

                <div className="p-8">
                    <h1 className="text-center text-2xl text-gray-800 font-light mb-3 mt-6">Latest Sermon</h1>

                    <div>

                    <div className=" mx-auto md:w-[600px]">
                            <iframe width="100%" height="315"
                                src="https://www.youtube.com/embed/A6hf33n2Ibc" title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                        </div>


                        <h3 className="text-xl mt-3 md:mt-6 text-gray-700 leading-7 font-light ">As Christians, there is one thing we should all fear:
                            grieving the Holy Spirit. Here is how the Holy Spirit feels
                            when believers do these things to Him.</h3>
                    </div>
                </div>
                <hr class="border-t border-gray-400 mt-4 mb-4 mx-auto w-[85%]" />


                <div>
                    <h1 className="text-center font-bold leading-5">MORE VIDEOS</h1>

                </div>


                <div className="mt-12">
                    <h1 className="text-center font-bold text-lg">WATCH WORD AND SPIRIT ON THE DHM APP</h1>
                    <img src="/assets/etvlast.jpg" alt="" />
                </div>
                <button className="py-3 px-6 text-white w-fit mx-auto bg-blue-500">DOWNLOAD THE APP</button>
            </div>
        </div>
    );
}

export default WordAndSpirit