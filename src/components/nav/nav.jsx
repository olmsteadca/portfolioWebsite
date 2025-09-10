import { Link } from 'react-router-dom';
import PageLinks from "./PageNav.jsx";

function Nav({ page }) {

    const homeSections = ["Introduction", "Featured Projects", "Recent Updates", "Get in Touch!"];
    const aboutSections = ["Summary", "Work History", "Fun Facts!"];

    return (
        <nav id="navbar">
            <div className="section-content">
                <ul className="flex-column" style={{listStyle: "none" , alignItems: "flex-start"}}>

                    <Link to="/" style={{ textDecoration: "none" }}>
                        <h2 style={{ color: "#FFFFFF", textAlign: "left" }}>Home</h2>
                    </Link>

                    {page == "/" && (
                        <PageLinks sections={homeSections} />
                    )}

                    <Link to="/Projects" style={{ textDecoration: "none" }}>
                        <h2 style={{ color: "#FFFFFF", textAlign: "left" }}>Projects</h2>
                    </Link>

                    <Link to="/Updates" style={{ textDecoration: "none" }}>
                        <h2 style={{ color: "#FFFFFF", textAlign: "left" }}>Updates</h2>
                    </Link>

                    <Link to="/About" style={{ textDecoration: "none" }}>
                        <h2 style={{ color: "#FFFFFF", textAlign: "left" }}>About</h2>
                    </Link>

                    {page == "/About" && (
                        <PageLinks sections={aboutSections} />
                    )}

                </ul>
            </div>
        </nav>
    );
}

export default Nav;
