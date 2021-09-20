import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Morad from './Morad';
import Testimonial from './Testimonial';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>          
          <Route path="/">
            <Home />
          </Route> 
        </Switch>

        <Morad />
        <Testimonial />

      </Router>
    </div>
  );
}

export default App;
