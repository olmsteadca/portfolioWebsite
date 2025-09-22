import allUpdates from "@/data/updates.json"
import UpdateCard from "$/updates/components/UpdateCard.jsx"

function RecentUpdates() {
  var updates = allUpdates.slice(-2);
  return (
    <section id="recent-updates-section">
      <div className="section-content">
        <h1 className="title">Recent Updates</h1>
        <ul className="flex-row" style={{ flexWrap: "nowrap", listStyle: "none" }}>
          {updates.map((update) => (
            <li key={update.id}>
              <UpdateCard
                id={update.id}
                title={update.title}
                date={update.date}
                summary={update.summary}
                image={update.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default RecentUpdates;