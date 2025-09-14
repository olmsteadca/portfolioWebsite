import allUpdates from "@/data/updates.json"
import UpdateCard from "$/updates/components/UpdateCard"

function RecentUpdates() {
    var updates = allUpdates.slice(-2);

    var path = "/GoodbyeMSWord"

    return (

        <section id="recent-updates-section">
            <div className="section-content">
                <h1 className="title">Recent Updates</h1>
                    
                <ul className="flex-row" style={{flexWrap: "nowrap"}}>
                    {updates.map((update) => (
                        <UpdateCard
                            key={update.id}
                            title={update.title}
                            date={update.date}
                            summary={update.summary}
                            image={update.image}
                            path={path}
                            />
                        ))}
                    </ul>
            </div>
        </section>
    );
}

export default RecentUpdates;