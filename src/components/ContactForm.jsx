import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl sm:text-5xl font-bold sm:mb-8">
        GET A FREE QUOTE TODAY!
        <a href="#" className="text-3xl ml-2 animate-pulse">
          📘
        </a>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Contact Information */}
        <div className="space-y-4 mt-12">
          <div className="flex items-center space-x-2">
            <span className="material-icons">location_on</span>
            <p>Hermosa Beach, California</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons">phone</span>
            <a href="tel:3106508798" className="hover:text-blue-500">
              310-650-8798
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons">email</span>
            <a href="mailto:sam@samsdod.com" className="hover:text-blue-500">
              sam@samsdod.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start space-x-6 text-4xl text-gray-600 mt-8">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-blue-600 transition duration-300" />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-500 transition duration-300" />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-600 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-8 border rounded-lg">
          <form className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="block w-full py-3 text-lg font-semibold hover:text-gray-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
