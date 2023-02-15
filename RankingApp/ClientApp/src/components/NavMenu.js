import React, { Component } from 'react';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <header>
        <Navbar bg={"light"} expand={"lg"}>
          <Container>
            <Navbar.Brand as={Link} to="/">RankingApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
                  <Nav.Link as={Link} to="/fetch-data">Fetch data</Nav.Link>
                  <Nav.Link as={Link} to="/rank-items">Rank Items</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
