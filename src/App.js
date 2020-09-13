import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HeadBar } from './components/headbar/HeadBar';
import SideBar from './components/sidebar/SideBar';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Join } from './components/join/Join';
import User from './components/user/User'
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import ForgetPassword from './components/forget-password/ForgetPassword'
import BackImg from './background/back.jpg';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import Package from './components/packages/Package';
import Contact from './components/contact/Contact'

const ParentContainer = styled.div`
  width:100%;
  height:100%;
`;

const MainContent = styled.div`
  width: 75%;
  height:100vh;
  margin-left:25%;
  padding-bottom: 0px;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.9));
`;

function App() {
  return (
    <ParentContainer><React.Fragment>
      <Router styles={{ backgroundImage:`url(${BackImg})` }}>        
          <SideBar />
          <MainContent>
            <HeadBar />
            <Switch styles={{ backgroundImage:`url(${BackImg})` }}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/join" component={Join} />
              <Route path="/user" component={User} />
              <Route path="/contact" component={Contact} />
              <Route path = "/packages" component = {Package} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={SignUp} />
              <Route path="/forget-password" component={ForgetPassword} />
            </Switch>
          </MainContent>
      </Router>
    </React.Fragment></ParentContainer>
  );
}

export default App;
