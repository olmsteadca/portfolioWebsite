import Update from "./components/UpdateCard"
import allUpdates from "@/data/updates.json"

function updates() {
    return (
        <div className="transparent-container" style={{ marginBottom: "2rem" }}>
            <div className="section-content">
                <h1 style={{ color: "#29478A" }}>Updates</h1>
                <ul className="flex-grid">
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