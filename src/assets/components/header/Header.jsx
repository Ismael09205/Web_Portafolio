import { Main } from '../main/Main';
import './Header.css';
import { Link } from "react-router";
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar__container">
        <p className="navbar__logo">Grupo de Desarrolladores #4</p>
        <ul className="navbar__menu">
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#project">Proyectos</a></li>
          <li><a href="#container">Contacto</a></li>
          <li><Link to="/login">Iniciar Sesion</Link></li>
        </ul>
      </nav>
      <Main />
    </header>
  );
};

export default Header;
