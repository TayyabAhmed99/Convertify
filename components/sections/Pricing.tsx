import React from "react";

const Pricing = () => {
  return (
    <div id="pricing" className="flex justify-center items-center mt-20 px-[180px]  max-md:px-[20px] max-lg:px-[60px] max-xl1:px-[100px] max-sm:px-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold text-[#8AAAE5] text-center mb-2 max-sm:text-[28px] max-md:text-[32px]">
          Pricing
        </h2>
        <p className="text-lg text-[#8AAAE5] text-center mb-6">
          Discounts for 4+ links
        </p>
        <div className="flex justify-center items-center gap-10 max-sm:flex-wrap  max-md:flex-wrap  max-lg:flex-wrap">
          <div className="rounded-lg px-8 py-6 max-sm:px-6 max-sm:py-6 flex flex-col  items-center border-1 border-gray-400 w-full h-[450px] max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full max-xl1:w-full max-lg1:w-full max-md1:w-full">
            <h4 className="text-[#8AAAE5] text-4xl font-semibold mb-4">
              Starter
            </h4>
            <span className="text-[#8AAAE5] text-base">
              <span className="text-[#8AAAE5] text-3xl font-semibold mr-1">
                49$
              </span>
              per link/monthly
            </span>
            <ul className="text-[#8AAAE5] text-lg text-center mt-10">
              <li className="text-[#8AAAE5] text-lg mb-2">Direct redirect</li>
              <li className="text-[#8AAAE5] text-lg mb-2">Cloaked link</li>
              <li className="text-[#8AAAE5] text-lg mb-2">Escape in-app browser</li>
              <li className="text-[#8AAAE5] text-lg mb-2">
                Custom analytics dashboard
              </li>
            </ul>
          </div>
          <div className="rounded-lg px-8 py-6 max-sm:px-6 max-sm:py-6 flex flex-col  items-center border-1 border-gray-400 w-full h-[450px] max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full max-xl1:w-full max-lg1:w-full max-md1:w-full">
            <h4 className="text-[#8AAAE5] text-4xl font-semibold mb-4">
              Medium
            </h4>
            <span className="text-[#8AAAE5] text-base">
              <span className="text-[#8AAAE5] text-3xl font-semibold mr-1">
                59$
              </span>
              per link/monthly
            </span>
            <ul className="text-[#8AAAE5] text-lg text-center mt-10">
              <li className="text-[#8AAAE5] text-lg mb-2">Direct redirect</li>
              <li className="text-[#8AAAE5] text-lg mb-2">Cloaked link</li>
              <li className="text-[#8AAAE5] text-lg mb-2">Escape in-app browser</li>
              <li className="text-[#8AAAE5] text-lg mb-2">
                Custom analytics dashboard
              </li>
              <li className="text-[#8AAAE5] text-lg">
                ⭐ Recover bounced traffic
              </li>
            </ul>
          </div>
          <div className="rounded-lg px-8 py-6 max-sm:px-6 max-sm:py-6 flex flex-col  items-center border-1 border-gray-400 w-full h-[450px] max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full max-xl1:w-full max-lg1:w-full max-md1:w-full">
            <h4 className="text-[#8AAAE5] text-4xl font-semibold mb-4">
              Pro
            </h4>
            <span className="text-[#8AAAE5] text-base">
              <span className="text-[#8AAAE5] text-3xl font-semibold mr-1">
                69$
              </span>
              per link/monthly
            </span>
            <ul className="text-[#8AAAE5] text-lg text-center mt-10">
              <li className="text-[#8AAAE5] text-lg mb-2">⭐ Landing page with location </li>
              <li className="text-[#8AAAE5] text-lg mb-2">Cloaked link</li>
              <li className="text-[#8AAAE5] text-lg mb-2">Escape in-app browser</li>
              <li className="text-[#8AAAE5] text-lg mb-2">
                Custom analytics dashboard
              </li>
              <li className="text-[#8AAAE5] text-lg">
                ⭐ Recover bounced traffic
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
