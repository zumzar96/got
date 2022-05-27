import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Header.scss";
import { store } from '../store'
import { userActions } from '../store/userSlice';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap'



const NavB = () => {
  const Loggedin = useSelector((state) => state.user.isLogedin);
  const navigate = useNavigate();

  const logOutHandler = () => {
    store.dispatch(userActions.logout())
    navigate("login")};


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

            {Loggedin ? (<Button onClick={logOutHandler}>
              logout 
            </Button>):null}
          </nav>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavB;
