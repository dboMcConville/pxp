import React from "react";

function Navbar() {
  return (
    //<meta name="viewport" content="width=device-width, initial-scale=1">
    <section className="top-nav">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" for="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <a href="/" className="menuLink">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/about" className="menuLink">
            <span>About</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
