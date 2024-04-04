import React from "react";
import Image from "next/image";

export default function Logo() {
    return (
        <div className="w-[150px] h-[150px] max-sm:w-[100px] flex items-center max-sm:h-[100px] max-md:w-[120px] max-md:h-[120px]">
            <Image src={"/img/convertify_logo.png"} alt="logo" width={150} height={150} />
        </div>
    );
}
