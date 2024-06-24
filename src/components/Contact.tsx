import { GiCoffeeBeans } from "react-icons/gi"

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col gap-10 justify-between items-center px-10">

      <div className="justify-center items-center flex text-gray-200 flex-col">
        <h1 className="text-6xl">Contact Us</h1>
        <div className="flex flex-row gap-2 justify-center items-center">
          <hr className="h-px w-20" />
          <GiCoffeeBeans className="text-4xl" />
          <hr className="h-px w-20" />
        </div>
      </div>


      <div className="flex flex-row gap-5 p-10 w-[calc((2*40px)+20px+1000px)] bg-[rgba(0,0,0,0.9)] shadow-md">
        <form id="contact-form" className="w-[500px] h-[375px] flex flex-col justify-between items-center">
          <div className="flex flex-row gap-4 w-full">
            <input type="text" id="first-name" className="w-full p-2 bg-[rgb(50,50,50)] rounded-md focus:outline-gray-200 outline-none text-gray-200" placeholder="FirstName" />
            <input type="text" id="last-name" className="w-full p-2 bg-[rgb(50,50,50)] rounded-md focus:outline-gray-200 outline-none text-gray-200" placeholder="LastName" />
          </div>
          <input type="text" id="email" className="w-full p-2 bg-[rgb(50,50,50)] rounded-md focus:outline-gray-200 outline-none text-gray-200" placeholder="Email" />
          <textarea id="message" className="resize-none h-40 w-full p-2 bg-[rgb(50,50,50)] rounded-md focus:outline-gray-200 outline-none text-gray-200" placeholder="Message" />

          <button type="submit" className="bg-[rgb(50,50,50)] py-4 px-8 w-fit hover:bg-transparent hover:outline-2 outline-0 text-xl outline hover:rounded-md transition-all text-gray-200">
            Submit
          </button>
        </form>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1952.6290068102683!2d-74.00408148284076!3d40.67021101910211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sly!4v1718713508430!5m2!1sen!2sly" width="500" height="375" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  )
}

export default Contact;