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
            <header class="custom-header">
                <Link class="navbar-brand d-lg-inline-block d-none" to={''}>
                    <div class="custom-header-logo">
                        <Logo />
                    </div>
                </Link>
                <nav class="navbar navbar-expand-lg navbar-dark w-100 align-items-center justify-content-lg-center justify-content-start">
                    <button class="navbar-toggler border-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse custom-navbar position-lg-relative position-absolute bg-lg-transparent" id="navbarTogglerDemo01">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 custom-header-list">
                            <MenuList />
                        </ul>
                    </div>
                </nav>
                <div class="custom-header-rightside">
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
