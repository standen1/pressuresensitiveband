import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Listen from './components/Listen/Listen';
import Contact from './components/Contact/Contact';
import './App.css';
import { Nav, Navbar, NavbarCollapse, NavbarContext, NavbarToggle } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//THIS IS THE MAIN APP
//The div with the className 'MainNav' is the main navigation bar.  Which is
//a bootstrap navbar that will collapse into a button based dropdown menu when
//the screen/window size is smaller.  I have wrapped it in a Router from React 
//Router that takes each one and creates a case for a Switch down below that 
//determines which 'page' is rendered based on which Navigation Link is clicked.

function App() {
  return (
    <div className="App">
      <header className="App-header f2">
        <h1 id="#psLogo">pressure sensitive</h1>
      </header>
      <Router>
        <div className='MainNav'>
          <Navbar bg="white" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto MainMenu">
                <Nav.Link as={Link} to="/" className="pr-4">home</Nav.Link>
                <Nav.Link as={Link} to="/events" className="pr-4">events</Nav.Link>
                <Nav.Link as={Link} to="/listen" className="pr-4">listen</Nav.Link>
                <Nav.Link href="https://pressuresensitive.bandcamp.com/" className="pr-4">store</Nav.Link>
                <Nav.Link as={Link} to="/contact">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="Pages" id="content-wrap">
              <Switch>
                <Route path="/events">
                  <Events />
                </Route>
                <Route path="/listen">
                  <Listen />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
        </div>
      </Router>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
