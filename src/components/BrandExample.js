import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand className='me-auto'>Todo</Navbar.Brand>
        </Container>
      </Navbar>

    </>
  );
}

export default BrandExample;