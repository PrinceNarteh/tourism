import Image from "next/image";
import React from "react";

import Kakum from "assets/images/kakum-small.jpg";

const DiscoveryCard = () => {
  return (
    <div className="h-96 rounded-lg overflow-hidden relative group cursor-pointer">
      <div className="absolute bg-black w-full h-full opacity-50 z-10"></div>
      <div className="p-0 group-hover:p-5 text-gray-200 h-full z-10 transition-[padding] ease-in-out duration-500 relative">
        <div className="flex flex-col justify-end h-full w- rounded-lg p-5 border-2 border-white">
          <h3 className="text-2xl">Kakum National Park</h3>
          <p className="text-xl">Cape Coast</p>
        </div>
      </div>
      <Image
        layout="fill"
        // objectFit="cover"
        className="z-0 transition ease-in-out duration-500 transform group-hover:scale-110"
        src={Kakum}
      />
    </div>
  );
};

export default DiscoveryCard;
