import AppFooter from "../components/AppFooter";

const WorldChangers = () => {
    return (
        <div>
            <div className="px-6">
                <h1 className="mt-12 mb-6 text-2xl text-center text-gray-700"> World Changers</h1>
                <h3 className="text-center font-bold text-xl text-gray-700">PARTNER LOGIN</h3>
                <h5 className="text-xl font-light text-gray-700 ">Thank you for being a monthly supporter of this ministry. Click the
                    button below to access your partner page. If you signed up to become a
                    monthly supporter before April 25th 2020, you will need to contact our
                    ministry so that we can help you access the new system. </h5>
            </div>
            <hr class="border-t border-gray-400 mt-6 mb-4 mx-auto w-[85%]" />


            <div className="grid grid-cols-1 space-y-8 mt-12">

                <button className="bg-blue-500 mx-auto px-8 py-4 text-white">PARTNER LOGIN</button>
                <button className="bg-blue-500 mx-auto px-8 py-4 text-white">EVENT RESERVED SEATING</button>
                <button className="bg-blue-500 mx-auto px-8 py-4 text-white">EMAIL PARTNER SUPPORT</button>
                <button className="bg-blue-500 mx-auto px-8 py-4 text-white">CALL PARTNER SUPPORT</button>
                <button className="bg-blue-500 mx-auto px-8 py-4 text-white"> TEXT PARTNER SUPPORT</button>
            </div>
            <div>
                <button className="bg-blue-600 px-6 py-3 mt-12 block mx-auto">Donate</button>
            </div>
            <AppFooter />

        </div>
    );
}

export default WorldChangers;