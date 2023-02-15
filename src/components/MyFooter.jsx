import { Container, Nav, Row, Col, Button } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container>
      <footer style={{ backgroundColor: "#221f1f", color: "white" }}>
        <Row className="text-center mt-5">
          <Col xs={6} className="offset-3">
            <Row>
              <Col className="text-left mb-2">
                {/* <i class="fa fa-facebook footer-icon"></i>
                <i class="fa fa-instagram footer-icon"></i>
                <i class="fa fa-twitter footer-icon"></i>
                <i class="fa fa-youtube footer-icon"></i> */}
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
              <Col>
                <Row>
                  <Col className="footer-links">
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Audio and Subtitles
                    </Nav.Link>
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Media Center
                    </Nav.Link>
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Privacy
                    </Nav.Link>
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Contact us
                    </Nav.Link>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Audio Description
                    </Nav.Link>
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Investor Relations
                    </Nav.Link>
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Legal Notices
                    </Nav.Link>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Help Center
                    </Nav.Link>
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Jobs
                    </Nav.Link>
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Cookie Preferences
                    </Nav.Link>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Gift Cards
                    </Nav.Link>
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Terms of Use
                    </Nav.Link>
                    <Nav.Link href="#" alt="footer link" className="text-secondary">
                      Corporate Information
                    </Nav.Link>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="text-left mb-2">
                <Button
                  variant="dark"
                  style={{ backgroundColor: "#221f1f" }}
                  className="btn btn-sm footer-button rounded-0 mt-3 border border border-secondary text-secondary"
                >
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="text-left mb-2 mt-2 copyright">© 1997-2022 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default MyFooter;
