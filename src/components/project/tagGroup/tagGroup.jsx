import "./tagGroup.css"

function tagGroup({ tags }) {
    return (
        <div className="tag-group">
            {tags.map((tag) => (
                <ul key = {tag}>
                    <div className="tag">
                        <div className="tag-spacing">
                            <h3 className="tag-text">{tag}</h3>
                        </div>
                    </div>
                </ul>
            ))}
        </div>
    );
}

export default tagGroup;