import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecode } from "jwt-decode"; //Añadir esto
import { logOut } from '../../features/AuthSlice';

export const Header = () => {
  const token = useSelector(state => state.auth.token) //Añadir esto
  console.log("esto es token header " + token)
  const decodedToken = jwtDecode(token) //Añadir esto
  console.log("esto es decodedToken header " + decodedToken)
  const rol = decodedToken.rol //Añadir esto
  console.log("esto es decodedToken.rol header " + decodedToken.rol)

  const isLoggedIn = useSelector(state => state.auth.isAuthenticated); // Accede al estado de autenticación desde Redux
  const dispatch = useDispatch();
  const navegar = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    setTimeout(() => {
      navegar('/home');
    }, 600);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">All4dancing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Mi cuenta" id="basic-nav-dropdown">

              {!token
                ? (
                  <>
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register">Registrarse</NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/myInscriptions">Mis Inscripciones</Nav.Link>
                    <NavDropdown title="Clases" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/classes">Clases disponibles</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Clases" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/teacherClasses">Ver clases programadas</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/allUsers">Usuarios</Nav.Link>
                    <NavDropdown title="Clases" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/adminClasses">Ver todas las clases programadas</NavDropdown.Item>
                      <NavDropdown.Item href="/createClasses">Crear nueva clase</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Divider />
                    {isLoggedIn && <NavDropdown.Item onClick={handleLogout}>Cerrar sesión</NavDropdown.Item>}
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

//{rol === "admin"? ( menú admin) : ()
// }

