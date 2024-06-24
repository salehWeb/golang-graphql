import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaPinterestP } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="py-8 px-10 flex flex-col gap-8">
      <div className="flex flex-row gap-2 justify-center items-center">
        <hr className="h-px w-full" />
        <img src="/logo.svg" alt="logo" className="h-28" />
        <hr className="h-px w-full" />
      </div>

      <div className="flex justify-center items-center">
        
        <div className="grid grid-cols-3 justify-start items-start gap-12 text-gray-200">
          <div className="flex flex-col gap-8 items-center h-full text-center">
            <h4 className="text-2xl">Address</h4>
            <p>
              Espresso Haven,
              <br />
              123 Coffee Lane town,
              <br />
              BT 45678
            </p>
          </div>

          <div className="flex flex-col gap-8 items-center h-full text-center">
            <h4 className="text-2xl">Contact info</h4>
            <p>
              (123) 456-7890
              <br />
              abc@gmail.com
            </p>
          </div>

          <div className="flex flex-col gap-8 items-center h-full text-center">
            <h4 className="text-2xl">Operation Time</h4>
            <p>
              Monday - Friday
              <br />
              Mon-Thurs 7:00 AM - 5:00 PM
              <br />
              Fri-Sun 7:00 AM - 6:00 PM
            </p>
          </div>
        </div>

      </div>

      <div className="gap-4 justify-center items-center flex">
        <a className="p-3 text-3xl text-gray-200 rounded-full bg-[rgb(50,50,50)] shadow-xl" href="FACEBOOK_LINK">
          <FaFacebookF />
        </a>

        <a className="p-3 text-3xl text-gray-200 rounded-full bg-[rgb(50,50,50)] shadow-xl" href="INSTAGRAM_LINK">
          <FaInstagram />
        </a>

        <a className="p-3 text-3xl text-gray-200 rounded-full bg-[rgb(50,50,50)] shadow-xl" href="XTWITTER_LINK">
          <FaXTwitter />
        </a>

        <a className="p-3 text-3xl text-gray-200 rounded-full bg-[rgb(50,50,50)] shadow-xl" href="PINTEREST_LINK">
          <FaPinterestP />
        </a>

        <a className="p-3 text-3xl text-gray-200 rounded-full bg-[rgb(50,50,50)] shadow-xl" href="TIKTOK_LINK">
          <FaTiktok />
        </a>

        <a className="p-3 text-3xl text-gray-200 rounded-full bg-[rgb(50,50,50)] shadow-xl" href="LINKEDININ_LINK">
          <FaLinkedinIn />
        </a>
      </div>

      <div className="flex gap-2 flex-col text-gray-200">
        <hr className="h-px w-full" />
        <h3 className="text-xl text-center">Copyright 2024 ©, Developed by <a href="https://github.com/salihdhaifullah" className="hover:underline text-blue-400">Salih Dhaifullah</a>, Powered by <a href="https://quicksite.guru/" className="hover:underline text-blue-400">quicksite.guru</a></h3>
      </div>

    </footer>
  )
}

export default Footer
