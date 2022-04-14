import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import Kakum from "assets/images/kakum-small.jpg";
import DiscoveryCard from "./DiscoveryCard";

export const Discover = () => {
  return (
    <div className="p-10  grid grid-cols-1 max-w-6xl mx-auto gap-4 md:grid-cols-2 lg:grid-cols-3">
      <DiscoveryCard />
      <DiscoveryCard />
      <DiscoveryCard />
    </div>
  );
};
