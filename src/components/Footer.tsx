import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaPinterestP } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="md:py-8 py-4 lg:px-10 md:px-8 sm:px-6 px-4 flex flex-col gap-8">
      <div className="flex flex-row gap-2 justify-center items-center">
        <hr className="h-px w-full" />
        <img src="/logo.svg" alt="logo" className="md:h-28 h-20" />
        <hr className="h-px w-full" />
      </div>

      <div className="flex justify-center items-center">
        
        <div className="grid grid-cols-3 justify-start items-start md:gap-12 gap-6 text-gray-200">
          <div className="flex flex-col md:gap-8 gap-4 items-center h-full text-center">
            <h4 className="md:text-2xl text-xl">Address</h4>
            <p className="md:text-lg text-base">
              Espresso Haven,
              <br />
              123 Coffee Lane town,
              <br />
              BT 45678
            </p>
          </div>

          <div className="flex flex-col md:gap-8 gap-4 items-center h-full text-center">
            <h4 className="md:text-2xl text-xl">Contact info</h4>
            <p className="md:text-lg text-base">
              (123) 456-7890
              <br />
              abc@gmail.com
            </p>
          </div>

          <div className="flex flex-col md:gap-8 gap-4 items-center h-full text-center">
            <h4 className="md:text-2xl text-xl">Operation Time</h4>
            <p className="md:text-lg text-base">
              Monday - Friday
              <br />
              Mon-Thurs 7:00 AM - 5:00 PM
              <br />
              Fri-Sun 7:00 AM - 6:00 PM
            </p>
          </div>
        </div>

      </div>

      <div className="md:gap-4 gap-2 justify-center items-center flex">
        <a className="md:p-3 md:text-3xl text-2xl p-2 text-gray-200 rounded-full bg-[rgb(50,50,50)] shadow-xl" href="FACEBOOK_LINK">
          <FaFacebookF />
        </a>

        <a className="md:p-3 md:text-3xl text-2xl p-2 text-gray-200 rounded-full bg-[rgb(50,50,50)] shadow-xl" href="INSTAGRAM_LINK">
          <FaInstagram />
        </a>

        <a className="md:p-3 md:text-3xl text-2xl p-2 text-gray-200 rounded-full bg-[rgb(50,50,50)] shadow-xl" href="XTWITTER_LINK">
          <FaXTwitter />
        </a>

        <a className="md:p-3 md:text-3xl text-2xl p-2 text-gray-200 rounded-full bg-[rgb(50,50,50)] shadow-xl" href="PINTEREST_LINK">
          <FaPinterestP />
        </a>

        <a className="md:p-3 md:text-3xl text-2xl p-2 text-gray-200 rounded-full bg-[rgb(50,50,50)] shadow-xl" href="TIKTOK_LINK">
          <FaTiktok />
        </a>

        <a className="md:p-3 md:text-3xl text-2xl p-2 text-gray-200 rounded-full bg-[rgb(50,50,50)] shadow-xl" href="LINKEDININ_LINK">
          <FaLinkedinIn />
        </a>
      </div>

      <div className="flex gap-2 flex-col text-gray-200">
        <hr className="h-px w-full" />
        <h3 className="md:text-xl text-lg text-center">Copyright 2024 ©, Developed by <a href="https://github.com/salihdhaifullah" className="hover:underline text-blue-400">Salih Dhaifullah</a>, Powered by <a href="https://quicksite.guru/" className="hover:underline text-blue-400">quicksite.guru</a></h3>
      </div>

    </footer>
  )
}

export default Footer
