import { Link } from 'react-router-dom';
import PageLinks from "./PageNav.jsx";
import "./nav.css"


function Nav({ page }) {

    const homeSections = ["Featured Projects", "Recent Updates"];
    const aboutSections = ["Summary", "Work History"]; /* Add Fun Facts later */ 

    return (
        <nav id="navbar" style={{ position: "fixed" }}>
            <ul className="nav-column">

                <Link to="/" className="nav-link">
                    <h2 className="nav-link-text">Home</h2>
                </Link>


                {page == "/" && (
                    <PageLinks sections={homeSections} />
                )}


                <Link to="/Projects" className="nav-link">
                    <h2 className="nav-link-text">Projects</h2>
                </Link>

                <Link to="/Updates" className="nav-link">
                    <h2 className="nav-link-text">Updates</h2>
                </Link>

                <Link to="/About" className="nav-link">
                    <h2 className="nav-link-text">About</h2>
                </Link>

                {page == "/About" && (
                    <PageLinks sections={aboutSections} />
                )}


                </ul>
        </nav>
    );
}

export default Nav;
