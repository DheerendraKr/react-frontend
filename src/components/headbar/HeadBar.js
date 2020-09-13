import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
    width:100%;
    height:15%
    //box-shadow: 1px 1px 1px #004d4d;
  .navbar { 
   // background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(0,13,26,0.38));
        /*background-color:#fff;*/
        color: #fff;
    }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #000;
    font-size:1.3em;
    &:hover { font-weight: bold; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #000;
    h1{
      font-size:2.5em;
      font-weight: bolder;
    }
  }
  h3{
    &:hover{color:#e6005c;}
  }
`;

const UserLabel = styled.div`
  width: 100%;
  
`;

const user = "Login";

export const HeadBar = () => (
    <Styles>
        <Navbar  style={{height:"100%"}} expand="lg">
            <Navbar.Brand>
                <h1>MBS</h1>
                <h3>Marvelous Security Bussiness Plan</h3>
            </Navbar.Brand>
            <Nav className="ml-auto" >
                <Nav.Item><Nav.Link href="/login">
                    <h3 className="fa fa-user"> &nbsp;&nbsp;{user}</h3>
                </Nav.Link></Nav.Item>
            </Nav>
        </Navbar>
    </Styles>
)