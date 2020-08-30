import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
    width:75%;
    height:20%
    margin-left:25%;
    box-shadow: 1px 3px 5px #004d4d;
  .navbar { 
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(0,77,77,0.38));
        /*background-color:#fff;*/
        opacity:.8;
        color: #000;
    }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #000;
    font-size:1.3em;
    &:hover { font-weight: bold; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #000;
    
  }
`;

const UserLabel = styled.div`
  width: 100%;
  
`;

const user = "Test User";

export const HeadBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand>
                <h1>MBS</h1>
                <h4>Marvellous Security Bussiness Plan</h4>
            </Navbar.Brand>
            <Nav className="ml-auto" >
                <Nav.Item><Nav.Link href="/user">
                    <h3 className="fa fa-user"> &nbsp;&nbsp;Hello {user}</h3>
                </Nav.Link></Nav.Item>
            </Nav>
        </Navbar>
    </Styles>
)