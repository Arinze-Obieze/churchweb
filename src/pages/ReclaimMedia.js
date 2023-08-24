const ReclaimMedia = () => {
    return (
        <div className="md:flex md:justify-center md:space-x-12">



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


            <div className="md:w-[600px]">
                <div>
                    <h1 className="mt-12 mb-6 text-2xl text-center text-gray-700">Reclaim Media</h1>
                    <h3 className="text-center text-xl font-light mb-3 px-6">Reclaim Media is an online media ministry focused on building
                        spiritual leaders and disciples. By releasing Biblically-based,
                        Spirit-filled content, we are engaging a generation of believers
                        who desire to grow spiritually and fulfill the call of God.  </h3>


                </div>
                <hr className="border-t border-gray-300 mt-4 mx-auto w-[85%] mb-6" />

                <div>
                    <h1 className="mt-12 mb-6 text-2xl text-center text-gray-700">Latest Service</h1>
                    <div className=" mx-auto md:w-[600px] px-5">
                        <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/A6hf33n2Ibc" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <hr className="border-t border-gray-300 mt-4 mx-auto w-[85%] mb-6" />


                    <button className="bg-blue-600 mt-6 mb-12 text-white mx-auto block font-semibold px-6 py-3">WATCH MORE</button>

                    <div >
                        <h1 className="text-center font-bold text-xl  text-gray-800 mt-12">WATCH NOW ON THE DHM APP</h1>
                        <img src="/assets/etvlast.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ReclaimMedia;