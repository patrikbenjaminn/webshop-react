import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">RetroGamersHaven</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Etusivu</Nav.Link>

            <NavDropdown title="Tuoteryhmät" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Lautapelit</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Konsolipelit
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Tietokonepelit</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Tarvikkeet</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Uutuudet</NavDropdown.Item>
              <NavDropdown.Divider />
            
            </NavDropdown>

            {/* <NavDropdown title="Konsolipelit" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Tietokonepelit" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Tarvikkeet" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Uutuudet" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}

            <NavDropdown title="Asiakaspalvelu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Contact">Yhteydenottolomake</NavDropdown.Item>
              <NavDropdown.Item href="/Returning">Palautukset</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Mitäs tänne?
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" disabled>
              Admin
            </Nav.Link>
          </Nav>

          <Nav.Link href="#action2">Ostoskori</Nav.Link>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button>
          <Nav.Link href="src/components/registration.php">Kirjaudu/Rekisteröidy</Nav.Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;