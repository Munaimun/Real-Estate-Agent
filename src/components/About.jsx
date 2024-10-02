import WorkCard from "./cards/WorkCard";

// imges of services
import dd from "../assets/dd.png";
import charity from "../assets/charity.png";
import divorce from "../assets/divorce.png";
import property from "../assets/property.png";
import market from "../assets/market.png";

//images of complete projects
import westLe from "../assets/west-la.png";
import westHollywood from "../assets/west-hollywood.png";
import inland from "../assets/inland.png";
import hollywood from "../assets/hollywood.png";
import southBay from "../assets/south-bay.png";
import mojave from "../assets/mojave.png";

const cardDetails = [
  {
    image: dd,
    title: "DATE OF DEATH",
    details:
      "An essential component of estate planning and inheritance resolution, this appraisal establishes the fair market value of a property as of the date of the owner’s death. It plays a critical role in determining the step-up in basis for tax purposes, thereby assisting heirs in minimizing capital gains taxes when selling inherited property.",
  },
  {
    image: charity,
    title: "TRUST ADMINISTRATION",
    details:
      "When donating real estate to a charitable organization, this appraisal determines the property's fair market value, ensuring compliance with IRS regulations for tax deductions. Accurate valuation is crucial for maximizing potential tax benefits and meeting the stringent documentation requirements for charitable contributions.",
  },
  {
    image: divorce,
    title: "ESTATE PLANNING",
    details:
      "This appraisal is utilized in legal proceedings to establish the fair market value of a property in divorce settlements or other disputes. It offers an objective valuation that supports the equitable division of assets and helps resolve conflicts fairly. This service ensures a transparent and unbiased valuation, which is vital for legal and financial negotiations.",
  },
  {
    image: property,
    title: "ASSET MANAGEMENT",
    details:
      "This appraisal aids property owners in contesting their property tax assessments by providing an independent evaluation of the property's market value. It helps substantiate claims that the current tax assessment may be excessive. With a detailed and accurate valuation, this service supports efforts to potentially reduce property taxes and ensure fair taxation.",
  },
  {
    image: market,
    title: "TAX PLANNING",
    details:
      "This appraisal delivers a thorough assessment of a property's current market value, considering recent sales, market trends, and property specifics. It is crucial for making informed decisions regarding buying, selling, or refinancing. This service provides a reliable estimate to guide transactions, investment analysis, and financial planning.",
  },
];

const About = () => {
  return (
    <div className="text-center">
      {/* CARDs */}
      <div className="max-w-screen-xl m-auto text-center">
        <p className="text-black text-5xl font-bold tracking-widest m-6">
          TRUST & ESTATE
        </p>

        {/* WORKS SECTION */}
        <div className="flex flex-wrap justify-center gap-6">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className={`w-full sm:w-[calc(33%-1.5rem)] md:w-[calc(33%-1.5rem)] lg:w-[calc(33%-1.5rem)] ${
                index >= 3 ? "sm:w-[calc(50%-1.5rem)]" : ""
              }`}
            >
              <WorkCard
                image={card.image}
                title={card.title}
                details={card.details}
              />
            </div>
          ))}
        </div>
      </div>

      {/* MEASUREMENT SERVICE */}
      <div className="bg-cyan-950 text-center h-max">
        <p className="mt-6 sm:text-5xl text-gray-300 font-bold tracking-widest leading-relaxed p-12">
          MEASUREMENT <br /> SERVICES
        </p>

        <p className="text-slate-100 w-96 sm:w-2/3 m-auto tracking-widest leading-relaxed">
          We make it easy to measure your property improvements—whether
          it&apos;s a home, multi-family, industrial, retail, or office
          property. Harnessing advanced software, we produce clear, precise
          floor plans, providing you with reliable and easy-to-understand data.
        </p>

        <button className="bg-slate-300 p-4 m-6 font-semibold hover:bg-black hover:text-white transition duration-300 ease-in-out">
          GET A QUOTE TODAY!
        </button>
      </div>

      {/* RECENT COMPLETE PROJECTS */}
      <p className="mt-16 text-lg sm:text-5xl sm:font-bold tracking-widest mb-8 text-blue-950 animate-bounce">
        RECENTLY COMPLETED <br /> PROJECTS
      </p>

      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 place-items-center">
        {/* Project 1 */}
        <div className="text-center">
          <img src={westLe} alt="West LA Project" className="w-96 h-auto" />
          <p className="mt-4 font-semibold text-lg">WEST LA MULTI-FAMILY</p>
        </div>

        {/* Project 2 */}
        <div className="text-center">
          <img
            src={westHollywood}
            alt="West Hollywood Project"
            className="w-96 h-auto"
          />
          <p className="mt-4 font-semibold text-lg">WEST HOLLYWOOD RETAIL</p>
        </div>

        {/* Project 3 */}
        <div className="text-center">
          <img src={inland} alt="Inland Project" className="w-96 h-auto" />
          <p className="mt-4 font-semibold text-lg">INLAND EMPIRE INDUSTRIAL</p>
        </div>

        {/* Project 4 */}
        <div className="text-center">
          <img
            src={hollywood}
            alt="Hollywood Project"
            className="w-96 h-auto"
          />
          <p className="mt-4 font-semibold text-lg">HOLLYWOOD OFFICE</p>
        </div>

        {/* Project 5 */}
        <div className="text-center">
          <img src={southBay} alt="South Bay Project" className="w-96 h-auto" />
          <p className="mt-4 font-semibold text-lg">SOUTH BAY SPECIAL USE</p>
        </div>

        {/* Project 6 */}
        <div className="text-center">
          <img src={mojave} alt="Mojave Project" className="w-96 h-auto" />
          <p className="mt-4 font-semibold text-lg">MOJAVE LAND</p>
        </div>
      </div>
    </div>
  );
};

export default About;
