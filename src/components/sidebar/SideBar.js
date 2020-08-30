import React, { Component } from 'react';
import './SideBar.css';
import styled from 'styled-components';
import NavItems from './NavItems'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import logo from './app_icon_1.png';

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 25%;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  /*top: 3.4em; */     /* Stay at the top */
  background-color: #004d4d; /* Black */
  /*overflow-x: hidden;*/     /* Disable horizontal scroll */
  
`;

const NavItemsContainer = styled.div`
    width: 100%;
    height: 20%;
`;

const containerstyle = {
    width: '100%',
} ;


const AppIcon = styled.div`
    width: 100%;
    height:45%;
    background-image: linear-gradient(to bottom, rgba(255,255,255,.9), rgba(255,0,0,0));
`;


class Icon extends React.Component{
    render(){
        return(
            <img src={logo} style={{ width:'100%', height:'100%'}} alt="Logo" />
        );
    }
}

class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/', /* path is used as id to check which NavItem is active basically */
                    name: 'Home',
                    value: 'Home',
                    /*css: 'fa fa-home',*/
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/about',
                    name: 'About',
                    value: 'About',
                    /*css: 'fa fa-book',*/
                    key: 2
                },{
                    path: '/join',
                    name: 'How To join',
                    value: 'How to join',
                    /*css: 'fa fa-users ',*/
                    key: 3
                },
            ]
        }
        
    }

    onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
    }

    render() {
        const { items, activePath } = this.state;


        return (
            <StyledSideNav>
            <AppIcon>
                <Icon></Icon>
            </AppIcon>

                {
                    /* items = just array AND map() loops thru that array AND item is param of that loop */
                    items.map((item) => {
                        /* Return however many NavItems in array to be rendered */
                        return (
                            <NavItems path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key} style={{ width: '100%' }} ></NavItems>
                        )
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

class SideBar extends React.Component {
    render() {
        return (
            
            <RouterSideNav></RouterSideNav>
        );
    }
}

export default SideBar;