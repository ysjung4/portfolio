// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience'
import Portfolio from "./components/Portfolio";
import Gamja_Main from "./gamja/Gamja_Main";

function App() {
  return (
      <Router>
        <div>
          <nav className="navbar navbar-light bg-light">
            <ul>
              <li class="nav-item active">
                <Link to="/">홈</Link>
              </li>
              <li class="nav-item active">
                <Link to="/about">소개</Link>
              </li>
              <li class="nav-item active">
                <Link to="/contact">연락처</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/">
  <Experience/>
            </Route>
            <Route path="/">
              <Portfolio />
            </Route>
              <Route path="/">
                  <Gamja_Main />
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
