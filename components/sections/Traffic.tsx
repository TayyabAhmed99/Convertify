import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Traffic = () => {
  return (
    <div
      id="services"
      className="flex px-[180px]  max-md:px-[20px] max-lg:px-[60px] max-xl1:px-[100px] gap-4 mt-20 max-md:flex-col max-md:flex-wrap max-sm:flex-wrap max-lg:flex-wrap justify-center max-xl1:flex-wrap"
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[532px] max-sm:w-full max-md:w-full">
          <h3 className="text-[48px] font-semibold text-[#8AAAE5] leading-[55px] mb-6 max-md:text-[32px] max-sm:text-[28px] max-sm:leading-10 max-md:leading-10">
            RECOVER BOUNCED TRAFFIC
          </h3>
          <p className="text-[18px] text-[#8AAAE5] max-md:text-[18px] max-sm:leading-6 max-md:leading-6 max-sm:text-[16px]">
            Give users a second chance to subscribe to a free ofer.
          </p>
          <p className="text-[18px] text-[#8AAAE5] max-md:text-[18px] max-sm:leading-6 max-md:leading-6 max-sm:text-[16px]">
            Pressing go back in the browser activates it.
          </p>
          <p className="text-[18px] text-[#8AAAE5] max-md:text-[18px] max-sm:leading-6 max-md:leading-6 max-sm:text-[16px]">
            Recover traffic that would have otherwise bounced.
          </p>
          <p className="text-[18px] text-[#8AAAE5] max-md:text-[18px] max-sm:leading-6 max-md:leading-6 max-sm:text-[16px]">
            Send them either to a free page or a free trial link.
          </p>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/img/phone.png"}
          className="w-full max-w-[300px] h-[445px] mx-auto"
          width={300}
          height={445}
          alt="phone"
        />
        <div className="absolute inset-0 flex justify-center items-center mb-4">
          <Image
            src={"/img/video3.gif"}
            className="w-[195px] h-[410px] rounded-[20px]"
            width={195}
            height={410}
            alt="pic1"
          />
        </div>
      </div>
    </div>
  );
};

export default Traffic;
