import Update from "@/components/cards/UpdateCard"
import allUpdates from "@/data/projects.json"

function updates() {
    return (
        <div className="section-container">
            <div className="section-content">
                <h1 className="title">Updates</h1>
                <ul className="flex-row" style={{flexWrap: "nowrap"}}>
                    {allUpdates.map((update) => (
                        <Update
                            id={update.id}
                            title={update.title}
                            date={update.date}
                            summary={update.summary}
                            image={update.image}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default updates;