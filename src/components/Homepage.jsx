import leon from "../assets/Lyon Stahl.png";
import leonlogo from "../assets/lyonlogo.png";
import profile from "../assets/profile.png";
import firstwork from "../assets/1st work.png";

import Slider from "./Slider";

const Homepage = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="header ml-8 mt-42">
          <p className="font-black tracking-widest md:text-6xl sm:text-3xl mb-6">
            OUR <br /> BACKGROUND
          </p>
          <p className="sm:w-3/4 leading-8">
            At our firm, we&apos&apos;re more than just a team of
            experts—we&apos&apos;re your partners in navigating the complex
            world of real estate in Los Angeles County. Led by a Certified
            General Real Estate Appraiser and Multi-Family Real Estate Broker
            with extensive experience, we&apos;ve appraised hundreds of
            commercial properties across Southern California and successfully
            closed over $18 million in real estate transactions.
          </p>
          <div className="mt-6 float-end">
            <img src={leon} alt="" />
            <img src={leonlogo} alt="" className="ml-12" />
          </div>
        </div>
      </div>

      {/* IMAGE AND DETAILS */}
      <div className="bg-slate-300 max-w-screen-2xl mt-56 flex flex-col sm:flex-row justify-around p-12">
        <div className="max-w-screen-lg">
          <img src={profile} alt="" />
          <button className="bg-slate-600 mt-6 p-3 text-xs text-white font-bold hover:bg-white hover:text-black">
            DOWNLOAD CV
          </button>
        </div>

        <div className="sm:w-2/4 sm:justify-center">
          <p className="font-bold text-sm sm:text-6xl sm:ml-0 ml-24 sm:m-0 m-8 tracking-widest">
            SAMUEL <br /> MURPHY
          </p>
          <p className="sm:w-2/3 w-full mt-6 ml-6">
            Sam prides himself in offering personalized, one-on-one service,
            ensuring you get the attention and expertise you deserve. Whether
            you&apos;re dealing with the intricacies of the Purchase, Sale,
            Step-Up in Basis, Hard Money Lending, or 1031 Exchange processes,
            we&apos;re here to guide you every step of the way with a deep
            understanding and commitment to your needs.
          </p>

          <div className="flex flex-col sm:flex-row text-center sm:justify-between mt-12 lg:flex-row">
            <div className="sm:mb-0 mb-6">
              <a href="#" className="text-gray-500 underline">
                samsdod.com
              </a>
              <br className="mb-6" />
              <a href="#" className="text-gray-500 underline">
                310-650-8798
              </a>
            </div>

            <div className="text-xs sm:text-xl">
              <a href="#" className="tracking-widest font-bold">
                DRE#02098340
              </a>{" "}
              <br />
              <a href="#" className="tracking-widest font-bold">
                BREA#3012893
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Get quote Section */}
      <div className="w-4/6 m-auto text-center mt-24">
        <p className="max-w-screen-lg font-bold text-lg sm:text-6xl m-auto leading-relaxed">
          ORDER AN APPRAISAL, RISK-FREE.
        </p>
        <p className="m-auto max-w-screen-md leading-relaxed mt-12">
          With 90% of our business driven by referrals, our reputation is our
          most valuable asset. Our clients trust us for unbiased, accurate
          assessments, and we maintain that trust by collaborating with top
          industry professionals—brokers, investors, and key market
          participants. Our team excels at handling specialized, niche
          assignments, and we stand behind our work with a 100% satisfaction
          guarantee.
        </p>
        <button className="bg-sky-950 p-4 font-bold text-white text-xs tracking-widest mt-14">
          GET A QUOTE TODAY
        </button>

        {/* slider section */}
        <div className="mt-12">
          <Slider />
        </div>
      </div>

      <div className="max-w-screen-xl m-auto text-center flex flex-col mt-48">
        <p className="text-4xl font-bold m-11 italic tracking-widest">
          RECENT POSTS
        </p>

        {/* RECENT WORKS CARDS */}
        <div className="flex flex-col sm:flex-row space-x-4 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-gray-100 p-6">
            <img src={firstwork} alt="Card 1" className="w-full" />
            <p className="mt-2 font-semibold hover:text-cyan-300">
              Charitable Donation - The Appraisal Process
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-gray-100 items-center p-6">
            <img src={firstwork} alt="Card 2" className="w-full" />
            <p className="mt-2 font-semibold hover:text-cyan-300">
              Charitable Donation - The Appraisal Process
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-gray-100 items-center p-6">
            <img src={firstwork} alt="Card 3" className="w-full" />
            <p className="mt-2 font-semibold hover:text-cyan-300">
              Charitable Donation - The Appraisal Process
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
