import { Navbar, Nav } from 'react-bootstrap';

const SiteNavBar = () => (
  <Navbar bg='primary' variant='dark' expand='lg'>
    <Navbar.Brand href='/'>THANG'S WEATHER APP</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <Nav.Link href='https://github.com/lethang7794/weather-app'>
          Github
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default SiteNavBar;
