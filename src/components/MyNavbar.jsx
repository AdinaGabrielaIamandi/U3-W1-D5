import { Navbar, Nav, Image, NavLink } from "react-bootstrap";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const MyNavbar = () => {
  const location = useLocation();
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f", color: "white" }}>
      <NavLink className="pl-0">
        <Image src="./assets/images/logo.png" style={{ width: "100px", height: "55px" }} />
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Link path="/" className={`nav-link font-weight-bold ${location.pathname === "" ? "active" : ""}`} to="/">
            Home
          </Link>
          <Link className={`nav-link font-weight-bold ${location.pathname === "" ? "active" : ""}`} to="/tv-shows">
            TV Shows
          </Link>
          <Nav.Link href="#link" className="font-weight-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#link" className="font-weight-bold">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#link" className="font-weight-bold">
            My List
          </Nav.Link>
        </Nav>
        <FaSearch className="mx-3" />
        <div>Kids</div>
        <FaBell className="mx-3" />
        <FaUser />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
