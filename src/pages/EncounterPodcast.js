const EncounterPodcast = () => {
    return (


        <>

            <div>
                <div>
                    <h1 className="mt-12 mb-6 text-2xl text-center text-gray-700">The Encounter Podcast</h1>
                    <h3 className="text-center text-xl font-light mb-3 px-6">The Encounter Podcast features the latest audio sermons from David Diga Hernandez. David
                        is known for ministering on the topics of the Holy Spirit, God’s Presence, Prayer, Healing,
                        Spiritual Warfare, Faith & Miracles, and the Gospel.</h3>
                </div>
                <hr className="border-t border-gray-300 mt-4 mx-auto w-[85%] mb-6" />

                <div className="px-8">
                    <h1 className="text-xl font-bold text-gray-700 mt-3">RECEIVE THE ENCOUNTER PODCAST VIA EMAIL</h1>
                    <h3 className="text-[18px] font-light text-gray-800 ">To receive The Encounter Podcast weekly via your email inbox, sign up to David’s emailing
                        list and select “Weekly Podcast Episodes.” In addition to the podcast, you’ll receive other
                        content and updates.</h3>


                    <form className="px-2 mx-8 text-gray-700 text-[16px] ">
                        <div>
                            <h1 className="mb-1 mt-8">Email Address *</h1>
                            <input type="text" className="border-2 h-[30px] w-[90%]" />
                        </div>
                        <div>
                            <h1 className="mb-1 mt-8">First Name</h1>
                            <input type="text" className="border-2 h-[30px] w-[90%]" />
                        </div>
                        <div>
                            <h1 className="mb-1 mt-8">Last Name</h1>
                            <input type="text" className="border-2 h-[30px] w-[90%]" />
                        </div>

                        <h1 className="font-bold text-gray-600 mt-6">I would like to receive...</h1>
                        <div>
                            <div className="flex space-x-2 mt-1 text-sm">
                                <input type="checkbox" />
                                <h1> Sunday Morning Sermons</h1>
                            </div>
                            <div className="flex space-x-2 mt-2 text-sm">
                                <input type="checkbox" />
                                <h1>Livestream Alerts</h1>
                            </div>

                            <div className="flex space-x-2 mt-2 text-sm">
                                <input type="checkbox" />
                                <h1>  Weekly Podcast Episodes</h1>
                            </div>
                            <div className="flex space-x-2 mt-2 text-sm">
                                <input type="checkbox" />
                                <h1>  Weekly Blog Posts</h1>
                            </div>

                            <div className="flex space-x-2 mt-2 text-sm">
                                <input type="checkbox" />
                                <h1> Merch Drop Alerts</h1>
                            </div>
                        </div>

                        <button className="bg-gray-400 hover:bg-blue-600 mt-6 mb-12 px-6 py-3">Subscribe</button>
                    </form>
                </div>

                <div >
                    <h1 className="text-center font-bold text-xl  text-gray-800 mt-12">WATCH NOW ON THE DHM APP</h1>
                    <img src="/assets/etvlast.jpg" alt="" />
                </div>

            </div>

        </>
    );
}

export default EncounterPodcast;