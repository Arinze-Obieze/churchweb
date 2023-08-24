const Steven = () => {
    return (
        <>
            <div>
                <div className="md:flex md:place-items-center">
                    <div>
                        <div className="hidden md:flex md:flex-col md:place-items-center  ">
                            <h1 >About</h1>
                            <h1>DAVID</h1>
                            <h1 className="text-2xl text-blue-500">STEVEN</h1>
                            <h1>BELIEFS</h1>
                            <h1>MINISTRIES</h1>
                        </div>
                    </div>


                    <div className="md:flex md:justify-around ">
                        <div className="px-12 mt-6">
                            <img src="/assets/Steven.jpg" alt="" className="md:w-[300px] mx-auto w-[400px]" />
                        </div>
                        <div className="px-6">
                            <h1 className="px-4 text-2xl text-gray-800 mt-4">Steven Moctezuma</h1>
                            <h4 className="text-gray-600 text-xl font-light md:w-[400px]">Steven Moctezuma is an anointed worship leader and song writer. His love for the presence of the Holy Spirit marks his worship ministry. Gifted with a unique voice,
                                Steven's worship ministry is touching lives all around the world and leading people into deeper encounters in God's presence. On July 1st 2017, Steven Moctezuma partnered with David Diga Hernandez on a full-time basis. The partnership of Steven's worship ministry and David's healing ministry carries a distinct anointing.</h4>
                            <h5 className="text-gray-800 mt-3 mb-5 text-xl font-light">Steven can be seen regularly on Encounter TV.</h5>
                        </div>
                    </div>


                </div>



                <div>
                    <h2 className="text-gray-800 text-xl font-light text-center">Invite Steven and David to minister at your next church service or ministry event.</h2>
                    <button className="py-3 px-6 text-white bg-blue-500 mx-auto block mt-6">INVITE STEVEN & DAVID</button>
                </div>
            </div>
        </>
    );
}

export default Steven;