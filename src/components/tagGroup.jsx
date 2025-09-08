function tagGroup({ tags }) {
    return (
        <div className="flex-row">
            {tags.map((tag) => (
                <ul key={tag} style={{ justifySelf: "center", alignItems: "center" }}>
                    <div className="card-container" style={{ backgroundColor: "#D23278"}}>
                        <h4 style={{ color: "#FFFFFF", fontSize: "1.75rem", padding: "1.5rem" }}>{tag}</h4>
                    </div>
                </ul>
            ))}
        </div>
    );
}

export default tagGroup;