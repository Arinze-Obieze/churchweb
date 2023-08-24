const Worship = () => {
    return (
        <>
            <div className="p-8">
                <h1 className="text-center text-2xl text-gray-800 font-bold">Worship</h1>
                <h3 className="text-gray-700 text-center text-xl font-light">Enjoy worship covers and originals by Steven Moctezuma.
                    Steven Moctezuma makes regular appearances on
                    Encounter TV and Steven can also be seen leading
                    worship at our various ministry events. Steven is an
                    anointed worship singer and musician.
                </h3>
            </div>
            <hr class="border-t border-gray-300 mt-4 mb-4 mx-auto w-[85%]" />

            <div >
                <h1 className="text-center text-2xl text-gray-700 mb-6 ">Latest Worship Video</h1>
                <div className="px-6 mx-auto md:w-[600px]">
                    <iframe width="100%" height="315"
                        src="https://www.youtube.com/embed/A6hf33n2Ibc" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
                <h3 className="px-8 text-gray-800 text-[19px] mt-6 font-light">There is nothing like the presence of the Lord. Nothing is
                    impossible with God. Join Steven Moctezuma in singing this
                    beautiful song to our King. Here is “In The Presence Of
                    Jehovah.”</h3>
            </div>
            <hr class="border-t border-gray-300 mt-4 mb-4 mx-auto w-[85%]" />
            <div className="px-8">
                <h1 className="text-gray-900 text-xl font-bold">RECEIVE STEVEN'S WORSHIP VIDEOS VIA EMAIL</h1>
                <h3 className="text-gray-700 text-[18px] font-light">Sign up to Steven Moctezuma's emailing list and receive Steven's
                    worship videos via email on a weekly basis. You'll also receive
                    occasional updates from Steven.</h3>

                <form >
                    <span className="flex space-x-2">
                        <h1>Name</h1>
                        <h5 className="text-sm text-gray-600">(required)</h5>
                    </span>
                    <div className="flex place-items-center space-x-5 mt-3">
                        <div className="">
                            <h1>First Name</h1>
                            <input type="text" className=" border-2 h-[38px] mb-6" />
                        </div>
                        <span>
                            <h1>Last Name</h1>
                            <input type="text" className=" border-2 h-[38px] mb-6" />
                        </span>
                    </div>

                    <span>
                        <span className="flex space-x-3 place-items-center">
                            <h1 className="text-gray-700 text-xl font-light">Email Address</h1>
                            <h5 className="text-sm text-gray-600">(required)</h5></span>
                        <div>
                            <input type="text" className=" border-2 h-[38px] mb-6 my-3" />
                        </div>
                    </span>
                    <button className="py-3 px-6 text-white bg-blue-500">SUBMIT</button>
                </form>
                <div>
                    <h1 className="text-center mt-6 ">NOW ON ITUNES: THE HOLY SPIRIT</h1>
                    <h3 className="text-center font-light text-xl">by Steven Moctezuma</h3>
                    <img src="/assets/worship.jpg" alt="" />
                </div>

                <div className="flex justify-center items-center">
                    <button className="py-3 px-6 text-white bg-blue-500"> ORDER NOW   </button>
                </div>

                <input type="text" className=" border-2 h-[38px] mb-6" />


                <div>
                    <h1>WATCH STEVEN MOCTEZUMA ON THE DHM APP</h1>
                    <img src="/assets/etvlast.jpg" alt="" />
                </div>
            </div>
        </>
    );
}

export default Worship;