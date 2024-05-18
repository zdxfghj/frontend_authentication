import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'


export function Navigation() {
  const isAuth = useSelector((state) => state.counter.isAuth)

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          JWT Authentication
        </Navbar.Brand>
        <Nav className="me-auto">
          {isAuth && (
            <Nav.Link as={NavLink} to="/" exact activeClassName="active">
              Home
            </Nav.Link>
          )}
        </Nav>
      
        <Nav>
          {isAuth ? (
            <Nav.Link as={NavLink} to="/user/logout" exact activeClassName="active">
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link as={NavLink} to="/user/login" exact activeClassName="active">
              Login
            </Nav.Link>
          )}
        </Nav>
        <Nav>
        <Nav.Link as={NavLink} to="/user/registration/" exact activeClassName="active">
                Registration
            </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}