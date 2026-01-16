import "../styles/navbar.css";
import logo from "../assets/logo.png"; // we’ll add this next

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="Fitness Logo" />
          <span>SHAPE</span>
        </div>

        <nav className="navbar__menu">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
