import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-dark">
        <div className="container">
          <ul className="nav">
            <li>
              <a href="/manajemen-buku" className="nav-link">
                Manajemen Buku
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
