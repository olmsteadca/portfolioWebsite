import "./recentUpdates.css"
import allUpdates from "../../data/updates.json";
import Update from "./update/update.jsx"

function recentUpdates() {
    var updates = allUpdates.slice(-2);

    return (

        <section className="recent-updates" id="recent_updates-section">
            <div className="updates-spacing">
                <h1 className="r-u-title">Recent Updates</h1>
                    
                    <ul className="updates-list">
                        {updates.map((update) => (
                            <Update
                                key={update.id}
                                title={update.title}
                                date={update.date}
                                summary={update.summary}
                                image={update.image}
                            />
                        ))}
                    </ul>
            </div>
        </section>
    );
}

export default recentUpdates;