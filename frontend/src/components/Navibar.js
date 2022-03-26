import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Routes, Route, Link } from "react-router-dom";

function Navibar() {
  return (
    <Navbar bg="primary" variant="dark">
		<Container>
			<Navbar.Brand href="/">MHS Food System</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="/">Home</Nav.Link>
				{/* <Nav.Link href="/hall-of-fame">Hall of Fame</Nav.Link> */}
			</Nav>
		</Container>
	</Navbar>
  );
}

export default Navibar;
