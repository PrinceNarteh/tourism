import { HiddenInput } from "components/HiddenInput";
import { Content } from "components/Content";
import { Navbar } from "components/Navbar";
import { Sidebar } from "components/Sidebar";
import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <>
      <HiddenInput type="checkbox" id="checkbox" />
      <Navbar />
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
`;
