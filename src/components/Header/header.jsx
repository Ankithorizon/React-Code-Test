import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";

import "./style.css";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <>
      <Navbar variant="light" expand="lg" sticky="top" className="navBar">
        {/*
        <Container>
        */}
        <Navbar.Brand href="/home">
          <span>React-Code-Test</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
            <Link to={"/counter"} className="nav-link">
              Counter
            </Link>
            <Link to={"/remote-api"} className="nav-link">
              Remote-Api
            </Link>
            <Link to={"/form-submit"} className="nav-link">
              Form-Submit
            </Link>
            <Link to={"/paging"} className="nav-link">
              Paging
            </Link>
            <Link to={"/master-detail"} className="nav-link">
              Master-Detail
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/*
        </Container>
        */}
      </Navbar>
    </>
  );
};

export default Header;
