// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import LatestNews from './pages/LatestNews';
import Accreditation from './pages/Accreditation';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import logo from './assets/logo.png';
import mailIcon from './assets/mail_icon.png';
import phoneIcon from './assets/phone_icon.png';
import phoneIconV2 from './assets/phone_icon_2.png';
import './styles.css'; // Import the styles.css file

const App = () => {
  const [show, setShow] = useState(false);
  const [activeKey, setActiveKey] = useState('/');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavSelect = (selectedKey: string) => {
    setActiveKey(selectedKey);
  };

  return (
    <Router>
      <Navbar className="navbar-custom" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              className="d-inline-block align-top logo"
              alt="Company logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={handleShow}
            className="d-lg-none"
          />

          <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
            <Navbar.Text className="me-4">
              <img src={mailIcon} alt="Email" className="icon" />
              <span className="icon-text">corporate@trinitymedical.com.sg</span>
            </Navbar.Text>
            <Navbar.Text>
              <img src={phoneIcon} alt="Mobile Number" className="icon" />
              <span className="icon-text">6560 7088</span>
            </Navbar.Text>
          </Navbar.Collapse>
          

          <Offcanvas show={show} onHide={handleClose} placement="end" id="offcanvasNavbar">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <Nav.Link
                  as={Link}
                  to="/"
                  className="nav-link"
                  active={activeKey === '/'}
                  onClick={() => handleNavSelect('/')}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
                  className="nav-link"
                  active={activeKey === '/about'}
                  onClick={() => handleNavSelect('/about')}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/services"
                  className="nav-link"
                  active={activeKey === '/services'}
                  onClick={() => handleNavSelect('/services')}
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/latest-news"
                  className="nav-link"
                  active={activeKey === '/latest-news'}
                  onClick={() => handleNavSelect('/latest-news')}
                >
                  Latest News
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/accreditation"
                  className="nav-link"
                  active={activeKey === '/accreditation'}
                  onClick={() => handleNavSelect('/accreditation')}
                >
                  Accreditation
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="nav-link"
                  active={activeKey === '/contact'}
                  onClick={() => handleNavSelect('/contact')}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>

      <Nav className="justify-content-center d-none d-lg-flex" id="nav-custom">
        <Nav.Link
          as={Link}
          to="/"
          className="nav-link"
          active={activeKey === '/'}
          onClick={() => handleNavSelect('/')}
        >
          Home
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/about"
          className="nav-link"
          active={activeKey === '/about'}
          onClick={() => handleNavSelect('/about')}
        >
          About
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/services"
          className="nav-link"
          active={activeKey === '/services'}
          onClick={() => handleNavSelect('/services')}
        >
          Services
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/latest-news"
          className="nav-link"
          active={activeKey === '/latest-news'}
          onClick={() => handleNavSelect('/latest-news')}
        >
          Latest News
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/accreditation"
          className="nav-link"
          active={activeKey === '/accreditation'}
          onClick={() => handleNavSelect('/accreditation')}
        >
          Accreditation
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/contact"
          className="nav-link"
          active={activeKey === '/contact'}
          onClick={() => handleNavSelect('/contact')}
        >
          Contact
        </Nav.Link>
      </Nav>

      <Container className="d-lg-none custom-container">
        <img src={phoneIconV2} alt="Mobile Number" className="icon-text-v2" />
        <span className="icon-text-v2">6560 7088</span>
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/accreditation" element={<Accreditation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;