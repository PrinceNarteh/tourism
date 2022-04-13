import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import Kakum from "assets/images/kakum-small.jpg";

export const Discover = () => {
  return (
    <div className="p-10 grid grid-cols-1 max-w-6xl mx-auto gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg overflow-hidden relative group cursor-pointer">
        <div className="p-5 text-gray-200 absolute h-full  z-10">
          <div className="border-2 w-full h-full rounded-lg p-5 border-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia id
            unde tempora autem fuga? Quibusdam, consequatur obcaecati, ullam
            veniam harum commodi corrupti exercitationem velit a magni fugit
            quasi aspernatur eaque.
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
      <div>
        <Image src={Kakum} />
      </div>
      <div>
        <Image src={Kakum} />
      </div>
    </div>
  );
};
