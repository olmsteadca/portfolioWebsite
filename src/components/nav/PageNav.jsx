import "./nav.css"

/* TODO: weirdness with large/small spacing on left */

function PageNav({ sections }) {
    return (
        <section id="page-contents" style={{ borderLeft: "4px solid rgb(250, 250, 250)"}}>
        <ul className="nav-column" style={{ listStyle: "none", alignItems: "flex-end", marginRight: "1rem"}}>
                {sections.map((section) => (
                    <h3 key={section} className="nav-link-text">{section}</h3>
                ))}
            </ul>
        </section>
    );
}

export default PageNav;