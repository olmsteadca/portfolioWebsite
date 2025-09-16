import "./nav.css"

function PageNav({ sections }) {
    return (
        <section id="page-contents" style={{ borderLeft: "4px solid rgba(250, 250, 250, 0.6)"}}>
            <ul className="nav-column" style={{width: "min-content", marginLeft: "-2.5rem", listStyle: "none"}}>
                {sections.map((section) => (
                    <h3 key={section} className="nav-link-text">{section}</h3>
                ))}
            </ul>
        </section>
    );
}

export default PageNav;