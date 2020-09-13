import React, { Component } from 'react';
import styled from 'styled-components';
const AboutPageContents = styled.div`
    height: 76%;
    width: 98%;
    margin-left: 1%
    margin-top: 3%;
    margin-right: 1%;
    border-radius: 3px;
    box-shadow: 1px 1px 5px #001f4d;
    padding: 1em;
    h2{
        width: 98%;
        text-align: center;
    }
    p{
        width: 98%;
        font-size: larger;
        text-align: justify;
    }
`;

export const About = () => (
    <AboutPageContents>
        <h2>About Us</h2>
        <p>
            Emerging trends in marketing have completely changed the way as you know.
            A network marketing business may require you to build a netwok of bussiness partners or
            sales people to assist with lead generation and cosing sales. Our companie's onywish to 
            help the needy. We want to support the youth only. We attempt level best to stop from [need-clarification]
            with a modest investment, you can fullfi the desire of your errands. We sell the plan and product. The company
            receives any amount as the donation for our organisation. The company ony run the support
            and help rotation plan.
        </p>
        <p>Contact Us:</p>
        <p>Ankur Srivastava: <a href="tel:123-456-7890">123-456-7890</a></p>
    </AboutPageContents>
)
