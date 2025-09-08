function PageNav({ sections }) {
    var cntr = 1;
    return (
        <section id="page-contents" style={{ borderLeft: "4px solid rgba(250, 250, 250, 0.6)"}}>
            <div className="section-content">
                <div className="flex-column" style={{ gap: "0.25rem", marginTop: "-2rem", marginBottom: "-2rem" }}>
                    <ul style={{marginLeft: "-2rem"}}>
                        {sections.map((section) => (
                            <h3 key={cntr++} style={{textAlign: "left", color:"#FFFFFF", fontWeight: "500"}} >{section}</h3>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default PageNav;