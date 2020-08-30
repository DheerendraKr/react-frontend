import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HeadBar } from './components/headbar/HeadBar';
import SideBar from './components/sidebar/SideBar';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import User from './components/user/User'




function App() {
  return (
    <React.Fragment>
      <Router>        
          <SideBar />
          <HeadBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User} />
          </Switch>
        
      </Router>
    </React.Fragment>
  );
}

export default App;
