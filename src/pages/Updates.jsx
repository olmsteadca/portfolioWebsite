import Update from '../components/recentUpdates/update/update.jsx'
import allUpdates from '../data/updates.json'

function updates() {
    return (
        <div className="section-container">
            <div className="section-content">
                <h1 className="title">Updates</h1>
                <ul className="wrap-row-center">
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