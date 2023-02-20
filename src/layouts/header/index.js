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

                        <ul className="mr-auto mt-2 mt-lg-0 custom-header-list">
                            <MenuList />
                        </ul>
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
