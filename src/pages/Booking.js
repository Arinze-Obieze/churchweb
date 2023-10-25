
const Booking = () => {

    return (
        <div className="md:w-[800px] md:mx-auto px-[36px] sm:px-6">


            <h1 className="text-center text-xl leading-loose mt-24">Invite Pastor Nwite Nwabueze Jeremiah</h1>
            <h3 className="text-center font-semibold mt-6" >EXPERINCE THE RESOUNDING REVIVAL OF GOD</h3>
            <img src='/assets/Booking_Man.jpg' alt="" className="p-5 mt-12" />

            <div>
                <h4 className="text-gray-700 p-4">
                    Pastor Nwabueze Jeremiah Nwite, the esteemed leader of Victory Resounding
                    Revival Ministries in Onitsha, Nigeria, is a remarkable spiritual luminary whose
                    multifaceted
                    talents and unwavering dedication illuminate a unique and inspiring tapestry of
                    roles.

                    A consummate Prophectic teacher and preacher, Pastor Nwabueze passionately
                    imparts the profound wisdom of the Scriptures, guiding individuals on their
                    spiritual odysseys with precision and grace. His sermons are not mere
                    words but transformative experiences that resonate deeply with congregants
                    and truth seekers, illuminating the path to righteousness.
                </h4>
            </div>


            <div className="p-4">
                <h2 className="font-semibold">GET STARTED</h2>
                <h4 className="leading-7 text-xl text-gray-600 font-extralight">
                Fill out the form to send Pastor Nwite Nwabueze Jeremiahan invitation. Note: we will
                    save your email address and send you occasional emails
                    related to booking Pastor Nwite Nwabueze Jeremiah.</h4>
            </div>


            <div className="p-8 md:p-24 border-2 m-12" >
                <h1 className="bg-blue-500 py-4 pl-2  text-2xl text-white w-full" >Booking Form</h1>

                <div className="flex flex-col">
                    <label htmlFor="text" className="font-semibold text-gray-700 mb-1 mt-8 ">Full Name</label>
                    <input type="text" className="w-[60%] h-8  border border-gray-300 " />
                    <label htmlFor="Email Address" className="font-semibold text-gray-700 mb-1 mt-8 ">Email Address: </label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300border border-gray-300 " />
                    <label htmlFor="Em" className="font-semibold text-gray-700 mb-1 mt-8 ">Title </label>
                    <h5 className="text-sm">Examples: Senior Pastor, Event Coordinator, Conference Host. </h5>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="Email Address" className="font-semibold text-gray-700 mb-1 mt-8 ">Phone Number:</label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="Email Address" className="font-semibold text-gray-700 mb-1 mt-8 ">What is the name of the church/ministry hosting the event? </label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="Email Address" className="font-semibold text-gray-700 mb-1 mt-8 ">What are the dates you want Pastor Nwite Nwabueze Jeremiah to minister?</label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="text" className="font-semibold text-gray-700 mb-1 mt-8 ">Where is your church/event located?</label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="" className="font-semibold text-gray-700 mb-1 mt-8 ">Country and City </label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="" className="font-semibold text-gray-700 mb-1 mt-8 ">Booking Type? </label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="" className="font-semibold text-gray-700 mb-1 mt-8 ">What is your expected number of participants? </label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="" className="font-semibold text-gray-700 mb-1 mt-8 ">How did you hear about Pastor Nwite Nwabueze Jeremiah? </label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />

                </div>
            </div>
            <button className="block mx-auto bg-blue-600 py-3 px-6 mb-6 text-white">Submit</button>

        </div>
    );
}

export default Booking;