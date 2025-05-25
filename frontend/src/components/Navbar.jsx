import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/model">Model</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Link to="/model" className="page-btn">Predict</Link>
    </div>
  );
};

export default Navbar;
