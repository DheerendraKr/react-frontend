import React, { Component } from "react";
import styled from 'styled-components';

const SignUpFormContainer = styled.div`
    height: 85%;
    width: 100%;
    padding-left: 1em
    padding-top: 1em;
    padding-right: 1em;
    overflow-x:hidden;
    overflow-y: scroll;
`;

const SignUpFrame = styled.div`
    width:50%;
    min-height:90%;
    border-radius:3px;
    box-shadow: 1px 1px 10px #000d1a;
    margin-left:25%;
    margin-bottom: 5%;
    margin-top:3%;
    padding: 5% 5% 2% 5%;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.5));
    label{
        color:#000;
        font-size:1em;
    }
    h3{
        color:#000;
    }
    input{
        color:#000;
        font-size:1em;
        text-align:left;
        background-color:rgba(255,255,255,0.8);
        border: 1px solid #000;
        border-radius: 3px;
    }
    p{
        color:#000;
    }
    button{
        font-size:1em;
        text-align:center;
        opacity:0.8;
    }
`;

export default class SignUp extends Component {
    render() {
        return (
            <SignUpFormContainer><SignUpFrame>
                <form>
                    <h3>Join Us</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Mobile No.</label>
                        <input type="number" className="form-control" placeholder="Enter mobile no" />
                    </div>

                    <div className="form-group">
                        <label>Member Id</label>
                        <input type="text" className="form-control" placeholder="Enter member id" />
                    </div>

                    <div className="form-group">
                        <label>Sponser Id</label>
                        <input type="text" className="form-control" placeholder="Enter sponser id" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">Log in?</a>
                    </p>
                </form>
            </SignUpFrame></SignUpFormContainer>
        );
    }
}