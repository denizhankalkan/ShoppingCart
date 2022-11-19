import {Button,Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar(){
 return (
    <NavbarBs className="Navbar">
    <Container>
      <div>
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/store" as={NavLink}>
          About
        </Nav.Link>
        <Nav.Link to="/about" as={NavLink}>
          Store
        </Nav.Link>
      </Nav>

      <Button
       style={{width: "3rem", height: "3rem", position: "relative"}}
       variant="outline-primary"
       className="rounded-circle"
       >
       Sepet
      </Button>
      </div>
    </Container>
   </NavbarBs>
 )
}