import { Link } from 'react-router-dom';
import PageLinks from "./page-nav/page-nav.jsx";
import "./nav.css"

function nav() {
    var sections = ["Introduction", "Featured Projects", "Recent Updates", "Get in Touch!"];
  return (
      <nav className="navbar">
          <div className="navbar-content">
              <ul className="navbar-links">
                  <li><Link to="/" className="navbar-link">Home</Link>
                      <PageLinks sections={sections} />
                  </li>
                  <li><Link to="/Projects" className="navbar-link">Projects</Link></li>
                  <li><Link to="/Updates" className="navbar-link">Updates</Link></li>
                  <li><Link to="/About" className="navbar-link">About</Link></li>
              </ul>
          </div>
      </nav>
  );
}

export default nav;