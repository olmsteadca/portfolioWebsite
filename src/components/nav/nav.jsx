import { Link } from 'react-router-dom';
import PageLinks from "./PageNav.jsx";
import styles from "./Nav.module.css"

/* TODO: find way to connect line on side to bottom of compass? on click it collapses to just compass?*/

function Nav({ page }) {

  const homeSections = ["Featured Projects", "Recent Updates"];
  const aboutSections = ["Summary", "Work History"]; /* Add Fun Facts later */ 

  return (
    <nav id="navbar" style={{ marginLeft: "0.5rem" }}>
      <ul className={styles.column}>
        <img src="./icons/compass.svg" className={styles.icon} />
        <Link to="/" className={styles.link}>
          <h2 className={styles.link}>Home</h2>
        </Link>

        {page == "/" && (
          <PageLinks sections={homeSections} />
        )}

        <Link to="/Projects" className={styles.link}>
          <h2 className={styles.link}>Projects</h2>
        </Link>

        <Link to="/Blog" className={styles.link}>
          <h2 className={styles.link}>Blog</h2>
        </Link>

        <Link to="/About" className={styles.link}>
          <h2 className={styles.link}>About</h2>
        </Link>

        {page == "/About" && (
          <PageLinks sections={aboutSections} />
        )}
      </ul>
    </nav>
  );
}

export default Nav;
