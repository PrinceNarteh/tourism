import { HiddenInput } from "components/HiddenInput";
import { Navbar } from "components/Navbar";
import { Sidebar } from "components/Sidebar";
import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <DashboardStyle>
      <HiddenInput type="checkbox" id="checkbox" />
      <Navbar />
      <Sidebar />
    </DashboardStyle>
  );
};

export default Dashboard;

const DashboardStyle = styled.div``;
