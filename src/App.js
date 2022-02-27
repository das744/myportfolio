import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'


import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/> 
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path ='/Experience' component={Experience}/>
          <Route path='/Projects' component={Projects} />
          <Route path='/Skills' component={Skills} />
          <Route path='/Contact' component={Contact} />

        
       
        </Switch>
       
      </Router>
    </>
  );
}

export default App;
