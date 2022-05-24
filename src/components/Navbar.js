import React, { useState } from "react";

import  "./Header.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const NavB = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

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
                        <div className="nav__button__container">
                            <Button />
                        </div>
                    </nav>
                </div>
                <div>
                    <div className="header__button__container">
                        <Button />
                    </div>
                    <button className="header__toggler" onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                    </button>
                </div>
            </div>
        </div>
    );
};

const Button = () => {
    return <button className="button">Click me</button>;
};

export default NavB;
