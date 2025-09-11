function tagGroup({ tags }) {
    return (
        <div className="flex-row">
            {tags.map((tag) => (
                <ul key={tag}>
                    <div className="opaque-container" style={{ backgroundColor: "#D23278" }}>
                        <h4 style={{ color: "#FFFFFF", fontSize: "1.75rem", padding: "1rem" }}>{tag}</h4>
                    </div>
                </ul>
            ))}
        </div>
    );
}

export default tagGroup;