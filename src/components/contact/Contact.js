import React, { Component } from 'react';
import styled from 'styled-components';
const ContactContent = styled.div`
    height: 80%;
    width: 100%;
    padding-left:1em;
    padding-top: 1em;
    padding-right: 1em;
`;

class Contact extends React.Component{
    render(){
        return(
            <ContactContent><h1>Contact Us</h1></ContactContent>
        );
    }
}

export default Contact;
