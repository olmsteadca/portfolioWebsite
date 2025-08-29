import { Link } from 'react-router-dom';
import PageLinks from "./page-nav/page-nav.jsx";
import "./nav.css"

function Nav({ page }) {

    const homeSections = ["Introduction", "Featured Projects", "Recent Updates", "Get in Touch!"];
    const aboutSections = ["Introduction", "Featured Projects", "Recent Updates", "Get in Touch!"];

    return (
        <nav id="navbar">
            <div className="navbar-content">
                <ul className="navbar-links">
                    <li>
                        <Link to="/" className="navbar-link">Home</Link>
                        {page == "/" && (

                            <PageLinks sections={homeSections} />
                        )}
                    </li>

                    <li><Link to="/Projects" className="navbar-link">Projects</Link></li>
                    <li><Link to="/Updates" className="navbar-link">Updates</Link></li>

                    <li>
                        <Link to="/About" className="navbar-link">About</Link>
                        {page == "/About" && (

                            <PageLinks sections={aboutSections} />
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
