import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-dark">
        <div className="container">
          <ul className="nav">
            <li>
              <Link to="/hello" className="nav-link">
                Hello World
              </Link>
            </li>
            <li>
              <Link to="/manajemen-buku" className="nav-link">
                Manajemen Buku
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
