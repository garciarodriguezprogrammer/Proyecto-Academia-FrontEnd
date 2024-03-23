import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate()  
  const token = localStorage.getItem('token')
  const logMeOut = () => {
     localStorage.setItem('token', '') 
     localStorage.setItem('decoded', JSON.stringify({})) 
     setTimeout(() => {
      navigate('/personajes')
     }, 600)
     
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mi fabulosa App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="personajes">Personajes</Nav.Link>
            <NavDropdown title="Mi cuenta" id="basic-nav-dropdown">

              {!token
              ?(
                <>
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/register">Registrarse</NavDropdown.Item>
                </>
              ) : (
                <>
                <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                <NavDropdown.Item href="register">Mis citas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => logMeOut()}>Log out</NavDropdown.Item>
                </>

              )
              }            
           </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



