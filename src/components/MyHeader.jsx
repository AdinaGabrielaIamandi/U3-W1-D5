import MyNavbar from "./MyNavbar";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { Dropdown, Button } from "react-bootstrap";

const MyHeader = () => {
  return (
    <header style={{ backgroundColor: "#221f1f", color: "white" }}>
      <MyNavbar />
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4 pl-4 pr-4">TV Shows</h2>
          <Dropdown>
            <Dropdown.Toggle
              as={Button}
              variant="light"
              style={{ backgroundColor: "#221f1f" }}
              className="text-light rounded-0"
            >
              Genres &nbsp;
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: "#221f1f" }} variant="dark">
              <Dropdown.Item className="text-light">Comedy</Dropdown.Item>
              <Dropdown.Item className="text-light">Drama</Dropdown.Item>
              <Dropdown.Item className="text-light">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div style={{ fontSize: "1.2em" }}>
          <BsFillGridFill />
          <BsFillGrid3X3GapFill className="mx-4" />
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
