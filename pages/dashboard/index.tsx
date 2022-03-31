import { HiddenInput } from "components/dashboard/HiddenInput";
import { Content } from "components/dashboard/Content";
import { Navbar } from "components/dashboard/Navbar";
import { Sidebar } from "components/dashboard/Sidebar";
import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <>
      <HiddenInput type="checkbox" id="checkbox" />
      <Navbar />
      <>
        <Sidebar />
        <Content />
      </>
    </>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  position: sticky;
`;
