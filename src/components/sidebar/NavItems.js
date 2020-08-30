import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';


export default class NavItems extends React.Component {

    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {

        const { active } = this.props;

        const NavIcon = styled.div`
            width: 20%;
            height: 100%; 
            color: #fff;
        `;

        const NavLabel = styled.div`
            width:100%;
            height: 100%;
        `;

        const StyledNavItems = styled.div`
            height: 10%;
            width: 100%; /* width must be same size as NavBar to center */
            text-align: center; /* Aligns <a> inside of NavIcon div */
            box-shadow: 1px 0px 3px #00e6e6;
            margin-bottom: 0;   /* Puts space between NavItems */
            padding-top:5%;
            a {
                font-size: 1.8em;
                color: ${(props) => props.active ? "white" : "#9FFFCB"};
                :hover {
                opacity: 0.7;
                text-decoration: none; /* Gets rid of underlining of icons */
                }  
            }
            `;

        return (
            <StyledNavItems active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                <NavLabel>{this.props.name}</NavLabel>
                </Link>
            </StyledNavItems>
        );
    }

}