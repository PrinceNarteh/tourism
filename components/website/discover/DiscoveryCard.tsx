import Image from "next/image";
import React from "react";

import Kakum from "assets/images/kakum-small.jpg";

const DiscoveryCard = () => {
  return (
    <div className="h-96 rounded-lg overflow-hidden relative group cursor-pointer">
      <div className="p-0 group-hover:p-5 text-gray-200 absolute h-full z-10 transition-[padding] ease-in-out duration-500">
        <div className="border-2 flex flex-col justify-end h-full w-full rounded-lg p-5 border-white">
          <h3 className="text-2xl">Kakum National Park</h3>
          <p className="text-xl">Cape Coast</p>
        </div>
      </div>
      <div className="absolute bg-black w-full h-full opacity-50"></div>
      <Image
        layout="fill"
        // objectFit="cover"
        className="-z-10 transition ease-in-out duration-500 transform group-hover:scale-110"
        src={Kakum}
      />
    </div>
  );
};

export default DiscoveryCard;
