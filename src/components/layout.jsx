import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from "@/components/nav/nav.jsx"

function Layout() {
    var location = useLocation();
    var page = location.pathname;

    return (
        <>
            <main>
                <div className="layout">
                    <div className="nav-container">
                        <Nav
                            page={page}
                        />
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
