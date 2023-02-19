import React from "react";
import Logo from "../../assets/images/svg/logo"
import '../../assets/css/header.css'
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/images/svg/searchIcon";
import NoticficationIcon from "../../assets/images/svg/NoticficationIcon";
import UserIcon from "../../assets/images/svg/UserIcon";
import MenuList from "./MenuList";

function AppHeader() {



    return (
        <>
            <header className="custom-header">
                <Link className="navbar-brand d-lg-inline-block d-none" to={''}>
                    <div className="custom-header-logo">
                        <Logo />
                    </div>
                </Link>
                <nav className="navbar navbar-expand-lg navbar-dark w-100 align-items-center justify-content-lg-center justify-content-start">
                    <button className="navbar-toggler border-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse custom-navbar position-lg-relative position-absolute bg-lg-transparent" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 custom-header-list">
                            <MenuList />
                        </ul>
                    </div>
                </nav>
                <div className="custom-header-rightside">
                    <div>
                        <SearchIcon />
                    </div>
                    <div>
                        <NoticficationIcon />
                    </div>
                    <div>
                        <UserIcon />
                    </div>
                </div>
            </header>
        </>
    );
}

export default AppHeader;
