import React, {Component} from 'react';
import {Card, CardDeck, CardImg, Col, Container, Form, FormControl, Media, Navbar, Row, Button} from "react-bootstrap";
import logo from './logo.png';
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
    render() {
        return (
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" mb={"5"}>
                        <img
                            src={logo}
                            height="30"
                            width="80"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                        <dfn>Hard workers rowers: "We row you relax"</dfn>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            </>
        );
    }
}

export default Header;