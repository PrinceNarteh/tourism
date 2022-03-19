import { Navbar } from "components/Navbar";
import { Sidebar } from "components/Sidebar";
import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <DashboardStlye>
      <HiddenInput type="checkbox" id="checkbox" />
      <Navbar />
      <Sidebar />
    </DashboardStlye>
  );
};

export default Dashboard;

const DashboardStlye = styled.div``;

const HiddenInput = styled.input`
  display: none;
`;
