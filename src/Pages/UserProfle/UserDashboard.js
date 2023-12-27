import React from "react";
import Header from "../../components/Header/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { UserSideBar } from "./UserSideBar";
import { JobSearch } from "./JobSearch";

export default function UserDashboard() {
  const now = 80;
  return (
    <>
      <Header />
      <Container>
        <JobSearch/>
        <UserSideBar />
      </Container>
      <Footer />
    </>
  );
}
