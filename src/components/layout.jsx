import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from "../components/nav/nav.jsx"

function Layout() {
    return (
        <>
            <main>
                <div className="layout">
                    <div className="nav-container">
                        <Navigation />
                    </div>
                    <div className="page-container">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Layout;
