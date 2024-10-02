const Footer = () => {
  return (
    <div className="m-auto w-full text-center bg-slate-500 mb-2">
      {/* The Moto */}
      <div className="italic text-3xl m-6 text-white font-semibold">
        Accurate Appraisal & <br />
        Brokerage Services | SM RE Inc.
      </div>

      <hr className="w-52 m-auto mb-6" />

      <div className="m-auto flex justify-evenly  w-9/12 mb-2">
        {/* Footer-Contact-Us */}
        <div>
          <p className="text-3xl tracking-widest font-semibold text-gray-300">
            CONTACT <br /> US
          </p>
          <hr className="border-gray-400 w-12 m-auto" />
          <p className="text-2xl mt-4">
            Tel. <span className="underline">310-650-8798</span>
          </p>
          <p className="text-2xl mt-4 underline">sam@samsdod.com</p>
        </div>

        {/* Footer-Visit-Us */}
        <div className="text-3xl tracking-widest font-semibold text-gray-300">
          Visit <br /> Us
          <hr className="border-gray-400 w-12 m-auto" />
          <p className="text-base font-thin text-black">Hermosa Beach, CA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
