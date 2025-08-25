import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from "@/components/nav/nav.jsx"
import Footer from "@/components/contactFooter/ContactFooter.jsx"

function Layout() {
    var location = useLocation();
    var page = location.pathname;

    return (
        <div className="layout">
            <Nav page={page} className="nav"/>
            <main className="page">
                <Outlet />
                <Footer/>
            </main>
        </div>
    );
}

export default Layout;