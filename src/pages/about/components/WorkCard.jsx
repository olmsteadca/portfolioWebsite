import WorkTable from "./WorkTable"
import TagGroup from "@components/TagGroup/TagGroup"
import "./workCard.css"

function WorkCard({ title, dates, desc, jobs, tags }) {
  return (
      <div className="work-container" id="work-history-card">

          <div className="flex-row" style={{ flexWrap: "nowrap", gap: "0" }}>

              <div className="flex-column" style={{ margin: "1rem", gap: "0.5rem" }}>

                  <div className="work-row">
                      <h2 className="work-title">{title}</h2>
                      <h3 className="work-date">{dates}</h3>
                  </div>

                  <div className="work-row" style={{justifyContent: "space-between"}}>
                      <p className="work-desc">{desc}</p>

                      {jobs && (
                          <WorkTable contents={jobs} />
                      )}

                  </div>



                  <div className="work-row">
                      <TagGroup tags={tags} />
                  </div>
              </div>

          </div>

      </div>
  );
}

export default WorkCard;