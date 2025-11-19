import styles from "./Nav.module.css"

/* TODO: weirdness with large/small spacing on left */

function PageNav({ sections }) {
    return (
        <section id="page-contents" style={{ borderLeft: "4px solid rgb(250, 250, 250)"}}>
        <ul className={styles.column}>
          {sections.map((section) => (
            <h3 key={section} className={styles.link} >{section}</h3>
                ))}
            </ul>
        </section>
    );
}

export default PageNav;