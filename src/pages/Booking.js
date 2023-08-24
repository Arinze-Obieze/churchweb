
const Booking = () => {

    return (
        <div className="md:w-[800px] md:mx-auto sm:px-6">


            <h1 className="text-center text-xl leading-loose mt-24">Invite David Diga Hernandez</h1>
            <h3 className="text-center font-semibold mt-6" >ENCOUNTER THE PRESENCE AND POWER OF THE HOLY SPIRIT LIKE NEVER BEFORE…</h3>
            <img src='/assets/Booking_Man.jpg' alt="" className="p-5 mt-12" />

            <div>
                <h4 className="text-gray-700 p-4">
                    David Diga Hernandez is a gifted teacher of God’s Word and uniquely
                    anointed in evangelistic preaching. He has a distinguished grace to
                    lead people into the manifested presence of the Holy Spirit and
                    healing. His ministry is marked by the Holy Spirit in a special way.
                    Ministering God’s power with excellence and reverence, David’s
                    ministry has seen people from all walks of life come into a genuine
                    and life-changing experience in God’s glorious presence. David has a
                    heart to lead the lost to Christ, the sick to healing, and
                    the believer into a deeper fellowship with the Holy Spirit.
                </h4>
            </div>


            <div className="p-4">
                <h2 className="font-semibold">GET STARTED</h2>
                <h4 className="leading-7 text-xl text-gray-600 font-extralight">Fill out the form to send David an invitation. Note: we will
                    save your email address and send you occasional emails
                    related to booking David.</h4>
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
                    <label htmlFor="Email Address" className="font-semibold text-gray-700 mb-1 mt-8 ">What are the dates you want David to minister?</label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="text" className="font-semibold text-gray-700 mb-1 mt-8 ">Where is your church/event located?</label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="" className="font-semibold text-gray-700 mb-1 mt-8 ">Country and City </label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="" className="font-semibold text-gray-700 mb-1 mt-8 ">Booking Type? </label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="" className="font-semibold text-gray-700 mb-1 mt-8 ">What is your expected number of participants? </label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <label htmlFor="" className="font-semibold text-gray-700 mb-1 mt-8 ">How did you hear about David Diga Hernandez? </label>
                    <input type="text" className="w-[60%] h-8 border border-gray-300 " />
                    <div className="flex flex-col ">
                        <label htmlFor="" className="font-semibold text-gray-700 mb-1 mt-8 ">Are you willing to allow David to take up an offering in each of the services he ministers?</label>
                        <input type="checkbox" className=" border border-gray-300 rounded-md px-2 focus:border-blue-500 focus:ring focus:ring-blue-200" />
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
            <button className="block mx-auto bg-blue-600 py-3 px-6 mb-6 text-white">Submit</button>

        </div>
    );
}

export default Booking;