import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function BrandExample() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand className='me-auto'>
            <Link to="/">Todo</Link>
          </Navbar.Brand>
          <Nav>
            <Link to="/signup">Sign Up</Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default BrandExample;