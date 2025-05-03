import { Link } from 'react-scroll';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">My Portfolio</div>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500} offset={-70}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-70}>About</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link></li>
        <li><Link to="certificates" smooth={true} duration={500} offset={-70}>Certificates</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
      </ul>
    </nav>
  );
}
