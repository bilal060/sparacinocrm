import React from "react";
import AppHeader from "./header";
import '../assets/css/layout.css'

function MainLayout({ children }) {
    return (
        <>
            <div className="layout-container">
                <AppHeader />
                <div className="main-content">
                    {children}
                </div>
            </div>
        </>
    );
}

export default MainLayout;
