import { Link } from "react-router-dom";

const RrvNetwork = () => {
  return (
    <div className="flex justify-around px-[32px]">
      <div className="hidden md:block mt-24 text-gray-600">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 ">Media</h1>
        <div className="space-y-2 font-light text-sm">
          <Link to={"/rrtv-network"} className="text-black">
            THE RRTV NETWORK
          </Link>

          <div>
            <Link to={"/livestreams"}>LIVESTREAMS</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-[800px]">
        <div>
          <h1 className="text-center md:pb-12 text-3xl mt-24 mb-8 text-gray-900">
            The Resounding Revival TV Netwok{" "}
          </h1>
          <h2 className="italic text-center text-xl text-gray-800">
            The Resounding Of God
          </h2>
          <h3 className="p-8 md:text-xl">
            Resounding Revival TV Netwok features the teaching and healing
            ministry of pastor nwabueze Jeremiah nwite and his worship ministry
            lead by anionted Gospel singers. The Resounding revival Tvnetwork is
            currently available on YouTube, Facebook, and on the VRealm app.
            Programs include Word and Spirit, Viral Revival, Presence and Power,
            Worship, and more.
          </h3>
        </div>
        <hr class="border-t border-gray-400 mt-4 mb-4 mx-auto w-[85%]" />

        <div>
          <h1 className="text-center text-2xl  text-gray-700 md:mb-12 mb-8">
            Programs on the Resounding Revival TV Netwok
          </h1>

          <div className="grid grid-cols-2 gap-3  md:gap-3 px-4 md:px-0 cursor-pointer ">
            <img src="/assets/etv.jpg" alt="" className="md:w-[300px] m-0" />
            <img src="/assets/etv1.jpg" alt="" className="md:w-[300px] m-0" />
            <img src="/assets/etv3.jpg" alt="" className="md:w-[300px] m-0" />
            <img src="/assets/etv4.jpg" alt="" className="md:w-[300px] m-0" />
          </div>
          <hr class="border-t border-gray-300 mt-4 mb-4 md:mt-12 mx-auto w-[85%]" />

          <div className="mt-12 mb-12">
            <h1 className="text-center text-xl font-semibold leading-7">
              WATCH Resounding Revival TV ON THE RRTV APP
            </h1>
            <img src="/assets/etvlast.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RrvNetwork;
