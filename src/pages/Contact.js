import React from "react";
import WhatsAppForm from "../components/WhatsappContact";
import { AiFillPhone } from "react-icons/ai";

export default function ContactPage() {
  return (
    <div className="grid mt-12 md:mt-24 sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
      <div>
        <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
        <p className="text-sm text-gray-500 mt-4">
          Have anything you want to say ? <br /> Contact Pastor Jeremiah
          Nwabueze
        </p>

        <div className="mt-12">
          <h2 className="text-gray-800 text-base font-bold">Email</h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000"
                  />
                </svg>
              </div>
              <a
                href="javascript:void(0)"
                className="text-[#007bff] text-sm ml-4"
              >
                <strong>Vresounding@gmail.com</strong>
              </a>
            </li>
          </ul>
          <h2 className="text-gray-800 text-base pt-8 font-bold">
            Phone Number
          </h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <AiFillPhone className="text-[#007bff]" />
              </div>
              <a
                href="javascript:void(0)"
                className="text-[#007bff] text-sm ml-4"
              >
                <strong>+234-706-212-9563</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-gray-800 text-base font-bold">Socials</h2>

          <ul className="flex mt-4 space-x-4">
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100077265491515&mibextid=LQQJ4d"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                    data-original="#000000"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ml-auto space-y-4">
        <WhatsAppForm />
      </div>
    </div>
  );
}
