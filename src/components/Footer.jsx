import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer class="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-[#000033] text-white">
        <div class="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
          <h2 class="font-bold text-xl xl:text-4xl leading-snug">
            Victory Resounding Revival Ministry
            {/* <br />
            Start your free trial today. */}
          </h2>
          <a
            class="mt-8 xl:mt-12 px-12 py-5 text-lg font-semibold text-[#000033] leading-tight inline-block bg-white rounded-full shadow-xl border border-transparent hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 "
            href="https://wa.me/message/BFZQZ3QMSZ5KM1"
            target="_blank"
          >
            Send Me A Message
          </a>
          <div class="mt-14 xl:mt-20">
            <nav class="flex flex-wrap justify-center text-lg font-medium">
              <div class="px-5 py-2">
                <a href="/contact">Contact Me</a>
              </div>
              <div class="px-5 py-2">
                <a href="/about-me">About Me</a>
              </div>
              <div class="px-5 py-2">
                <a href="/partner">Partner With Me</a>
              </div>
              <div class="px-5 py-2">
                <a href="/book-me">Book Me</a>
              </div>
              {/* <div class="px-5 py-2">
                <a href="#"></a>
              </div> */}
            </nav>
            <p class="mt-7 text-base">© 2024 VRealm, Ministry.</p>
          </div>
        </div>
        <div className="text-sm w-full pb-4 border-t border-b border-gray-400 pt-2">
          This website was designed and built by{" "}
          <a
            target="_blank"
            className="underline text-sm"
            href="https://x.com/arinzeobieze"
          >
            Arinze
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
