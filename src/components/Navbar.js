import React, { useState } from "react";

import "./Header.scss";



const NavB = () => {
  

  return (
    <div className="header">
      <div className="header__content">
        <div>
          <span className="logo">Code Focus</span>
        </div>
        <div>
          <nav className="nav">
            <a className="nav__item" href={"/"}>
              home
            </a>
            <a className="nav__item" href={"/books"}>
              books
            </a>
            <a className="nav__item" href={"/login"}>
              login
            </a>
          </nav>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavB;
