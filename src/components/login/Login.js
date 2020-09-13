import React, { Component } from "react";
import styled from 'styled-components';

const LoginFormContainer = styled.div`
    height: 85%;
    width: 100%;
    padding-left: 1em
    padding-top: 1em;
    padding-right: 1em;
    overflow-x:hidden;
    overflow-y: scroll;
`;

const LoginFrame = styled.div`
    width:50%;
    min-height:70%;
    border-radius:3px;
    box-shadow: 1px 1px 10px #000d1a;
    margin-left:25%;
    margin-top:3%;
    margin-bottom: 2%;
    padding: 5% 5% 1% 5%;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.5));
    label{
        color:#000;
        font-size:1em;
    }
    h3{
        color:#00;
    }
    input{
        color:#000;
        font-size:1em;
        text-align:center;
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

export default class Login extends Component {
    render() {
        return (
            <LoginFormContainer><LoginFrame>

                <form>
                    <h3>Log In</h3>

                    <div className="form-group">
                        <label>Member Id</label>
                        <input type="text" className="form-control" placeholder="Enter member id" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="/forget-password">password?</a>
                    </p>
                    <p className="forgot-password text-right">
                        Wants To Join Us?  <a href="/register">SignUp Now</a>
                    </p>
                </form>

            </LoginFrame></LoginFormContainer>
        );
    }
}