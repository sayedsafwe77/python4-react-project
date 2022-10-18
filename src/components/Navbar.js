import Logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <section id="header">
      <a>
        <img src={Logo} className="logo" alt="" />
      </a>
      <div>
        <ul id="navbar">
          <li>
            <a>home</a>
          </li>
          <li>
            <NavLink to="/shop">shop</NavLink>
          </li>
          <li>
            <a>blog</a>
          </li>
          <li>
            <a>about</a>
          </li>
          <li>
            <a>contact</a>
          </li>
          <li id="bag-shopping">
            <NavLink to="/card" className="active">
              <i className="fa fa-bag-shopping"></i>
              <span className="card-number">1</span>
            </NavLink>
          </li>
          <a id="close">
            <i className="fa-solid fa-xmark"></i>
          </a>
        </ul>
      </div>
      <div id="mobile">
        <a>
          <i className="fa fa-bag-shopping media"></i>
        </a>
        <i id="bar" className="fa-solid fa-bars media"></i>
      </div>
    </section>
  );
}
export default Navbar;
