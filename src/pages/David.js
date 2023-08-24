const David = () => {
    return (
        <>
            <div className='p-4 '>
                <div className="md:flex justify-around place-items-center">
                    <div className="hidden md:flex md:flex-col md:place-items-center  ">
                        <h1 className="text-2xl text-blue-500">About</h1>
                        <h1>DAVID</h1>
                        <h1>STEVEN</h1>
                        <h1>BELIEFS</h1>
                        <h1>MINISTRIES</h1>
                    </div>
                    <div className="md:flex md:place-items-center md:justify-around md:gap-12 ">
                        <div className=" ">
                            <img src="/assets/David.jpg" alt="" className="w-[400px] h-[450px] mx-auto mt-12" />
                        </div>
                        <div className="border-b-2 mb-6 p-2">
                            <h1 className="font-bold text-2xl h-7 mt-3 text-gray-700 ">David Diga Hernandez</h1>
                            <h3 className="mt-4 text-gray-600 mb-6 md:w-[300px]  ">David Diga Hernandez is an evangelist, healing minister,
                                author, and TV host. He has an uncommon grace to guide believers
                                into closeness with the Holy Spirit. Based in Southern California,
                                David travels worldwide to preach the gospel of Jesus Christ and
                                heads an anointed evangelistic healing ministry. His ministry is
                                distinctly marked by the presence and power of the Holy Spirit.
                                David is a unique and emerging spiritual leader, called to take
                                God’s saving and healing power to this generation.
                            </h3>

                        </div>
                    </div>
                </div>


                <div className="block">
                    <h1 className="text-center font-bold text-2xl text-gray-700 md:mt-12 mt-6 " >INVITE DAVID</h1>
                    <h3 className="text-center w-[400px] mx-auto text-gray-600 text-xl">
                        invite David Diga Hernandez to minister at your next church or ministry event.
                    </h3>
                </div>
                <button className="px-6 py-3 block mt-6 md:mb-10 mx-auto bg-blue-600">INVITE DAVID</button>
            </div>
        </>
    );
}

export default David;