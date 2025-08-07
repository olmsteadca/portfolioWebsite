import "./update.css"

function update({ title, date, summary, image }) {
  return (
      <section className="update">
          <div className="update-spacing">

              <div className="image-spacing">
                  <img src={image} className="update-image"/>
              </div>

              <div className="update-info">
                  <div className="info">
                      <h1 className="update-title">{title}</h1>
                  </div>
                  <div className="info-">
                      <h2 className="timestamp">{date}</h2>
                  </div>
                  <div className="info">
                      <p className="summary">{summary}</p>
                  </div>
              </div>

          </div>
      </section>
  );
}

export default update;