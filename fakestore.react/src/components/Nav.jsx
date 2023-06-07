import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/img/cool.png" alt="logo" />
        <p>CoolStore</p>
      </div>
      <div className="box-navigation">
        <Link className="navigation" to="/">
          Home
        </Link>
        <Link className="navigation" to="/store">
          Store
        </Link>
        <Link className="navigation" to="/about">
          About
        </Link>
        <Link className="navigation" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
