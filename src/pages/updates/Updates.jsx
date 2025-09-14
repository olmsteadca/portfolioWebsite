import UpdateCard from "./components/UpdateCard"
import allUpdates from "@/data/updates.json"

function Updates() {
  return (
    <div className="section-content">
      <h1 style={{ color: "#FFFFFFF" }}>Updates</h1>
      <div className="transparent-container">
        <ul className="flex-grid" style={{padding: "2rem", listStyle: "none"}}>
          {allUpdates.map((update) => (
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
    </div>
  );
}

export default Updates;